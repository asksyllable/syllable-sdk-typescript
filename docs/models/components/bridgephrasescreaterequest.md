# BridgePhrasesCreateRequest

Request model to create a bridge phrases config.

## Example Usage

```typescript
import { BridgePhrasesCreateRequest } from "syllable-sdk/models/components";

let value: BridgePhrasesCreateRequest = {
  name: "Default Bridge Phrases",
  description: "Standard hold phrases for inbound line.",
  config: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                     | The name of the bridge phrases config.                                                                                                                                                                                                                                 | Default Bridge Phrases                                                                                                                                                                                                                                                 |
| `description`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                     | Description of the bridge phrases config.                                                                                                                                                                                                                              | Standard hold phrases for inbound line.                                                                                                                                                                                                                                |
| `config`                                                                                                                                                                                                                                                               | [components.BridgePhrasesConfigPayload](../../models/components/bridgephrasesconfigpayload.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                     | The `config` JSONB payload stored on a bridge_phrases row.<br/><br/>Holds the default phrases plus an inline list of per-tool overrides, each with<br/>optional per-language (`localized`) overrides. Mirrors the shape documented in<br/>docs/bridge-phrases-table-migration.md §5.2. |                                                                                                                                                                                                                                                                        |
| `isDefault`                                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                     | Whether this config should be marked as the default for its suborg. At most one non-deleted config per suborg may be the default; the API returns a 400 if a second default is requested while another is already set.                                                 | false                                                                                                                                                                                                                                                                  |