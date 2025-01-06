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
| `serviceName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the service producing the message                                              |
| `source`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the source of the message, should identify the user, like an email or username |
| `text`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `testId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `orgName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `overrideTimestamp`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `sessionStart`                                                                         | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |