import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render(pathname = "/") {
  const workerModule = await import(`${workerUrl.href}?test=${process.pid}-${Date.now()}-${pathname}`);
  return workerModule.default.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the homepage narrative", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /See crop stress before it becomes a problem/i);
  assert.match(html, /The platform/i);
  assert.match(html, /Founders/i);
  assert.match(html, /prototype%20image\.png/i);
});

test("renders focused pilot and contact pages", async () => {
  const [pilots, contact] = await Promise.all([render("/pilots"), render("/contact")]);
  assert.equal(pilots.status, 200);
  assert.equal(contact.status, 200);
  assert.match(await pilots.text(), /We are looking for pilot partners/i);
  assert.match(await contact.text(), /contact@sideristerra\.com/i);
});