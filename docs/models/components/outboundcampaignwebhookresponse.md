# OutboundCampaignWebhookResponse

## Example Usage

```typescript
import { OutboundCampaignWebhookResponse } from "syllable-sdk/models/components";

let value: OutboundCampaignWebhookResponse = {
  triggerStatuses: [
    "PRIOR_DROPPED",
  ],
  url: "https://example.com/hooks/syllable",
  requestMethod: "POST",
  id: 1,
  authValueKeys: [
    "hmac_secret",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `triggerStatuses`                                                                      | [components.ChannelManagerStatus](../../models/components/channelmanagerstatus.md)[]   | :heavy_check_mark:                                                                     | Condition expression evaluated when the trigger fires                                  | campaign_id == 1 && channel_manager_status == 'COMPLETED'                              |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | HTTPS URL to which to send the webhook payload                                         | https://example.com/hooks/syllable                                                     |
| `requestMethod`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | HTTP method for the outbound request (POST, PUT, or PATCH)                             | POST                                                                                   |
| `id`                                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | Unique ID for webhook                                                                  | 1                                                                                      |
| `authValueKeys`                                                                        | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Auth value keys (values omitted for security); only hmac_secret is currently supported | [<br/>"hmac_secret"<br/>]                                                              |