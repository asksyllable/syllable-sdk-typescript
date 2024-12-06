# AgentVoice

## Example Usage

```typescript
import { AgentVoice } from "syllable-sdk/models/components";

let value: AgentVoice = {
  provider: "OpenAI",
  displayName: "Tyrel.Johns",
  varName: "elevenlabs:George",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [components.SttProvider](../../models/components/sttprovider.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `varName`                                                                    | [components.AgentVoiceVarName](../../models/components/agentvoicevarname.md) | :heavy_check_mark:                                                           | N/A                                                                          |