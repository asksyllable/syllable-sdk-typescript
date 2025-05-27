# SummaryEntry

A summary entry is an aggregation of latency entries by category and sub-category.
It contains the total and average latency for each category.

## Example Usage

```typescript
import { SummaryEntry } from "syllable-sdk/models/components";

let value: SummaryEntry = {
  category: "tool",
  eventCount: 866383,
  sumMs: 9755.22,
  sumStr: "<value>",
  averageMs: 8558.04,
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