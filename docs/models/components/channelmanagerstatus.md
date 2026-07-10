# ChannelManagerStatus

Status of an outbound communication request (voice, SMS, or email).

## Example Usage

```typescript
import { ChannelManagerStatus } from "syllable-sdk/models/components";

let value: ChannelManagerStatus = "COMPLETED";
```

## Values

```typescript
"PENDING" | "DUPLICATE" | "INVALID" | "UNEXPECTED_ERROR" | "FILTERED_LINE_TYPE" | "PROCESSED" | "DROPPED" | "DEFERRED" | "BOUNCED" | "DELIVERED" | "OPENED" | "CLICKED" | "SPAM_REPORT" | "UNSUBSCRIBED" | "PRIOR_UNSUBSCRIBED" | "PRIOR_SPAM_REPORT" | "PRIOR_DROPPED" | "PRIOR_BOUNCED" | "SENT" | "ACCEPTED" | "QUEUED" | "SENDING" | "UNDELIVERED" | "DELIVERY_UNKNOWN" | "DELIVERY_FAILED" | "IN-PROGRESS" | "BUSY" | "CANCELED" | "COMPLETED" | "DECLINED" | "NO-ANSWER" | "MACHINE" | "HUMAN" | "UNKNOWN" | "FAILED" | "SIP_NOT_FOUND" | "SIP_TEMPORARILY_UNAVAILABLE" | "SIP_LOOP_DETECTED" | "SIP_DOES_NOT_EXIST_ANYWHERE"
```