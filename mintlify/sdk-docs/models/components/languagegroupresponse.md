---
title: 'LanguageGroupResponse'
---

## Example Usage

```typescript
import { LanguageGroupResponse } from "syllable-sdk/models/components";

let value: LanguageGroupResponse = {
  name: "Call Center 1 Languages",
  description: "Languages spoken by operators at Call Center 1",
  languageConfigs: [
    {
      languageCode: "en-US",
      voiceProvider: "ElevenLabs",
      voiceDisplayName: "Ash",
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
| `name`                                                                                                                            | *string*                                                                                                                          | TRUE                                                                                                                | The name of the language group.                                                                                                   | Call Center 1 Languages                                                                                                           |
| `description`                                                                                                                     | *string*                                                                                                                          | FALSE                                                                                                                | Description of the language group.                                                                                                | Languages spoken by operators at Call Center 1                                                                                    |
| `languageConfigs`                                                                                                                 | [components.LanguageConfig](/sdk-docs/models/components/languageconfig)[]                                                          | TRUE                                                                                                                | Voice and DTMF configurations for each language in the group.                                                                     |                                                                                                                                   |
| `skipCurrentLanguageInMessage`                                                                                                    | *boolean*                                                                                                                         | TRUE                                                                                                                | Whether a message using the language group to generate a language DTMF menu should skip the agent's current language in the menu. |                                                                                                                                   |
| `id`                                                                                                                              | *number*                                                                                                                          | TRUE                                                                                                                | The ID of the language group to update.                                                                                           | 1                                                                                                                                 |
| `editComments`                                                                                                                    | *string*                                                                                                                          | FALSE                                                                                                                | Comments for the most recent edit to the language group.                                                                          | Added Spanish support.                                                                                                            |
| `agentsInfo`                                                                                                                      | [components.LanguageGroupAgentInfo](/sdk-docs/models/components/languagegroupagentinfo)[]                                          | FALSE                                                                                                                | IDs and names of the agents linked to the language group                                                                          |                                                                                                                                   |
| `lastUpdatedBy`                                                                                                                   | *string*                                                                                                                          | TRUE                                                                                                                | Email of the user who last updated the language group.                                                                            | user@mail.com                                                                                                                     |