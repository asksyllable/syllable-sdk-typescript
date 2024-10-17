# ChatMessageResponse

## Example Usage

```typescript
import { ChatMessageResponse } from "syllable-sdk/models/components";

let value: ChatMessageResponse = {
  chatId: "<id>",
  agentId: "<id>",
  text: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `chatId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `agentId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `response`                                                 | [components.Response](../../models/components/response.md) | :heavy_minus_sign:                                         | N/A                                                        |