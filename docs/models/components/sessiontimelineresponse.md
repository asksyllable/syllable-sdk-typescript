# SessionTimelineResponse

Consolidated, time-ordered timeline of a session's events.

## Example Usage

```typescript
import { SessionTimelineResponse } from "syllable-sdk/models/components";

let value: SessionTimelineResponse = {
  sessionId: "<id>",
  events: [
    {
      kind: "tool",
      timestamp: new Date("2025-10-19T22:29:39.444Z"),
      offset: "00:04",
      category: "tool",
      label: "holiday_check",
      metadata: [
        "Gpt-4.1",
        "OpenAI",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Internal ID of the session                                                                    |
| `sessionStart`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the first event; the zero point for all offsets                                  |
| `events`                                                                                      | [components.TimelineEvent](../../models/components/timelineevent.md)[]                        | :heavy_check_mark:                                                                            | All events, ordered by timestamp ascending                                                    |