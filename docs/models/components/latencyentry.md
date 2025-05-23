# LatencyEntry

Data model for latency entries.

## Example Usage

```typescript
import { LatencyEntry } from "syllable-sdk/models/components";

let value: LatencyEntry = {
  timestamp: new Date("2024-05-12T01:59:12.211Z"),
  measurementStart: new Date("2025-03-02T08:57:01.759Z"),
  category: "http",
  label: "<value>",
  unitType: "nanoseconds",
  value: 8558.04,
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