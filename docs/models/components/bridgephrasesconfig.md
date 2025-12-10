# BridgePhrasesConfig

Configuration for conversational bridge phrases.

## Example Usage

```typescript
import { BridgePhrasesConfig } from "syllable-sdk/models/components";

let value: BridgePhrasesConfig = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `firstSlowMessages`                                      | *string*[]                                               | :heavy_minus_sign:                                       | Messages to say when the agent is first delayed.         |
| `verySlowMessages`                                       | *string*[]                                               | :heavy_minus_sign:                                       | Messages to say when the agent is significantly delayed. |
| `toolResponses`                                          | *string*[]                                               | :heavy_minus_sign:                                       | Messages to say when a tool call is in progress.         |