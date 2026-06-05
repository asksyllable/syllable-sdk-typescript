# BridgePhrasesConfig

Configuration for conversational bridge phrases.

Top-level fields are the default (English) phrases.
The `localized` dict provides per-language overrides keyed by BCP-47 language tag.

## Example Usage

```typescript
import { BridgePhrasesConfig } from "syllable-sdk/models/components";

let value: BridgePhrasesConfig = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `firstSlowMessages`                                                                                | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | Messages to say when the agent is first delayed.                                                   |
| `verySlowMessages`                                                                                 | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | Messages to say when the agent is significantly delayed.                                           |
| `toolResponses`                                                                                    | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | Messages to say when a tool call is in progress.                                                   |
| `localized`                                                                                        | Record<string, [components.BridgePhraseMessages](../../models/components/bridgephrasemessages.md)> | :heavy_minus_sign:                                                                                 | Per-language overrides keyed by BCP-47 tag (e.g. "es-US").                                         |