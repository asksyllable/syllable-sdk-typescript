---
title: 'AgentVoice'
---

## Example Usage

```typescript
import { AgentVoice } from "syllable-sdk/models/components";

let value: AgentVoice = {
  provider: "ElevenLabs",
  displayName: "Humberto_Beier67",
  varName: "openai:nova",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [components.SttProvider](/sdk-docs/models/components/sttprovider)             | TRUE                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | TRUE                                                           | N/A                                                                          |
| `varName`                                                                    | [components.AgentVoiceVarName](/sdk-docs/models/components/agentvoicevarname) | TRUE                                                           | N/A                                                                          |