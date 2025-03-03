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
      timestamp: new Date("2025-11-13T21:51:48.921Z"),
      lang: "en-US",
      source: "agent",
    },
  ],
  actions: [
    {
      timestamp: new Date("2023-11-04T19:43:41.328Z"),
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