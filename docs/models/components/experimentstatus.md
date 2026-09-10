# ExperimentStatus

Status of an experiment.

The column is a varchar and not a database enum, so a new value here does not need a migration.

## Example Usage

```typescript
import { ExperimentStatus } from "syllable-sdk/models/components";

let value: ExperimentStatus = "running";
```

## Values

```typescript
"draft" | "running" | "stopped"
```