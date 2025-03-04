---
title: 'SessionTranscriptionResponse'
---

Text transcript of a given session.

## Example Usage

```typescript
import { SessionTranscriptionResponse } from "syllable-sdk/models/components";

let value: SessionTranscriptionResponse = {
  sessionId: "<id>",
  transcription: [
    {
      timestamp: new Date("2023-10-19T03:11:54.710Z"),
      lang: "en-US",
      source: "user",
    },
  ],
  actions: [
    {
      timestamp: new Date("2023-10-08T16:49:02.151Z"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sessionId`                                                            | *string*                                                               | TRUE                                                     | Internal ID of the session                                             |
| `transcription`                                                        | [components.SessionText](/sdk-docs/models/components/sessiontext)[]     | TRUE                                                     | Transcriptions of all messages in the session                          |
| `actions`                                                              | [components.SessionAction](/sdk-docs/models/components/sessionaction)[] | TRUE                                                     | Tool invocations that occurred during the session                      |