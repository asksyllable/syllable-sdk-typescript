# LocalizedBridgePhrases

Per-language bridge phrase overrides (no further nesting).

## Example Usage

```typescript
import { LocalizedBridgePhrases } from "syllable-sdk/models/components";

let value: LocalizedBridgePhrases = {
  messages: [
    "Un momento, por favor.",
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `messages`                        | *string*[]                        | :heavy_minus_sign:                | Bridge phrases for this language. | [<br/>"Un momento, por favor."<br/>] |