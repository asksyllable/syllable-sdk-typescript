# ChannelTargetProperties

Names of channel target fields supported for filtering on the full channel targets list
endpoint. Superset of [[ChannelTargetOrderProperties]] — includes filter-only fields like
``target_mode_list`` that are not valid as ``order_by``.

## Example Usage

```typescript
import { ChannelTargetProperties } from "syllable-sdk/models/components";

let value: ChannelTargetProperties = "agent_id";
```

## Values

```typescript
"id" | "channel_id" | "channel_name" | "agent_id" | "target" | "target_mode" | "target_mode_list" | "fallback_target" | "is_test" | "updated_at" | "a2p_verified"
```