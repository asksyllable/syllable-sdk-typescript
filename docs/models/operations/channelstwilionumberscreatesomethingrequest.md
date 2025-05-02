# ChannelsTwilioNumbersCreateSomethingRequest

## Example Usage

```typescript
import { ChannelsTwilioNumbersCreateSomethingRequest } from "syllable-sdk/models/operations";

let value: ChannelsTwilioNumbersCreateSomethingRequest = {
  channelId: 207470,
  twilioNumberCreateRequest: {
    friendlyName: "Support Line",
    areaCode: "804",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `channelId`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `twilioNumberCreateRequest`                                                                  | [components.TwilioNumberCreateRequest](../../models/components/twilionumbercreaterequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |