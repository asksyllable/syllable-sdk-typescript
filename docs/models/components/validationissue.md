# ValidationIssue

A single validation finding with severity, location, and description.

## Example Usage

```typescript
import { ValidationIssue } from "syllable-sdk/models/components";

let value: ValidationIssue = {
  id: "<id>",
  message: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | Stable machine-readable identifier (kebab-case)            |
| `severity`                                                 | [components.Severity](../../models/components/severity.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `message`                                                  | *string*                                                   | :heavy_check_mark:                                         | Human-readable description                                 |
| `path`                                                     | *string*                                                   | :heavy_minus_sign:                                         | JSONPath-style location (e.g. $.context.task.steps[2])     |
| `value`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The offending value, when it adds clarity                  |