# ToolBridgePhraseConfig

Per-tool bridge phrase override entry.

## Example Usage

```typescript
import { ToolBridgePhraseConfig } from "syllable-sdk/models/components";

let value: ToolBridgePhraseConfig = {
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
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `toolName`                                                                                                                                                             | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Name of the tool these phrases override.                                                                                                                               |
| `phrases`                                                                                                                                                              | [components.LibDatabaseDaoOrganizationBridgePhrasesDaoBridgePhraseMessages](../../models/components/libdatabasedaoorganizationbridgephrasesdaobridgephrasemessages.md) | :heavy_check_mark:                                                                                                                                                     | Bridge phrase messages for a single scope (default or one tool).                                                                                                       |