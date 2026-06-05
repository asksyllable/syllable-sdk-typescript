# ChannelTargetOrderProperties

Subset of [[ChannelTargetProperties]] that is valid as ``order_by``. Filter-only fields are
excluded so the generated OpenAPI client does not surface them as sortable.

## Example Usage

```typescript
import { ChannelTargetOrderProperties } from "syllable-sdk/models/components";

let value: ChannelTargetOrderProperties = "target";
```

## Values

```typescript
"id" | "channel_id" | "channel_name" | "agent_id" | "target" | "target_mode" | "fallback_target" | "is_test" | "updated_at" | "a2p_verified"
```