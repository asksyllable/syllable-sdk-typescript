# StepsTaskStart

Controls when the workflow activation lifecycle runs. `auto` activates at session start; `manual` activates on first invocation.

## Example Usage

```typescript
import { StepsTaskStart } from "syllable-sdk/models/components";

let value: StepsTaskStart = "auto";
```

## Values

```typescript
"auto" | "manual"
```