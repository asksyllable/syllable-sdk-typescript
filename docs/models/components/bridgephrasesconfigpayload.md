# BridgePhrasesConfigPayload

The `config` JSONB payload stored on a bridge_phrases row.

Holds the default phrases plus an inline list of per-tool overrides, each with
optional per-language (`localized`) overrides. Mirrors the shape documented in
docs/bridge-phrases-table-migration.md §5.2.

## Example Usage

```typescript
import { BridgePhrasesConfigPayload } from "syllable-sdk/models/components";

let value: BridgePhrasesConfigPayload = {
  phrases: {
    messages: [
      "One moment, please.",
      "Let me check on that for you.",
    ],
    localized: {
      "es-US": {
        messages: [
          "Un momento, por favor.",
        ],
      },
      "fr-FR": {
        messages: [
          "Un instant, je vous en prie.",
        ],
      },
    },
  },
  tools: [
    {
      toolName: "<value>",
      phrases: {
        messages: [
          "One moment, please.",
          "Let me check on that for you.",
        ],
        localized: {
          "es-US": {
            messages: [
              "Un momento, por favor.",
            ],
          },
          "fr-FR": {
            messages: [
              "Un instant, je vous en prie.",
            ],
          },
        },
      },
    },
  ],
  randomizeBridgePhrases: true,
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `phrases`                                                                                                                                                              | [components.LibDatabaseDaoOrganizationBridgePhrasesDaoBridgePhraseMessages](../../models/components/libdatabasedaoorganizationbridgephrasesdaobridgephrasemessages.md) | :heavy_minus_sign:                                                                                                                                                     | Bridge phrase messages for a single scope (default or one tool).                                                                                                       |                                                                                                                                                                        |
| `tools`                                                                                                                                                                | [components.ToolBridgePhraseConfig](../../models/components/toolbridgephraseconfig.md)[]                                                                               | :heavy_minus_sign:                                                                                                                                                     | Per-tool phrase overrides.                                                                                                                                             |                                                                                                                                                                        |
| `smartTurnTimeoutSeconds`                                                                                                                                              | *number*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | Seconds of caller silence before injecting the first bridge phrase. Defaults to 2.75s when omitted on write.                                                           |                                                                                                                                                                        |
| `randomizeBridgePhrases`                                                                                                                                               | *boolean*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                     | Whether to randomize the order of bridge phrases. When true, the order of the bridge phrases is randomized for each call.                                              | true                                                                                                                                                                   |