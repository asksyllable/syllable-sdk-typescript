# OutboundCampaignUpdateRequest

## Example Usage

```typescript
import { OutboundCampaignUpdateRequest } from "syllable-sdk/models/operations";

let value: OutboundCampaignUpdateRequest = {
  campaignId: 517379,
  outboundCampaignInput: {
    campaignName: "Outbound Campaign 1",
    description: "This is a test campaign",
    label: "test",
    campaignVariables: {
      "key": "value",
      "key2": "value2",
    },
    dailyStartTime: "09:00:00",
    dailyEndTime: "17:00:00",
    source: "account@email.com",
    callerId: "19995551234",
    retryInterval: "12h",
    activeDays: [
      "thu",
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `campaignId`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `outboundCampaignInput`                                                              | [components.OutboundCampaignInput](../../models/components/outboundcampaigninput.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |