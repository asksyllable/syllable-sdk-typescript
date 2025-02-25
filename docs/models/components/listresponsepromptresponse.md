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
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 395233,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 310840,
  pageSize: 718627,
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