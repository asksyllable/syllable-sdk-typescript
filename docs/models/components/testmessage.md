# TestMessage

Message sent in a test chat with an agent.

## Example Usage

```typescript
import { TestMessage } from "syllable-sdk/models/components";

let value: TestMessage = {
  serviceName: "<value>",
  source: "<value>",
  testId: "<id>",
  agentId: "<id>",
  orgName: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `serviceName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the service producing the message                                              |
| `source`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the source of the message, should identify the user, like an email or username |
| `text`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The text of the message                                                                |
| `testId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | Channel-manager-side ID of the session (see Session.channel_manager_sid)               |
| `agentId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the agent with which the chat is taking place                                    |
| `orgName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the organization associated with the agent                                     |
| `overrideTimestamp`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Override for the timestamp of the message                                              |
| `sessionStart`                                                                         | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether this message is the start of a new session                                     |