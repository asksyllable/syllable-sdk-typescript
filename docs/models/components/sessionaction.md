# SessionAction

Information about a given tool invocation as part of a session.

## Example Usage

```typescript
import { SessionAction } from "syllable-sdk/models/components";

let value: SessionAction = {
  timestamp: new Date("2024-03-05T23:33:26.638Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the tool invocation                                                              |
| `toolName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the tool that was invoked                                                             |
| `toolRequest`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Request sent to the tool API, if applicable                                                   |
| `toolResult`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Response received from the tool API, if applicable                                            |