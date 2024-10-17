# PromptListResponse

## Example Usage

```typescript
import { PromptListResponse } from "syllable-sdk/models/components";

let value: PromptListResponse = {
  prompts: [
    {
      name: "<value>",
      llmConfig: {},
      id: 363711,
      lastUpdated: "<value>",
    },
  ],
  filterName: "<value>",
  page: 570197,
  pageSize: 438601,
  totalPages: 988374,
  totalCount: 102044,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `prompts`                                                | [components.Prompt](../../models/components/prompt.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `filterName`                                             | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageSize`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalPages`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |