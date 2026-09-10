# TranscriptConfidence

The STT provider's confidence for one user utterance.

Provenance travels with the score because confidence is NOT comparable across providers:
Deepgram publishes a genuine acoustic confidence, while Google's proto disclaims the field and
Chirp 2's documentation states the value "isn't truly a confidence score". A bare float read
without knowing which backend produced it cannot be interpreted.

`utterance_source` distinguishes a number the provider reported for exactly this text from one
we computed -- the weakest word, or the weakest across a merged turn. Absent entirely when the
backend reports nothing, so the transcript flow is unaffected. See ZOO-8595.

## Example Usage

```typescript
import { TranscriptConfidence } from "syllable-sdk/models/components";

let value: TranscriptConfidence = {
  provider: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `provider`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `model`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `utterance`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `utteranceSource`                                                                            | [components.UtteranceSource](../../models/components/utterancesource.md)                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `words`                                                                                      | [components.TranscriptWordConfidence](../../models/components/transcriptwordconfidence.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `wordsTruncated`                                                                             | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |