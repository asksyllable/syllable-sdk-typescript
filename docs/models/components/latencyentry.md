# LatencyEntry

Data model for latency entries.

## Example Usage

```typescript
import { LatencyEntry } from "syllable-sdk/models/components";

let value: LatencyEntry = {
  timestamp: new Date("2025-03-11T01:40:18.315Z"),
  measurementStart: new Date("2023-07-08T02:32:49.310Z"),
  category: "llm",
  label: "<value>",
  unitType: "minutes",
  value: 1999.96,
  valueStr: "<value>",
  timeDelta: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `measurementStart`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `category`                                                                                    | [components.LatencyCategory](../../models/components/latencycategory.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `unitType`                                                                                    | [components.LatencyUnitType](../../models/components/latencyunittype.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `valueStr`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeDelta`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |