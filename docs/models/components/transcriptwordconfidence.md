# TranscriptWordConfidence

Per-word STT confidence. `word` prefers the provider's punctuated form so the stored words
read the same way as the transcript they came from.

## Example Usage

```typescript
import { TranscriptWordConfidence } from "syllable-sdk/models/components";

let value: TranscriptWordConfidence = {
  word: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `word`             | *string*           | :heavy_check_mark: | N/A                |
| `confidence`       | *number*           | :heavy_minus_sign: | N/A                |
| `start`            | *number*           | :heavy_minus_sign: | N/A                |
| `end`              | *number*           | :heavy_minus_sign: | N/A                |