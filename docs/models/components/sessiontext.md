# SessionText

Information about a given message from a user to an agent or vice-versa.

## Example Usage

```typescript
import { SessionText } from "syllable-sdk/models/components";

let value: SessionText = {
  timestamp: new Date("2026-05-14T15:25:03.880Z"),
  lang: "en-US",
  source: "user",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `timestamp`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Timestamp of the message                                                                                     |                                                                                                              |
| `lang`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | ISO 639 code of the language used for the message (may appear as "unset" if was not conclusively determined) | **Example 1:** en-US<br/>**Example 2:** es-US<br/>**Example 3:** unset                                       |
| `source`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Whether the user or agent sent the message                                                                   | **Example 1:** user<br/>**Example 2:** agent                                                                 |
| `text`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Content of the message                                                                                       |                                                                                                              |