---
title: 'ListResponseLanguageGroupResponse'
---

## Example Usage

```typescript
import { ListResponseLanguageGroupResponse } from "syllable-sdk/models/components";

let value: ListResponseLanguageGroupResponse = {
  items: [
    {
      name: "Call Center 1 Languages",
      description: "Languages spoken by operators at Call Center 1",
      languageConfigs: [
        {
          languageCode: "zh-CN",
          voiceProvider: "Google",
          voiceDisplayName: "Clara",
          dtmfCode: 1,
        },
      ],
      skipCurrentLanguageInMessage: false,
      id: 1,
      editComments: "Added Spanish support.",
      agentsInfo: [
        {
          id: 1,
          name: "Test Agent",
        },
      ],
      updatedAt: new Date("2023-01-22T07:56:26.664Z"),
      lastUpdatedBy: "user@mail.com",
    },
  ],
  page: 399222,
  pageSize: 308528,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.LanguageGroupResponse](/sdk-docs/models/components/languagegroupresponse)[] | TRUE                                                                     | N/A                                                                                    |
| `page`                                                                                 | *number*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `totalPages`                                                                           | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |