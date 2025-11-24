# ExpressionTaskEvents

Actions to perform when events occur (enter, submit).

## Example Usage

```typescript
import { ExpressionTaskEvents } from "syllable-sdk/models/components";

let value: ExpressionTaskEvents = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `start`                                                        | *components.Start*[]                                           | :heavy_minus_sign:                                             | Actions to execute on the first input from the user.           |
| `submit`                                                       | *components.Submit*[]                                          | :heavy_minus_sign:                                             | Actions to execute when the tool/step is submitted by the LLM. |