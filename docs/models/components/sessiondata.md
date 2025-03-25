# SessionData

## Example Usage

```typescript
import { SessionData } from "syllable-sdk/models/components";

let value: SessionData = {
  sessionId: 123,
  source: "+1234567890",
  target: "+1239876543",
  isTest: false,
  messages: [
    {
      role: "agent",
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
          timestamp: new Date("2024-06-19T00:00:00"),
        },
      ],
      timestamp: new Date("2024-06-19T00:00:00"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sessionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Session ID                                                               | 123                                                                      |
| `source`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Session source                                                           | +1234567890                                                              |
| `target`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Session target                                                           | +1239876543                                                              |
| `isTest`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | Is test session                                                          | false                                                                    |
| `messages`                                                               | [components.SessionMessage](../../models/components/sessionmessage.md)[] | :heavy_check_mark:                                                       | Session messages                                                         |                                                                          |