# SessionText

Information about a given message from a user to an agent or vice-versa.

## Example Usage

```typescript
import { SessionText } from "syllable-sdk/models/components";

let value: SessionText = {
  timestamp: new Date("2023-08-31T10:55:17.874Z"),
  lang: "unset",
  source: "user",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `timestamp`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Timestamp of the message                                                                                     |                                                                                                              |
| `lang`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | ISO 639 code of the language used for the message (may appear as "unset" if was not conclusively determined) | en-US                                                                                                        |
| `source`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Whether the user or agent sent the message                                                                   | user                                                                                                         |
| `text`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Content of the message                                                                                       |                                                                                                              |