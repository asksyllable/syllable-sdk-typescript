# OutboundCampaignEditRequest

## Example Usage

```typescript
import { OutboundCampaignEditRequest } from "syllable-sdk/models/operations";

let value: OutboundCampaignEditRequest = {
  campaignId: 58029,
  outboundCampaignInput: {
    campaignName: "Outbound Campaign 1",
    campaignVariables: {},
    dailyStartTime: "09:00:00",
    dailyEndTime: "17:00:00",
    timezone: "America/New_York",
    source: "+19032900844",
    callerId: "19995551234",
    retryInterval: "30m",
    pauseSeconds: 30,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `campaignId`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `outboundCampaignInput`                                                              | [components.OutboundCampaignInput](../../models/components/outboundcampaigninput.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |