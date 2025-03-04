# LanguageConfig

Voice and DTMF configurations for a language in a language group. List of available voices
and their supported languages can be fetched from `GET /agents/voices/available/`.

## Example Usage

```typescript
import { LanguageConfig } from "syllable-sdk/models/components";

let value: LanguageConfig = {
  languageCode: "ko-KR",
  voiceProvider: "Google",
  voiceDisplayName: "Brian",
  dtmfCode: 1,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `languageCode`                                                                               | [components.LanguageCode](../../models/components/languagecode.md)                           | :heavy_check_mark:                                                                           | BCP 47 codes of languages that Syllable supports.                                            |                                                                                              |
| `voiceProvider`                                                                              | [components.TtsProvider](../../models/components/ttsprovider.md)                             | :heavy_check_mark:                                                                           | TTS provider for an agent voice.                                                             |                                                                                              |
| `voiceDisplayName`                                                                           | [components.AgentVoiceDisplayName](../../models/components/agentvoicedisplayname.md)         | :heavy_check_mark:                                                                           | Display names of voices that Syllable supports.                                              |                                                                                              |
| `dtmfCode`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | DTMF code that should be used for the language in the menu generated from the language group | 1                                                                                            |