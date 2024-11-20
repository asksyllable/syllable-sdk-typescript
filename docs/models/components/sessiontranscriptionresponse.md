# SessionTranscriptionResponse

## Example Usage

```typescript
import { SessionTranscriptionResponse } from "syllable-sdk/models/components";

let value: SessionTranscriptionResponse = {
  sessionId: "<id>",
  transcription: [
    {
      timestamp: new Date("2023-10-07T19:05:36.078Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2024-06-29T19:53:54.840Z"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sessionId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `transcription`                                                        | [components.SessionText](../../models/components/sessiontext.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |
| `actions`                                                              | [components.SessionAction](../../models/components/sessionaction.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |