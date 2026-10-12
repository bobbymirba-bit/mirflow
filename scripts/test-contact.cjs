/* eslint-disable @typescript-eslint/no-require-imports -- This Node-only harness loads the compiled route in a VM. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const valid = { name: 'Test person', email: 'test@example.com', message: 'Please assess our invoice workflow.', company: 'Test company', workflow: 'finance' };
async function run(payload, env = {}, status = 200) {
  const exports = {};
  const calls = [];
  vm.runInNewContext(compiled, { exports, require, process: { env }, AbortSignal,
    fetch: async (url, options) => { calls.push({ url, ...JSON.parse(options.body) }); return { ok: status === 200 }; },
  });
  const response = await exports.POST(new Request('https://mirflow.online/api/contact', { method: 'POST', body: JSON.stringify(payload) }));
  return { response, calls };
}
(async () => {
  for (const payload of [null, [], { ...valid, name: 123 }, { ...valid, email: 'bad' }, { ...valid, message: '' }, { ...valid, websiteTrap: 'bot' }]) {
    assert.equal((await run(payload)).response.status, 400);
  }
  assert.equal((await run(valid)).response.status, 503);
  const env = { RESEND_API_KEY: 'test-only', CONTACT_FROM_EMAIL: 'test@example.com', CONTACT_TO_EMAIL: 'owner@example.com' };
  assert.equal((await run(valid, env, 500)).response.status, 502);
  const success = await run(valid, env);
  assert.equal(success.response.status, 200);
  assert.equal(success.calls.length, 1);
  assert.equal(success.calls[0].reply_to, valid.email);
  assert.deepEqual(success.calls[0].to, ['owner@example.com']);
  assert.match(success.calls[0].text, /workflow: finance/);
  console.log('Contact validation, configuration, provider failure, and delivery payload tests passed. No email sent.');
})().catch(error => { console.error(error); process.exitCode = 1; });
