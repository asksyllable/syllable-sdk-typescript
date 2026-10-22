# ChannelTargetsDeleteRequest

## Example Usage

```typescript
import { ChannelTargetsDeleteRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsDeleteRequest = {
  channelId: "<id>",
  targetId: 370102,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `channelId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `targetId`                                   | *number*                                     | :heavy_check_mark:                           | Target record ID, rather than a phone number |