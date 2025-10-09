# OutboundCampaignUpdateRequest

## Example Usage

```typescript
import { OutboundCampaignUpdateRequest } from "syllable-sdk/models/operations";

let value: OutboundCampaignUpdateRequest = {
  campaignId: 607945,
  outboundCampaignInput: {
    campaignName: "Outbound Campaign 1",
    description: "This is a test campaign",
    mode: "voice",
    smsSessionTtl: 720,
    labels: [
      "test",
      "demo",
    ],
    campaignVariables: {
      "key": "value",
      "key2": "value2",
    },
    dailyStartTime: "09:00:00",
    dailyEndTime: "17:00:00",
    source: "+19032900844",
    callerId: "19995551234",
    hourlyRate: 25,
    retryCount: 1,
    retryInterval: "30m",
    activeDays: [
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
    ],
    voicemailDetection: {
      "voicemail_detection_overall_timeout": 30,
      "voicemail_detection_post_speech_timeout": 1.2,
      "voicemail_detection_pre_speech_timeout": 5,
      "voicemail_detection_speech_threshold": 2.4,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `campaignId`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `outboundCampaignInput`                                                              | [components.OutboundCampaignInput](../../models/components/outboundcampaigninput.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |