# CampaignExcludedDates

## Example Usage

```typescript
import { CampaignExcludedDates } from "syllable-sdk/models/components";
import { RFCDate } from "syllable-sdk/types";

let value: CampaignExcludedDates = {
  timezone: "America/New_York",
  startDate: new RFCDate("2026-02-05"),
  endDate: new RFCDate("2025-12-12"),
  dates: [
    {
      date: new RFCDate("2025-04-09"),
      rule: "holiday",
      holidays: [
        {
          holiday: "christmas-day",
          label: "Christmas Day",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timezone`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Time zone used for today                                                             | America/New_York                                                                     |
| `startDate`                                                                          | [RFCDate](../../types/rfcdate.md)                                                    | :heavy_check_mark:                                                                   | First date of the range, inclusive                                                   |                                                                                      |
| `endDate`                                                                            | [RFCDate](../../types/rfcdate.md)                                                    | :heavy_check_mark:                                                                   | Last date of the range, inclusive                                                    |                                                                                      |
| `dates`                                                                              | [components.CampaignExcludedDate](../../models/components/campaignexcludeddate.md)[] | :heavy_minus_sign:                                                                   | Dates in the range on which a date or holiday rule stops all outreach, in order.     |                                                                                      |