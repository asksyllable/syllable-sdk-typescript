# ReasoningToolMode

Function covers automatic/required selection; forced function selects a named tool.

Parallel function is retained as shorthand for function with parallel calls enabled.

## Example Usage

```typescript
import { ReasoningToolMode } from "syllable-sdk/models/components";

let value: ReasoningToolMode = "parallel_function";
```

## Values

```typescript
"none" | "function" | "forced_function" | "parallel_function"
```