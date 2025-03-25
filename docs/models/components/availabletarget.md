# AvailableTarget

An available organization-level channel target (i.e., one for which a channel target has not
been created in the current suborg).

## Example Usage

```typescript
import { AvailableTarget } from "syllable-sdk/models/components";

let value: AvailableTarget = {
  organizationId: 1,
  channelId: 1,
  channelName: "Twilio",
  target: "+19995551234",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `organizationId`                                                | *number*                                                        | :heavy_check_mark:                                              | Internal ID of the org with which the target is associated.     | 1                                                               |
| `channelId`                                                     | *number*                                                        | :heavy_check_mark:                                              | Internal ID of the channel with which the target is associated. | 1                                                               |
| `channelName`                                                   | *string*                                                        | :heavy_check_mark:                                              | Name of the channel with which the target is associated.        | Twilio                                                          |
| `target`                                                        | *string*                                                        | :heavy_check_mark:                                              | Org-level target.                                               | +19995551234                                                    |