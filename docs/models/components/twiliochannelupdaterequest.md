# TwilioChannelUpdateRequest

Request model for updating a Twilio channel.

## Example Usage

```typescript
import { TwilioChannelUpdateRequest } from "syllable-sdk/models/components";

let value: TwilioChannelUpdateRequest = {
  id: 1,
  name: "syllable-webchat",
  config: {
    accountSid: "AC123...",
    authToken: "sometoken",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *number*                                                                                     | :heavy_check_mark:                                                                           | The internal ID of the channel                                                               | 1                                                                                            |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name of the channel                                                                      | syllable-webchat                                                                             |
| `config`                                                                                     | [components.TwilioChannelConfigUpdate](../../models/components/twiliochannelconfigupdate.md) | :heavy_minus_sign:                                                                           | The configuration of the channel                                                             |                                                                                              |