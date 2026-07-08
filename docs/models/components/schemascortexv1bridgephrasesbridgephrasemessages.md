# SchemasCortexV1BridgePhrasesBridgePhraseMessages

Bridge phrase message lists for a single language.

## Example Usage

```typescript
import { SchemasCortexV1BridgePhrasesBridgePhraseMessages } from "syllable-sdk/models/components";

let value: SchemasCortexV1BridgePhrasesBridgePhraseMessages = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `messages`                                                                                                         | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Unified ordered bridge phrases. If empty, legacy fields are used.                                                  |
| `randomizeMessages`                                                                                                | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | When true, unified messages are played in randomized no-repeat cycles. Ignored when unified messages are disabled. |
| `firstSlowMessages`                                                                                                | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Messages to say when the agent is first delayed.                                                                   |
| `verySlowMessages`                                                                                                 | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Messages to say when the agent is significantly delayed.                                                           |
| `toolResponses`                                                                                                    | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Messages to say when a tool call is in progress.                                                                   |