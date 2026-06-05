# AgentLanguage

Language option for an agent.

## Example Usage

```typescript
import { AgentLanguage } from "syllable-sdk/models/components";

let value: AgentLanguage = {
  name: "English",
  code: "sw-KE",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the language                                               | English                                                            |
| `code`                                                             | [components.LanguageCode](../../models/components/languagecode.md) | :heavy_check_mark:                                                 | BCP 47 codes of languages that Syllable supports.                  |                                                                    |