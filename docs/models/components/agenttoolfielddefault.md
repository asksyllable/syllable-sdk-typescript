# AgentToolFieldDefault

Agent-level value for a static parameter on a tool, overriding the tool-level default if one
exists.

## Example Usage

```typescript
import { AgentToolFieldDefault } from "syllable-sdk/models/components";

let value: AgentToolFieldDefault = {
  fieldName: "temperature_unit",
  defaultValue: "fahrenheit",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `fieldName`                     | *string*                        | :heavy_check_mark:              | The name of the field           | temperature_unit                |
| `defaultValue`                  | *any*                           | :heavy_check_mark:              | The default value for the field | fahrenheit                      |