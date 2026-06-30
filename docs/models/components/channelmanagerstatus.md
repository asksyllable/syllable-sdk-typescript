# ChannelManagerStatus

Status of an outbound communication request (voice, SMS, or email).

## Example Usage

```typescript
import { ChannelManagerStatus } from "syllable-sdk/models/components";

let value: ChannelManagerStatus = "IN-PROGRESS";
```

## Values

```typescript
"PENDING" | "DUPLICATE" | "INVALID" | "FAILED" | "FILTERED_LINE_TYPE" | "PROCESSED" | "DROPPED" | "DEFERRED" | "BOUNCED" | "DELIVERED" | "OPENED" | "CLICKED" | "SPAM_REPORT" | "UNSUBSCRIBED" | "PRIOR_UNSUBSCRIBED" | "PRIOR_SPAM_REPORT" | "PRIOR_DROPPED" | "PRIOR_BOUNCED" | "SENT" | "ACCEPTED" | "QUEUED" | "SENDING" | "UNDELIVERED" | "DELIVERY_UNKNOWN" | "DELIVERY_FAILED" | "IN-PROGRESS" | "BUSY" | "CANCELED" | "COMPLETED" | "DECLINED" | "NO-ANSWER" | "MACHINE" | "HUMAN" | "UNKNOWN"
```