# OnUnknown

Whether to dial requests whose enrichment is unresolved (no lookup data). Applied per rule: it decides what a rule contributes when *that rule's* attribute is unresolved, and never overrides a rule the request definitively failed -- so a request that fails one rule is still skipped even if a different rule's attribute is missing. For caller_type, "unresolved" covers both no CNAM data at all (non-US numbers) and Twilio's 'UNDETERMINED' (a US number it looked up but could not classify).

## Example Usage

```typescript
import { OnUnknown } from "syllable-sdk/models/components";

let value: OnUnknown = "include";
```

## Values

```typescript
"include" | "exclude"
```