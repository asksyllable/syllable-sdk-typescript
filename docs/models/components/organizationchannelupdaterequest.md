# OrganizationChannelUpdateRequest

Request model to update a channel through the organizations API

## Example Usage

```typescript
import { OrganizationChannelUpdateRequest } from "syllable-sdk/models/components";

let value: OrganizationChannelUpdateRequest = {
  name: "twilio",
  channelService: "twilio",
  supportedModes: "chat,voice",
  config: {
    accountSid: "AC123...",
    authToken: "sometoken",
    telephony: {
      preInputTimeout: 1.2,
      overallInputTimeout: 20,
    },
  },
  id: 1,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The channel name                                                                                                                                      | twilio                                                                                                                                                |
| `channelService`                                                                                                                                      | [components.ChannelServices](../../models/components/channelservices.md)                                                                              | :heavy_check_mark:                                                                                                                                    | The communication service for a channel.                                                                                                              |                                                                                                                                                       |
| `supportedModes`                                                                                                                                      | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The comma-delimited list of supported modes for the channel, which defines the       possible communication methods for channel targets linked to it. | chat,voice                                                                                                                                            |
| `isSystemChannel`                                                                                                                                     | *boolean*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                    | Whether the channel is a built-in system channel (i.e., is not customizable)                                                                          | false                                                                                                                                                 |
| `config`                                                                                                                                              | [components.OrganizationChannelConfig](../../models/components/organizationchannelconfig.md)                                                          | :heavy_check_mark:                                                                                                                                    | Channel config information for creates / updates through the organizations API                                                                        |                                                                                                                                                       |
| `id`                                                                                                                                                  | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The internal ID of the channel                                                                                                                        | 1                                                                                                                                                     |