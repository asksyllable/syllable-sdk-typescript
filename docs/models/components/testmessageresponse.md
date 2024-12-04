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
| `testId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `agentId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `response`                                                 | [components.Response](../../models/components/response.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `responseText`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |