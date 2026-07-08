# LibDatabaseDaoOrganizationBridgePhrasesDaoBridgePhraseMessages

Bridge phrase messages for a single scope (default or one tool).

## Example Usage

```typescript
import { LibDatabaseDaoOrganizationBridgePhrasesDaoBridgePhraseMessages } from "syllable-sdk/models/components";

let value: LibDatabaseDaoOrganizationBridgePhrasesDaoBridgePhraseMessages = {
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                             | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | Ordered bridge phrases for this scope.                                                                                 | [<br/>"One moment, please.",<br/>"Let me check on that for you."<br/>]                                                 |
| `localized`                                                                                                            | Record<string, [components.LocalizedBridgePhrases](../../models/components/localizedbridgephrases.md)>                 | :heavy_minus_sign:                                                                                                     | Per-language overrides keyed by BCP-47 tag (e.g. "es-US").                                                             | {<br/>"es-US": {<br/>"messages": [<br/>"Un momento, por favor."<br/>]<br/>},<br/>"fr-FR": {<br/>"messages": [<br/>"Un instant, je vous en prie."<br/>]<br/>}<br/>} |