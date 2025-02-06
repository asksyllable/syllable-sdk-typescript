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
      timestamp: new Date("2025-12-09T13:28:34.858Z"),
      lang: "en-US",
      source: "user",
    },
  ],
  actions: [
    {
      timestamp: new Date("2025-01-15T15:53:28.719Z"),
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