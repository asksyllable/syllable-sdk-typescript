# ListResponsePrompt

## Example Usage

```typescript
import { ListResponsePrompt } from "syllable-sdk/models/components";

let value: ListResponsePrompt = {
  items: [
    {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        provider: "azure_openai",
        model: "gpt-4o",
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 976762,
      lastUpdated: "<value>",
    },
  ],
  page: 604846,
  pageSize: 739264,
  totalPages: 39187,
  totalCount: 282807,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.Prompt](../../models/components/prompt.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageSize`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalPages`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |