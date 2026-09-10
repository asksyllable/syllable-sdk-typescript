# DaoExperimentTargetSummary

The channel target an experiment splits, resolved for display.

Enough to name the target on the experiment card without a second read: the Console shows the
target itself and the channel it belongs to, and links to neither by ID.

## Example Usage

```typescript
import { DaoExperimentTargetSummary } from "syllable-sdk/models/components";

let value: DaoExperimentTargetSummary = {
  id: 1,
  target: "+19995551234",
  targetMode: "chat",
  channelId: 1,
  channelName: "Main line",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *number*                                                         | :heavy_check_mark:                                               | The internal ID of the channel target                            | 1                                                                |
| `target`                                                         | *string*                                                         | :heavy_check_mark:                                               | The target itself, such as a phone number                        | +19995551234                                                     |
| `targetMode`                                                     | [components.TargetModes](../../models/components/targetmodes.md) | :heavy_check_mark:                                               | Available modes (communication methods) for channel targets.     |                                                                  |
| `channelId`                                                      | *number*                                                         | :heavy_check_mark:                                               | The channel the target belongs to                                | 1                                                                |
| `channelName`                                                    | *string*                                                         | :heavy_check_mark:                                               | The name of that channel                                         | Main line                                                        |