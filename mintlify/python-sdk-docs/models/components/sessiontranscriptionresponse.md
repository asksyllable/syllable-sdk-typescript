---
title: 'SessionTranscriptionResponse'
---

Text transcript of a given session. For more information, see
[Console docs](https://docs.syllable.ai/workspaces/Sessions).


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `session_id`                                             | *str*                                                    | TRUE                                       | Internal ID of the session                               |
| `transcription`                                          | List[[models.SessionText](/python-sdk-docs/models/components/sessiontext)]     | TRUE                                       | Transcriptions of all messages in the session            |
| `actions`                                                | List[[models.SessionAction](/python-sdk-docs/models/components/sessionaction)] | TRUE                                       | Tool invocations that occurred during the session        |
