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
      id: 837945,
      lastUpdated: "<value>",
    },
  ],
  page: 96098,
  pageSize: 976460,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.Prompt](../../models/components/prompt.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageSize`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalPages`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `totalCount`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |