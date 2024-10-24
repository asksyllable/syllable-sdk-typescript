# ListResponsePrompt

## Example Usage

```typescript
import { ListResponsePrompt } from "syllable-sdk/models/components";

let value: ListResponsePrompt = {
  items: [
    {
      name: "<value>",
      type: "<value>",
      llmConfig: {},
      id: 96098,
      lastUpdated: "<value>",
    },
  ],
  page: 976460,
  pageSize: 468651,
  totalPages: 976762,
  totalCount: 604846,
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