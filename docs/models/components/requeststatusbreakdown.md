# RequestStatusBreakdown

Per-request_status breakdown with total count and optional channel_manager_status counts.

## Example Usage

```typescript
import { RequestStatusBreakdown } from "syllable-sdk/models/components";

let value: RequestStatusBreakdown = {
  totalCount: 720521,
  counts: {
    "DELIVERED": 2,
    "PENDING": 3,
    "SENT": 5,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | Total number of requests with this request_status                            |                                                                              |
| `counts`                                                                     | Record<string, *number*>                                                     | :heavy_minus_sign:                                                           | Counts by channel_manager_status within this request_status; omitted if none | {<br/>"DELIVERED": 2,<br/>"PENDING": 3,<br/>"SENT": 5<br/>}                  |