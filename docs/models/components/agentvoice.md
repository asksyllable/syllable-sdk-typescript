# AgentVoice

Voice option for an agent.

## Example Usage

```typescript
import { AgentVoice } from "syllable-sdk/models/components";

let value: AgentVoice = {
  provider: "OpenAI",
  displayName: "Lily",
  varName: "wavenet:female/cmn-TW-Wavenet-A",
  gender: "female",
  supportedLanguages: [
    {
      name: "English",
      code: "zh-CN",
    },
  ],
  deprecated: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `provider`                                                                           | [components.TtsProvider](../../models/components/ttsprovider.md)                     | :heavy_check_mark:                                                                   | TTS provider for an agent voice.                                                     |
| `displayName`                                                                        | [components.AgentVoiceDisplayName](../../models/components/agentvoicedisplayname.md) | :heavy_check_mark:                                                                   | Display names of voices that Syllable supports.                                      |
| `varName`                                                                            | [components.AgentVoiceVarName](../../models/components/agentvoicevarname.md)         | :heavy_check_mark:                                                                   | The variable name of an agent voice (used when procesing messages).                  |
| `gender`                                                                             | [components.AgentVoiceGender](../../models/components/agentvoicegender.md)           | :heavy_check_mark:                                                                   | Gender for an agent voice.                                                           |
| `model`                                                                              | [components.AgentVoiceModel](../../models/components/agentvoicemodel.md)             | :heavy_minus_sign:                                                                   | Model for an agent voice.                                                            |
| `supportedLanguages`                                                                 | [components.AgentLanguage](../../models/components/agentlanguage.md)[]               | :heavy_check_mark:                                                                   | Languages supported by the voice                                                     |
| `deprecated`                                                                         | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether the voice is deprecated and should not be used                               |