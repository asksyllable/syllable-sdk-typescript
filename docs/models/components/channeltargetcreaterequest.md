# ChannelTargetCreateRequest

## Example Usage

```typescript
import { ChannelTargetCreateRequest } from "syllable-sdk/models/components";

let value: ChannelTargetCreateRequest = {
  agentId: 929530,
  channelId: 669917,
  target: "<value>",
  targetMode: "email",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                      | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the agent associated with the channel target                                                                         |
| `channelId`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the channel associated with the channel target                                                                       |
| `target`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The name of the channel target (must correspond to an organization-level target)                                               |
| `targetMode`                                                                                                                   | [components.TargetModes](../../models/components/targetmodes.md)                                                               | :heavy_check_mark:                                                                                                             | Available modes (communication methods) for channel targets.                                                                   |
| `fallbackTarget`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The fallback for the channel target (currently only supported for "voice" mode)                                                |
| `isTest`                                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether the channel target is intended for testing. If true, any sessions created through this target will be labeled as test. |