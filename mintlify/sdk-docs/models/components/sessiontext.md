---
title: 'SessionText'
---

Information about a given message from a user to an agent or vice-versa.

## Example Usage

```typescript
import { SessionText } from "syllable-sdk/models/components";

let value: SessionText = {
  timestamp: new Date("2024-11-26T17:25:09.979Z"),
  lang: "unset",
  source: "user",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `timestamp`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | TRUE                                                                                           | Timestamp of the message                                                                                     |                                                                                                              |
| `lang`                                                                                                       | *string*                                                                                                     | FALSE                                                                                           | ISO 639 code of the language used for the message (may appear as "unset" if was not conclusively determined) | en-US                                                                                                        |
| `source`                                                                                                     | *string*                                                                                                     | FALSE                                                                                           | Whether the user or agent sent the message                                                                   | user                                                                                                         |
| `text`                                                                                                       | *string*                                                                                                     | FALSE                                                                                           | Content of the message                                                                                       |                                                                                                              |