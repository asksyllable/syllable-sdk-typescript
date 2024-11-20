# Channel

## Example Usage

```typescript
import { Channel } from "syllable-sdk/models/components";

let value: Channel = {
  name: "<value>",
  channelService: "webchat",
  id: 461479,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The channel name                                                         |
| `channelService`                                                         | [components.ChannelServices](../../models/components/channelservices.md) | :heavy_check_mark:                                                       | The service for the channel                                              |
| `supportedModes`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | The comma-delimited list of supported modes for the channel              |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | The channel ID                                                           |