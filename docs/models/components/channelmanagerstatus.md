# ChannelManagerStatus

Status of an outbound communication request (voice, SMS, or email).

## Example Usage

```typescript
import { ChannelManagerStatus } from "syllable-sdk/models/components";

let value: ChannelManagerStatus = "DELIVERY_FAILED";
```

## Values

```typescript
"PENDING" | "DUPLICATE" | "INVALID" | "FAILED" | "PROCESSED" | "DROPPED" | "DEFERRED" | "BOUNCED" | "DELIVERED" | "OPENED" | "CLICKED" | "SPAM_REPORT" | "UNSUBSCRIBED" | "PRIOR_UNSUBSCRIBED" | "PRIOR_SPAM_REPORT" | "PRIOR_DROPPED" | "PRIOR_BOUNCED" | "SENT" | "ACCEPTED" | "QUEUED" | "SENDING" | "UNDELIVERED" | "DELIVERY_UNKNOWN" | "DELIVERY_FAILED" | "IN-PROGRESS" | "BUSY" | "CANCELED" | "COMPLETED" | "NO-ANSWER" | "MACHINE" | "HUMAN" | "UNKNOWN"
```