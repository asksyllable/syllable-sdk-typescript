# SessionTranscriptionResponse

## Example Usage

```typescript
import { SessionTranscriptionResponse } from "syllable-sdk/models/components";

let value: SessionTranscriptionResponse = {
  sessionId: "<id>",
  transcription: [
    {
      timestamp: new Date("2022-08-16T09:17:34.312Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2023-04-11T10:55:35.652Z"),
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