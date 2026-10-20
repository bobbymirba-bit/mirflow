import type { FaqEntry } from "@/data/faq";

/**
 * Tiny BM25 retriever over the FAQ. Runs entirely in the browser: no LLM, no API,
 * no cost. The agent only ever returns an FAQ entry's own answer text.
 */
const STOP = new Set(
  "a an and are as at be but by can could do does did for from get got had has have how i if in into is it its me my of on or our so that the their them then there these they this to us was we what when where which who why will with would you your yours about any just also than too very more most some such should may might much many there's what's it's i'm don't doesn't".split(
    " "
  )
);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9$\s-]/g, " ")
    .replace(/-/g, " ")
    .split(/\s+/)
    .filter((t) => t && !STOP.has(t))
    .map(stem);
}

function stem(t: string): string {
  if (t.length > 4 && t.endsWith("ies")) return t.slice(0, -3) + "y";
  if (t.length > 5 && t.endsWith("ing")) return t.slice(0, -3);
  if (t.length > 4 && t.endsWith("ed")) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
}

// Generic words that appear across the whole offer; they can't carry a match alone.
const WEAK = new Set(["mirflow", "agent", "ai", "help", "page", "site", "question", "answer", "customer", "center"].map(stem));

type Doc = { entry: FaqEntry; tf: Map<string, number>; len: number };

export type SearchResult = { entry: FaqEntry; score: number } | null;

export function buildIndex(entries: FaqEntry[]) {
  const docs: Doc[] = entries.map((entry) => {
    // Question and keywords are weighted double relative to the answer body.
    const tokens = [
      ...tokenize(entry.question),
      ...tokenize(entry.question),
      ...tokenize(entry.keywords.join(" ")),
      ...tokenize(entry.keywords.join(" ")),
      ...tokenize(entry.answer),
    ];
    const tf = new Map<string, number>();
    for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    return { entry, tf, len: tokens.length };
  });
  const N = docs.length;
  const avgLen = docs.reduce((s, d) => s + d.len, 0) / N;
  const df = new Map<string, number>();
  for (const d of docs) for (const t of d.tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
  const idf = (t: string) => {
    const n = df.get(t) ?? 0;
    return Math.log(1 + (N - n + 0.5) / (n + 0.5));
  };
  const k1 = 1.2;
  const b = 0.75;

  return function search(query: string, minScore = 2.2): SearchResult {
    const q = Array.from(new Set(tokenize(query)));
    const strong = q.filter((t) => !WEAK.has(t) && df.has(t));
    if (strong.length === 0) return null;
    let best: { doc: Doc; score: number } | null = null;
    for (const d of docs) {
      let score = 0;
      let strongHits = 0;
      for (const t of q) {
        const f = d.tf.get(t);
        if (!f) continue;
        if (!WEAK.has(t)) strongHits++;
        score += idf(t) * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.len) / avgLen)));
      }
      if (strongHits === 0) continue;
      if (!best || score > best.score) best = { doc: d, score };
    }
    // Require enough overlap relative to the query, so long off-topic questions
    // that share one stray word don't get an answer.
    if (!best || best.score < minScore) return null;
    const bestDoc = best.doc;
    const coverage = strong.filter((t) => bestDoc.tf.has(t)).length / strong.length;
    if (coverage < 0.34) return null;
    return { entry: bestDoc.entry, score: best.score };
  };
}
