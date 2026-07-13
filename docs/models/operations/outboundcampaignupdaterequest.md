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
    callerId: "<id>",
    hourlyRate: 25,
    maxDailyCalls: 2500,
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
      voicemailDetectionOverallTimeout: 30,
      voicemailDetectionPreSpeechTimeout: 3.5,
      voicemailDetectionPostSpeechTimeout: 1.75,
    },
    allowedLineTypes: [
      "mobile",
      "voip",
    ],
    targetFilters: {
      match: "any",
      rules: [
        {
          field: "line_type",
          op: "in",
          values: [
            "landline",
            "fixedVoip",
            "nonFixedVoip",
          ],
        },
        {
          field: "carrier_name",
          op: "in",
          values: [
            "Onvoy, LLC - Sinch",
          ],
        },
      ],
    },
    webhooks: [
      {
        triggerStatuses: [
          "COMPLETED",
        ],
        url: "https://example.com/hooks/syllable",
        requestMethod: "POST",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `campaignId`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `outboundCampaignInput`                                                              | [components.OutboundCampaignInput](../../models/components/outboundcampaigninput.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |