---
title: 'Channel'
---

## Example Usage

```typescript
import { Channel } from "syllable-sdk/models/components";

let value: Channel = {
  name: "<value>",
  channelService: "sip",
  id: 161309,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | TRUE                                                       | The channel name                                                         |
| `channelService`                                                         | [components.ChannelServices](/sdk-docs/models/components/channelservices) | TRUE                                                       | The service for the channel                                              |
| `supportedModes`                                                         | *string*                                                                 | FALSE                                                       | The comma-delimited list of supported modes for the channel              |
| `id`                                                                     | *number*                                                                 | TRUE                                                       | The channel ID                                                           |