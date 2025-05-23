# SummaryEntry

A summary entry is an aggregation of latency entries by category and sub-category.
It contains the total and average latency for each category.

## Example Usage

```typescript
import { SummaryEntry } from "syllable-sdk/models/components";

let value: SummaryEntry = {
  category: "tts",
  eventCount: 848009,
  sumMs: 8073.19,
  sumStr: "<value>",
  averageMs: 5691.01,
  averageStr: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `category`                                                               | [components.LatencyCategory](../../models/components/latencycategory.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `subCategory`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `eventCount`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sumMs`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sumStr`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `averageMs`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `averageStr`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |