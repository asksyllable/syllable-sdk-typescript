# CampaignExcludedDateHoliday

## Example Usage

```typescript
import { CampaignExcludedDateHoliday } from "syllable-sdk/models/components";

let value: CampaignExcludedDateHoliday = {
  holiday: "thanksgiving-day",
  label: "Christmas Day",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `holiday`                                                | [components.Holiday](../../models/components/holiday.md) | :heavy_check_mark:                                       | All available named holidays                             |                                                          |
| `label`                                                  | *string*                                                 | :heavy_check_mark:                                       | Human-readable holiday name                              | Christmas Day                                            |