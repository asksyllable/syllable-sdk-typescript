---
title: 'AgentVoice'
---

Voice option for an agent.

## Example Usage

```typescript
import { AgentVoice } from "syllable-sdk/models/components";

let value: AgentVoice = {
  provider: "OpenAI",
  displayName: "Alloy",
  varName: "elevenlabs:Eric",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [components.SttProvider](/sdk-docs/models/components/sttprovider)             | TRUE                                                           | Provider for an agent voice.                                                 |                                                                              |
| `displayName`                                                                | *string*                                                                     | TRUE                                                           | The display name of the voice                                                | Alloy                                                                        |
| `varName`                                                                    | [components.AgentVoiceVarName](/sdk-docs/models/components/agentvoicevarname) | TRUE                                                           | The variable name of an agent voice (used when procesing messages).          |                                                                              |