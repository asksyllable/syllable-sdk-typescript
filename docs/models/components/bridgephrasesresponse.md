# BridgePhrasesResponse

Response model for bridge phrases operations.

A bridge phrases config is a named, sub-org-scoped collection of default bridge
phrases plus optional per-tool and per-language overrides that can be linked to an
agent. For more information, see
[Console docs](https://docs.syllable.ai/Resources/BridgePhrases).

## Example Usage

```typescript
import { BridgePhrasesResponse } from "syllable-sdk/models/components";

let value: BridgePhrasesResponse = {
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
  id: 1,
  editComments: "Added Spanish overrides for the transfer tool.",
  agentsInfo: [
    {
      id: 1,
      name: "Test Agent",
    },
  ],
  updatedAt: new Date("2026-07-02T00:00:00Z"),
  lastUpdatedBy: "user@mail.com",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                     | The name of the bridge phrases config.                                                                                                                                                                                                                                 | Default Bridge Phrases                                                                                                                                                                                                                                                 |
| `description`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                     | Description of the bridge phrases config.                                                                                                                                                                                                                              | Standard hold phrases for inbound line.                                                                                                                                                                                                                                |
| `config`                                                                                                                                                                                                                                                               | [components.BridgePhrasesConfigPayload](../../models/components/bridgephrasesconfigpayload.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                     | The `config` JSONB payload stored on a bridge_phrases row.<br/><br/>Holds the default phrases plus an inline list of per-tool overrides, each with<br/>optional per-language (`localized`) overrides. Mirrors the shape documented in<br/>docs/bridge-phrases-table-migration.md §5.2. |                                                                                                                                                                                                                                                                        |
| `isDefault`                                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                     | Whether this config is currently marked as the default for its suborg.                                                                                                                                                                                                 | false                                                                                                                                                                                                                                                                  |
| `id`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                     | The ID of the bridge phrases config to update.                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                      |
| `editComments`                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                     | Comments for the most recent edit.                                                                                                                                                                                                                                     | Added Spanish overrides for the transfer tool.                                                                                                                                                                                                                         |
| `agentsInfo`                                                                                                                                                                                                                                                           | [components.BridgePhrasesAgentInfo](../../models/components/bridgephrasesagentinfo.md)[]                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                     | IDs and names of the agents linked to this bridge phrases config.                                                                                                                                                                                                      | [<br/>{<br/>"id": 1,<br/>"name": "Test Agent"<br/>}<br/>]                                                                                                                                                                                                              |
| `updatedAt`                                                                                                                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                     | Timestamp of the last update.                                                                                                                                                                                                                                          | 2026-07-02T00:00:00Z                                                                                                                                                                                                                                                   |
| `lastUpdatedBy`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                     | Email of the user who last updated this config.                                                                                                                                                                                                                        | user@mail.com                                                                                                                                                                                                                                                          |