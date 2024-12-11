# AgentVoice

## Example Usage

```typescript
import { AgentVoice } from "syllable-sdk/models/components";

let value: AgentVoice = {
  provider: "ElevenLabs",
  displayName: "Lexie43",
  varName: "openai:echo",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [components.SttProvider](../../models/components/sttprovider.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `varName`                                                                    | [components.AgentVoiceVarName](../../models/components/agentvoicevarname.md) | :heavy_check_mark:                                                           | N/A                                                                          |