---
title: 'SessionTranscriptionResponse'
---

## Example Usage

```typescript
import { SessionTranscriptionResponse } from "syllable-sdk/models/components";

let value: SessionTranscriptionResponse = {
  sessionId: "<id>",
  transcription: [
    {
      timestamp: new Date("2023-01-26T22:49:04.962Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2022-01-18T21:30:17.764Z"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sessionId`                                                            | *string*                                                               | TRUE                                                     | N/A                                                                    |
| `transcription`                                                        | [components.SessionText](sdk-docs/models/components/sessiontext)[]     | TRUE                                                     | N/A                                                                    |
| `actions`                                                              | [components.SessionAction](sdk-docs/models/components/sessionaction)[] | TRUE                                                     | N/A                                                                    |