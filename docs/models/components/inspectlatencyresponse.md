# InspectLatencyResponse

This is a report of the time spent in each operation during this session. It contains a timeline,
which lists the operations in the order they were executed, and a summary, which aggregates the
operations by category and sub-category.

## Example Usage

```typescript
import { InspectLatencyResponse } from "syllable-sdk/models/components";

let value: InspectLatencyResponse = {
  sessionId: "<id>",
  timeline: [
    {
      timestamp: new Date("2025-10-14T04:15:01.236Z"),
      measurementStart: new Date("2025-02-11T00:54:59.142Z"),
      category: "tts",
      label: "<value>",
      unitType: "minutes",
      value: 6214.79,
      valueStr: "<value>",
      timeDelta: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `sessionId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `timeline`                                                           | [components.LatencyEntry](../../models/components/latencyentry.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `summary`                                                            | [components.SummaryEntry](../../models/components/summaryentry.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |