# ChatMessage

## Example Usage

```typescript
import { ChatMessage } from "syllable-sdk/models/components";

let value: ChatMessage = {
  serviceName: "<value>",
  sourceName: "<value>",
  chatId: "<id>",
  agentId: "<id>",
  orgName: "<value>",
  text: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `serviceName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the service producing the message                                              |
| `sourceName`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the source of the message, should identify the user, like an email or username |
| `chatId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `orgName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `text`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |