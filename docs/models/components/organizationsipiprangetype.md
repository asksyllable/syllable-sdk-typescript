# OrganizationSipIpRangeType

The type of SIP IP range. Signaling IP ranges are used for SIP signaling traffic (e.g. SIP INVITE,
SIP REFER, SIP OPTIONS, etc.), while media IP ranges are used for SIP media traffic
(audio and video).

## Example Usage

```typescript
import { OrganizationSipIpRangeType } from "syllable-sdk/models/components";

let value: OrganizationSipIpRangeType = "media";
```

## Values

```typescript
"signaling" | "media"
```