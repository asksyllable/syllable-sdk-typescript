# ChannelsTwilioNumbersUpdateRequest

## Example Usage

```typescript
import { ChannelsTwilioNumbersUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelsTwilioNumbersUpdateRequest = {
  channelId: 565421,
  twilioNumberUpdateRequest: {
    friendlyName: "Support Line",
    phoneSid: "PN123",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `channelId`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `twilioNumberUpdateRequest`                                                                  | [components.TwilioNumberUpdateRequest](../../models/components/twilionumberupdaterequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |