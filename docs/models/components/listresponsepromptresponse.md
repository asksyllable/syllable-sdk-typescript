# ListResponsePromptResponse

## Example Usage

```typescript
import { ListResponsePromptResponse } from "syllable-sdk/models/components";

let value: ListResponsePromptResponse = {
  items: [
    {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        model: "gpt-4o",
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 904949,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 296556,
  pageSize: 992012,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.PromptResponse](../../models/components/promptresponse.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `page`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `pageSize`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `totalPages`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |