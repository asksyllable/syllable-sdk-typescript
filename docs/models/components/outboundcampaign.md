# OutboundCampaign

## Example Usage

```typescript
import { OutboundCampaign } from "syllable-sdk/models/components";

let value: OutboundCampaign = {
  campaignName: "Outbound Campaign 1",
  description: "This is a test campaign",
  label: "demo",
  campaignVariables: {},
  dailyStartTime: "09:00:00",
  dailyEndTime: "17:00:00",
  timezone: "America/New_York",
  source: "account@email.com",
  callerId: "19995551234",
  retryInterval: "30m",
  activeDays: [
    "wed",
  ],
  id: 1,
  createdAt: "2025-04-09T00:00:00Z",
  updatedAt: "2025-04-09T00:00:00Z",
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `campaignName`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | Human readable name of campaign                                              | Outbound Campaign 1                                                          |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Description of campaign                                                      | This is a test campaign                                                      |
| `label`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | Label for campaign                                                           | test                                                                         |
| `campaignVariables`                                                          | [components.CampaignVariables](../../models/components/campaignvariables.md) | :heavy_check_mark:                                                           | Variables for campaign                                                       | {<br/>"key": "value",<br/>"key2": "value2"<br/>}                             |
| `dailyStartTime`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | Start time of campaign each day                                              | 09:00:00                                                                     |
| `dailyEndTime`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | End time of campaign each day                                                | 17:00:00                                                                     |
| `timezone`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Timezone of campaign                                                         | America/New_York                                                             |
| `source`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | Source phone number, email, or SMS number                                    | +19032900844                                                                 |
| `callerId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Caller ID for call                                                           | 19995551234                                                                  |
| `hourlyRate`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | Target number of outreach calls per hour                                     | 25                                                                           |
| `retryCount`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | Number of retries per target                                                 | 1                                                                            |
| `retryInterval`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | How long to wait before retrying                                             | 30m                                                                          |
| `activeDays`                                                                 | [components.DaysOfWeek](../../models/components/daysofweek.md)[]             | :heavy_check_mark:                                                           | Days of the week when campaign is active                                     | ["mon", "tue", "wed", "thu", "fri"]                                          |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | Unique ID for campaign                                                       | 1                                                                            |
| `createdAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Timestamp of campaign creation                                               | 2025-04-09T00:00:00Z                                                         |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Timestamp of campaign update                                                 | 2025-04-09T00:00:00Z                                                         |
| `lastUpdatedBy`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | Email of user who last updated campaign                                      | user@email.com                                                               |