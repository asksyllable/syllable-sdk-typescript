# SessionTranscriptionResponse

Text transcript of a given session. For more information, see
[Console docs](https://docs.syllable.ai/workspaces/Sessions).

## Example Usage

```typescript
import { SessionTranscriptionResponse } from "syllable-sdk/models/components";

let value: SessionTranscriptionResponse = {
  sessionId: "<id>",
  transcription: [
    {
      timestamp: new Date("2024-05-12T01:59:12.211Z"),
      lang: "unset",
      source: "agent",
    },
  ],
  actions: [
    {
      timestamp: new Date("2025-12-05T04:07:03.604Z"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sessionId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Internal ID of the session                                             |
| `transcription`                                                        | [components.SessionText](../../models/components/sessiontext.md)[]     | :heavy_check_mark:                                                     | Transcriptions of all messages in the session                          |
| `actions`                                                              | [components.SessionAction](../../models/components/sessionaction.md)[] | :heavy_check_mark:                                                     | Tool invocations that occurred during the session                      |