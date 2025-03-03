---
title: 'SessionAction'
---

Information about a given tool invocation as part of a session.

## Example Usage

```typescript
import { SessionAction } from "syllable-sdk/models/components";

let value: SessionAction = {
  timestamp: new Date("2025-11-04T19:30:24.907Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | Timestamp of the tool invocation                                                              |
| `toolName`                                                                                    | *string*                                                                                      | FALSE                                                                            | Name of the tool that was invoked                                                             |
| `toolRequest`                                                                                 | *string*                                                                                      | FALSE                                                                            | Request sent to the tool API, if applicable                                                   |
| `toolResult`                                                                                  | *string*                                                                                      | FALSE                                                                            | Response received from the tool API, if applicable                                            |