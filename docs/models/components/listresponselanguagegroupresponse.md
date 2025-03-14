# ListResponseLanguageGroupResponse

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
          languageCode: "es-US",
          voiceProvider: "ElevenLabs",
          voiceDisplayName: "Alice",
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
      updatedAt: new Date("2025-04-24T01:27:00.644Z"),
      lastUpdatedBy: "user@mail.com",
    },
  ],
  page: 502106,
  pageSize: 786189,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.LanguageGroupResponse](../../models/components/languagegroupresponse.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `totalPages`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |