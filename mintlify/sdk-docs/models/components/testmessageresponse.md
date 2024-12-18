# TestMessageResponse

## Example Usage

```typescript
import { TestMessageResponse } from "syllable-sdk/models/components";

let value: TestMessageResponse = {
  testId: "<id>",
  agentId: "<id>",
  text: "<value>",
  responseText: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `testId`                                                   | *string*                                                   | TRUE                                         | N/A                                                        |
| `agentId`                                                  | *string*                                                   | TRUE                                         | N/A                                                        |
| `text`                                                     | *string*                                                   | TRUE                                         | N/A                                                        |
| `response`                                                 | [components.Response](../../models/components/response.md) | FALSE                                         | N/A                                                        |
| `responseText`                                             | *string*                                                   | TRUE                                         | N/A                                                        |