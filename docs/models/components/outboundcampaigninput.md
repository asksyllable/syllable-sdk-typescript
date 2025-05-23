# OutboundCampaignInput

## Example Usage

```typescript
import { OutboundCampaignInput } from "syllable-sdk/models/components";

let value: OutboundCampaignInput = {
  campaignName: "Outbound Campaign 1",
  description: "This is a test campaign",
  label: "demo",
  campaignVariables: {
    "key": "value",
    "key2": "value2",
  },
  dailyStartTime: "09:00:00",
  dailyEndTime: "17:00:00",
  source: "+19032900844",
  callerId: "19995551234",
  retryInterval: "12h",
  activeDays: [
    "fri",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `campaignName`                                                   | *string*                                                         | :heavy_check_mark:                                               | Human readable name of campaign                                  | Outbound Campaign 1                                              |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | Description of campaign                                          | This is a test campaign                                          |
| `label`                                                          | *string*                                                         | :heavy_minus_sign:                                               | Label for campaign                                               | test                                                             |
| `campaignVariables`                                              | Record<string, *string*>                                         | :heavy_check_mark:                                               | Variables for campaign                                           | {<br/>"key": "value",<br/>"key2": "value2"<br/>}                 |
| `dailyStartTime`                                                 | *string*                                                         | :heavy_minus_sign:                                               | Start time of campaign each day                                  | 09:00:00                                                         |
| `dailyEndTime`                                                   | *string*                                                         | :heavy_minus_sign:                                               | End time of campaign each day                                    | 17:00:00                                                         |
| `source`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Source phone number, email, or SMS number                        | +19032900844                                                     |
| `callerId`                                                       | *string*                                                         | :heavy_check_mark:                                               | Caller ID for call                                               | 19995551234                                                      |
| `hourlyRate`                                                     | *number*                                                         | :heavy_minus_sign:                                               | Target number of outreach calls per hour                         | 25                                                               |
| `retryCount`                                                     | *number*                                                         | :heavy_minus_sign:                                               | Number of retries per target                                     | 1                                                                |
| `retryInterval`                                                  | *string*                                                         | :heavy_minus_sign:                                               | How long to wait before retrying                                 | 30m                                                              |
| `activeDays`                                                     | [components.DaysOfWeek](../../models/components/daysofweek.md)[] | :heavy_check_mark:                                               | Days of the week when campaign is active                         | ["mon", "tue", "wed", "thu", "fri"]                              |