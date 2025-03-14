# SessionData

## Example Usage

```typescript
import { SessionData } from "syllable-sdk/models/components";

let value: SessionData = {
  sessionId: 653000,
  source: "<value>",
  target: "<value>",
  isTest: false,
  messages: [
    {
      role: "agent",
      dialog: {
        text: "<value>",
      },
      toolCalls: [
        {
          tollCallId: "<id>",
          toolName: "<value>",
          toolArguments: {},
          timestamp: new Date("2024-08-24T12:55:52.067Z"),
        },
      ],
      timestamp: new Date("2025-06-12T11:40:46.096Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sessionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `source`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `target`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `isTest`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `messages`                                                               | [components.SessionMessage](../../models/components/sessionmessage.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |