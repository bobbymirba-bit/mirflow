/* eslint-disable @typescript-eslint/no-require-imports -- This Node-only harness loads the compiled route in a VM. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const cache = new Map();
const net = { fetch: async () => { throw new Error("unexpected fetch"); } };

function loadTs(rel) {
  if (cache.has(rel)) return cache.get(rel);
  const source = fs.readFileSync(rel, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const exports = {};
  function localRequire(id) {
    if (id.startsWith("@/")) return loadTs(path.join("src", `${id.slice(2)}.ts`));
    return require(id);
  }
  vm.runInNewContext(compiled, {
    exports,
    require: localRequire,
    process,
    console,
    URL,
    AbortSignal,
    fetch: (...args) => net.fetch(...args),
  });
  cache.set(rel, exports);
  return exports;
}

const route = loadTs("src/app/api/audit-request/route.ts");
const booking = loadTs("src/lib/booking-url.ts");

const valid = {
  name: "Test person",
  businessName: "Test company",
  phone: "(949) 422-8674",
  email: "bobby@mirflow.online",
  smsConsent: true,
  source: "home",
  utm_source: "linkedin",
  utm_medium: "social",
  utm_campaign: "audit",
};

const envKeys = ["RESEND_API_KEY", "CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"];

async function run(payload, env = {}, status = 200) {
  const previous = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
  for (const key of envKeys) delete process.env[key];
  Object.assign(process.env, env);
  const calls = [];
  net.fetch = async (url, options) => {
    calls.push({ url, ...JSON.parse(options.body), authorization: options.headers.Authorization });
    return { ok: status === 200, status: status === 200 ? 200 : 500 };
  };
  try {
    const response = await route.POST(new Request("https://mirflow.online/api/audit-request", {
      method: "POST",
      body: payload === undefined ? "{" : JSON.stringify(payload),
    }));
    return { response, calls };
  } finally {
    for (const key of envKeys) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
}

(async () => {
  assert.equal(booking.publicBookingUrl(undefined), null);
  assert.equal(booking.publicBookingUrl("  "), null);
  assert.equal(booking.publicBookingUrl("http://calendly.com/mirflow/intro-call"), null);
  assert.equal(booking.publicBookingUrl("javascript:alert(1)"), null);
  assert.equal(booking.publicBookingUrl("https://user:pass@calendly.com/x"), null);
  assert.equal(booking.publicBookingUrl("https://calendly.com/example/15min"), "https://calendly.com/example/15min");

  for (const payload of [
    null,
    [],
    { ...valid, name: "" },
    { ...valid, phone: "123" },
    { ...valid, phone: "1111111111" },
    { ...valid, email: "not-an-email" },
    { ...valid, smsConsent: false },
    { ...valid, name: "https://spam.example" },
    { ...valid, websiteTrap: "bot" },
  ]) {
    const result = await run(payload);
    assert.equal(result.response.status, 400, JSON.stringify(payload));
    assert.equal(result.calls.length, 0);
  }

  assert.equal((await run(valid)).response.status, 503);

  const env = {
    RESEND_API_KEY: "test-only",
    CONTACT_FROM_EMAIL: "Mirflow <leads@mirflow.online>",
    CONTACT_TO_EMAIL: "other@example.com",
  };
  assert.equal((await run(valid, env, 500)).response.status, 502);

  const success = await run(valid, env);
  assert.equal(success.response.status, 200);
  assert.equal(success.calls.length, 1);
  assert.equal(success.calls[0].url, "https://api.resend.com/emails");
  assert.equal(success.calls[0].authorization, "Bearer test-only");
  assert.deepEqual(success.calls[0].to, ["bobby@mirflow.online"]);
  assert.equal(success.calls[0].from, "Mirflow <leads@mirflow.online>");
  assert.equal(success.calls[0].reply_to, valid.email);
  assert.match(success.calls[0].text, /UTM source: linkedin/);
  assert.match(success.calls[0].text, /UTM term: -/);
  assert.match(success.calls[0].text, /SMS\/call consent: yes/);
  assert.doesNotMatch(success.calls[0].text, /other@example.com/);

  const phoneOnly = await run({ ...valid, email: "" }, { RESEND_API_KEY: "test-only" });
  assert.equal(phoneOnly.response.status, 200);
  assert.equal(phoneOnly.calls[0].from, "Mirflow <leads@mirflow.online>");
  assert.equal(phoneOnly.calls[0].reply_to, undefined);
  assert.match(phoneOnly.calls[0].text, /Email: -/);

  console.log("Lead validation, booking URL guard, configuration, provider failure, and delivery payload tests passed. No email sent.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
