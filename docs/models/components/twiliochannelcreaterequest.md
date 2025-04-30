# TwilioChannelCreateRequest

Request model for creating a Twilio channel.

## Example Usage

```typescript
import { TwilioChannelCreateRequest } from "syllable-sdk/models/components";

let value: TwilioChannelCreateRequest = {
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
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The channel name                                                                             | syllable-webchat                                                                             |
| `config`                                                                                     | [components.TwilioChannelConfigCreate](../../models/components/twiliochannelconfigcreate.md) | :heavy_check_mark:                                                                           | Twilio channel config information.                                                           |                                                                                              |