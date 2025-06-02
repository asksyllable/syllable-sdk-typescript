# ChannelsTwilioNumbersAddRequest

## Example Usage

```typescript
import { ChannelsTwilioNumbersAddRequest } from "syllable-sdk/models/operations";

let value: ChannelsTwilioNumbersAddRequest = {
  channelId: 207470,
  twilioNumberAddRequest: {
    friendlyName: "Support Line",
    areaCode: "804",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `channelId`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `twilioNumberAddRequest`                                                               | [components.TwilioNumberAddRequest](../../models/components/twilionumberaddrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |