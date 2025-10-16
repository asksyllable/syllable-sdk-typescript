# ListResponseVoiceGroupResponse

## Example Usage

```typescript
import { ListResponseVoiceGroupResponse } from "syllable-sdk/models/components";

let value: ListResponseVoiceGroupResponse = {
  items: [
    {
      name: "Call Center 1 Languages",
      description: "Languages spoken by operators at Call Center 1",
      languageConfigs: [
        {
          languageCode: "en-US",
          voiceProvider: "OpenAI",
          voiceDisplayName: "Alloy",
          dtmfCode: 1,
        },
        {
          languageCode: "es-US",
          voiceProvider: "Google",
          voiceDisplayName: "es-US-Neural2-B",
          dtmfCode: 2,
        },
      ],
      skipCurrentLanguageInMessage: true,
      id: 1,
      editComments: "Added Spanish support.",
      agentsInfo: [
        {
          id: 1,
          name: "Test Agent",
        },
      ],
      updatedAt: new Date("2024-01-01T00:00:00Z"),
      lastUpdatedBy: "user@mail.com",
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.VoiceGroupResponse](../../models/components/voicegroupresponse.md)[] | :heavy_check_mark:                                                               | List of items returned from the query                                            |                                                                                  |
| `page`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | The page number of the results (0-based)                                         | 0                                                                                |
| `pageSize`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | The number of items returned per page                                            | 25                                                                               |
| `totalPages`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of pages of results given the indicated page size               | 4                                                                                |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of items returned from the query                                | 100                                                                              |