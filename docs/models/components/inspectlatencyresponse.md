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
      timestamp: new Date("2024-09-15T17:37:32.983Z"),
      measurementStart: new Date("2024-03-22T06:32:58.021Z"),
      category: "tts",
      label: "<value>",
      unitType: "microseconds",
      value: 4535.43,
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