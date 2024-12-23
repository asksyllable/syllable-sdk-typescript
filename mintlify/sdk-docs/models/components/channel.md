---
title: 'Channel'
---

## Example Usage

```typescript
import { Channel } from "syllable-sdk/models/components";

let value: Channel = {
  name: "<value>",
  channelService: "email",
  id: 438601,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | TRUE                                                       | The channel name                                                         |
| `channelService`                                                         | [components.ChannelServices](sdk-docs/models/components/channelservices) | TRUE                                                       | N/A                                                                      |
| `supportedModes`                                                         | *string*                                                                 | FALSE                                                       | The comma-delimited list of supported modes for the channel              |
| `id`                                                                     | *number*                                                                 | TRUE                                                       | The channel ID                                                           |