import assert from "node:assert/strict";
import { test } from "node:test";

import {
  customMessageHistoryResponseFromJSON,
  customMessageHistoryResponseToJSON,
} from "../../../models/components/custommessagehistoryresponse.js";
import {
  customMessageResponseFromJSON,
  customMessageResponseToJSON,
} from "../../../models/components/custommessageresponse.js";

const configuration = {
  subject: "Previous subject",
  hidden: { empty: "", nil: null, enabled: false, count: 0, values: [3, 1, 2] },
};
const snapshot = {
  custom_message_id: 12,
  version_number: 2,
  snapshot_schema_version: 1,
  operation: "update",
  created_at: "2026-10-01T00:00:00.000Z",
  updated_by: null,
  comments: null,
  restored_from_version: null,
  name: "Historical",
  type: "greeting",
  preamble: null,
  text: "",
  label: "",
  repeat_after_language_change: false,
  rules: [
    { date: "2020-01-01", invert: false, text: "Closed", legacy: configuration },
    { unsupported_condition: { values: [false, 0, null, ""] } },
  ],
  type_config: configuration,
};

for (const type of ["greeting", "email_template"]) {
  test(`${type} history decoding and serialization preserve the complete saved configuration`, () => {
    const saved = { ...snapshot, type, text: type === "email_template" ? "<p>{{name}}</p>" : "" };
    const decoded = customMessageHistoryResponseFromJSON(JSON.stringify(saved));
    assert.equal(decoded.ok, true);
    assert.deepEqual(decoded.value.rules, saved.rules);
    assert.deepEqual(decoded.value.typeConfig, saved.type_config);
    assert.deepEqual(JSON.parse(customMessageHistoryResponseToJSON(decoded.value)), saved);
  });

  test(`${type} live decoding and serialization preserve type-specific configuration`, () => {
    const saved = {
      id: 12,
      name: "Live",
      type,
      text: "Hello",
      repeat_after_language_change: false,
      version_number: 3,
      updated_at: "2026-10-01T00:00:00.000Z",
      last_updated_by: "editor@example.com",
      type_config: configuration,
    };
    const decoded = customMessageResponseFromJSON(JSON.stringify(saved));
    assert.equal(decoded.ok, true);
    assert.deepEqual(decoded.value.typeConfig, saved.type_config);
    assert.deepEqual(JSON.parse(customMessageResponseToJSON(decoded.value)), saved);
  });
}

test("empty saved rule and configuration objects remain readable", () => {
  const saved = { ...snapshot, rules: [{}], type_config: {} };
  const decoded = customMessageHistoryResponseFromJSON(JSON.stringify(saved));
  assert.equal(decoded.ok, true);
  assert.deepEqual(JSON.parse(customMessageHistoryResponseToJSON(decoded.value)), saved);
});

test("historical rule entries still require objects", () => {
  for (const invalidRule of [null, false, 0, "legacy", []]) {
    const decoded = customMessageHistoryResponseFromJSON(
      JSON.stringify({ ...snapshot, rules: [invalidRule] }),
    );
    assert.equal(decoded.ok, false);
  }
});
