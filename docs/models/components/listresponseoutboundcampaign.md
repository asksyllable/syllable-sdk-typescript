# ListResponseOutboundCampaign

## Example Usage

```typescript
import { ListResponseOutboundCampaign } from "syllable-sdk/models/components";

let value: ListResponseOutboundCampaign = {
  items: [
    {
      campaignName: "Outbound Campaign 1",
      description: "This is a test campaign",
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
      retryInterval: "7d",
      activeDays: [
        "fri",
      ],
      id: 1,
      agentId: agent_id,
      createdAt: new Date("2025-07-29T00:00:00Z"),
      updatedAt: new Date("2025-07-29T00:00:00Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.OutboundCampaign](../../models/components/outboundcampaign.md)[] | :heavy_check_mark:                                                           | List of items returned from the query                                        |                                                                              |
| `page`                                                                       | *number*                                                                     | :heavy_check_mark:                                                           | The page number of the results (0-based)                                     | 0                                                                            |
| `pageSize`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | The number of items returned per page                                        | 25                                                                           |
| `totalPages`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | The total number of pages of results given the indicated page size           | 4                                                                            |
| `totalCount`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | The total number of items returned from the query                            | 100                                                                          |