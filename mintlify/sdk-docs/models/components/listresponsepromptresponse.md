---
title: 'ListResponsePromptResponse'
---

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
      id: 424089,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 554688,
  pageSize: 287051,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.PromptResponse](/sdk-docs/models/components/promptresponse)[] | TRUE                                                       | N/A                                                                      |
| `page`                                                                   | *number*                                                                 | TRUE                                                       | N/A                                                                      |
| `pageSize`                                                               | *number*                                                                 | TRUE                                                       | N/A                                                                      |
| `totalPages`                                                             | *number*                                                                 | FALSE                                                       | N/A                                                                      |
| `totalCount`                                                             | *number*                                                                 | FALSE                                                       | N/A                                                                      |