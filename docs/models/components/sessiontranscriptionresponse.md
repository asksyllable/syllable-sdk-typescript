# SessionTranscriptionResponse

## Example Usage

```typescript
import { SessionTranscriptionResponse } from "syllable-sdk/models/components";

let value: SessionTranscriptionResponse = {
  sessionId: "<id>",
  transcription: [
    {
      timestamp: new Date("2023-06-30T03:22:56.921Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2023-12-02T20:41:06.257Z"),
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