# TestMessageResponse

Response from an agent in a test chat.

## Example Usage

```typescript
import { TestMessageResponse } from "syllable-sdk/models/components";

let value: TestMessageResponse = {
  testId: "<id>",
  agentId: "<id>",
  response: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `testId`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Channel-manager-side ID of the session (see Session.channel_manager_sid) |
| `agentId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the agent with which the chat is taking place                      |
| `text`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The text of the message that elicited the response                       |
| `response`                                                               | *any*                                                                    | :heavy_check_mark:                                                       | The response from the agent                                              |
| `responseText`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The text of the response                                                 |