# LanguageGroupResponse

## Example Usage

```typescript
import { LanguageGroupResponse } from "syllable-sdk/models/components";

let value: LanguageGroupResponse = {
  name: "Call Center 1 Languages",
  description: "Languages spoken by operators at Call Center 1",
  languageConfigs: [
    {
      languageCode: "ko-KR",
      voiceProvider: "Google",
      voiceDisplayName: "Brian",
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
  lastUpdatedBy: "user@mail.com",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The name of the language group.                                                                                                   | Call Center 1 Languages                                                                                                           |
| `description`                                                                                                                     | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Description of the language group.                                                                                                | Languages spoken by operators at Call Center 1                                                                                    |
| `languageConfigs`                                                                                                                 | [components.LanguageConfig](../../models/components/languageconfig.md)[]                                                          | :heavy_check_mark:                                                                                                                | Voice and DTMF configurations for each language in the group.                                                                     |                                                                                                                                   |
| `skipCurrentLanguageInMessage`                                                                                                    | *boolean*                                                                                                                         | :heavy_check_mark:                                                                                                                | Whether a message using the language group to generate a language DTMF menu should skip the agent's current language in the menu. |                                                                                                                                   |
| `id`                                                                                                                              | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | The ID of the language group to update.                                                                                           | 1                                                                                                                                 |
| `editComments`                                                                                                                    | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Comments for the most recent edit to the language group.                                                                          | Added Spanish support.                                                                                                            |
| `agentsInfo`                                                                                                                      | [components.LanguageGroupAgentInfo](../../models/components/languagegroupagentinfo.md)[]                                          | :heavy_minus_sign:                                                                                                                | IDs and names of the agents linked to the language group                                                                          |                                                                                                                                   |
| `lastUpdatedBy`                                                                                                                   | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Email of the user who last updated the language group.                                                                            | user@mail.com                                                                                                                     |