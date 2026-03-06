# Context

## Example Usage

```typescript
import { Context } from "syllable-sdk/models/components";

let value: Context = {
  task: [
    {
      type: "import",
      file: [
        "<value 1>",
      ],
    },
  ],
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `task`                      | *components.Task*           | :heavy_minus_sign:          | Task implementation details |