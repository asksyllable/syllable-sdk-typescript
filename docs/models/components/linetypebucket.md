# LineTypeBucket

Friendly line-type buckets a campaign can be restricted to dial.

These map to raw Twilio Lookup v2 line types via
``lib.twilio.line_type_lookup.LINE_TYPE_BUCKETS``.

## Example Usage

```typescript
import { LineTypeBucket } from "syllable-sdk/models/components";

let value: LineTypeBucket = "voip";
```

## Values

```typescript
"mobile" | "landline" | "voip"
```