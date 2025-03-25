# DialogToolCall

## Example Usage

```typescript
import { DialogToolCall } from "syllable-sdk/models/components";

let value: DialogToolCall = {
  toolCallId: "call_arbitrary_id",
  toolName: "general_information_web",
  toolArguments: {
    "question": "Tell me about Syllable.ai!",
  },
  timestamp: new Date("2024-06-19T00:00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `toolCallId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Tool call ID                                                                                  | call_arbitrary_id                                                                             |
| `toolName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Tool name                                                                                     | general_information_web                                                                       |
| `toolArguments`                                                                               | *any*                                                                                         | :heavy_check_mark:                                                                            | Tool arguments                                                                                | {<br/>"question": "Tell me about Syllable.ai!"<br/>}                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Tool call timestamp                                                                           | 2024-06-19T00:00:00                                                                           |