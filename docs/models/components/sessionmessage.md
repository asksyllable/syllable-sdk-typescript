# SessionMessage

## Example Usage

```typescript
import { SessionMessage } from "syllable-sdk/models/components";

let value: SessionMessage = {
  role: "agent",
  dialog: {
    text: "<value>",
  },
  toolCalls: [
    {
      toolCallId: "<id>",
      toolName: "<value>",
      toolArguments: {},
      timestamp: new Date("2025-05-27T23:28:25.141Z"),
    },
  ],
  timestamp: new Date("2023-02-15T03:11:35.631Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `role`                                                                                        | [components.DialogRole](../../models/components/dialogrole.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dialog`                                                                                      | [components.DialogMessage](../../models/components/dialogmessage.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolCalls`                                                                                   | [components.DialogToolCall](../../models/components/dialogtoolcall.md)[]                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |