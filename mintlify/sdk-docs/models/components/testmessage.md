# TestMessage

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
| `serviceName`                                                                          | *string*                                                                               | TRUE                                                                     | Name of the service producing the message                                              |
| `source`                                                                               | *string*                                                                               | TRUE                                                                     | Name of the source of the message, should identify the user, like an email or username |
| `text`                                                                                 | *string*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `testId`                                                                               | *string*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `agentId`                                                                              | *string*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `orgName`                                                                              | *string*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `overrideTimestamp`                                                                    | *string*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `sessionStart`                                                                         | *boolean*                                                                              | FALSE                                                                     | N/A                                                                                    |