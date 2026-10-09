import test from "node:test";
import assert from "node:assert/strict";
import { parseProgress } from "../dist/src/progress.js";
const ids = ["echo-vault", "parcel-panic"];
test("local summary only exposes allowlisted numeric completion", () => {
  const value = parseProgress(JSON.stringify({version:1,apps:{"echo-vault":{completed:2,total:12,seed:"private",name:"private"},unknown:{completed:3,total:4}}}),ids);
  assert.deepEqual(Object.keys(value),["echo-vault"]);
  assert.deepEqual(value["echo-vault"],{completed:2,total:12});
});
test("invalid summaries cannot masquerade as completed games", () => {
  for(const raw of [null,"{", "x".repeat(6001),JSON.stringify({version:2,apps:{}}),JSON.stringify({version:1,apps:[]})])assert.equal(Object.keys(parseProgress(raw,ids)).length,0);
  for(const e of [{completed:99,total:12},{completed:-1,total:12},{completed:1.1,total:12},{completed:1,total:1001},{completed:"1",total:12}])assert.equal(Object.keys(parseProgress(JSON.stringify({version:1,apps:{"echo-vault":e}}),ids)).length,0);
});
