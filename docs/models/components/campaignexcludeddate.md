# CampaignExcludedDate

## Example Usage

```typescript
import { CampaignExcludedDate } from "syllable-sdk/models/components";
import { RFCDate } from "syllable-sdk/types";

let value: CampaignExcludedDate = {
  date: new RFCDate("2025-02-16"),
  rule: "holiday",
  holidays: [
    {
      holiday: "christmas-day",
      label: "Christmas Day",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `date`                                                                                             | [RFCDate](../../types/rfcdate.md)                                                                  | :heavy_check_mark:                                                                                 | Excluded date, in the time zone of the campaign agent                                              |                                                                                                    |
| `rule`                                                                                             | [components.Rule](../../models/components/rule.md)                                                 | :heavy_check_mark:                                                                                 | The kind of rule that excludes this date.                                                          | holiday                                                                                            |
| `holidays`                                                                                         | [components.CampaignExcludedDateHoliday](../../models/components/campaignexcludeddateholiday.md)[] | :heavy_minus_sign:                                                                                 | The holiday rules of the campaign that fall on this date. Empty when only a date rule applies.     |                                                                                                    |