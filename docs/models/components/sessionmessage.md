# SessionMessage

## Example Usage

```typescript
import { SessionMessage } from "syllable-sdk/models/components";

let value: SessionMessage = {
  role: "user",
  dialog: {
    text: "Tell me about Syllable.ai!",
  },
  toolCalls: [
    {
      toolCallId: "call_arbitrary_id",
      toolName: "general_information_web",
      toolArguments: {
        "question": "Tell me about Syllable.ai!",
      },
      toolResult: {
        "answer":
          "Syllable is a platform for building and managing AI voice agents...",
      },
      timestamp: new Date("2024-06-19T00:00:00"),
    },
  ],
  timestamp: new Date("2024-06-19T00:00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `role`                                                                                        | [components.DialogRole](../../models/components/dialogrole.md)                                | :heavy_check_mark:                                                                            | Role of dialog                                                                                |                                                                                               |
| `dialog`                                                                                      | [components.DialogMessage](../../models/components/dialogmessage.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `toolCalls`                                                                                   | [components.DialogToolCall](../../models/components/dialogtoolcall.md)[]                      | :heavy_check_mark:                                                                            | Tool calls                                                                                    |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Message timestamp                                                                             | 2024-06-19T00:00:00                                                                           |