# AgentVoice

Voice option for an agent.

## Example Usage

```typescript
import { AgentVoice } from "syllable-sdk/models/components";

let value: AgentVoice = {
  provider: "ElevenLabs",
  displayName: "Alloy",
  varName: "elevenlabs:Bill",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [components.SttProvider](../../models/components/sttprovider.md)             | :heavy_check_mark:                                                           | Provider for an agent voice.                                                 |                                                                              |
| `displayName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | The display name of the voice                                                | Alloy                                                                        |
| `varName`                                                                    | [components.AgentVoiceVarName](../../models/components/agentvoicevarname.md) | :heavy_check_mark:                                                           | The variable name of an agent voice (used when procesing messages).          |                                                                              |