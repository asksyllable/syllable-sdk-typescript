# AgentToolDefaults

Agent-level static parameter values for a tool, overriding any tool-level defaults.

## Example Usage

```typescript
import { AgentToolDefaults } from "syllable-sdk/models/components";

let value: AgentToolDefaults = {
  toolName: "get_weather",
  defaultValues: [
    {
      fieldName: "temperature_unit",
      defaultValue: "fahrenheit",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `toolName`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The name of the tool                                                                   | get_weather                                                                            |
| `defaultValues`                                                                        | [components.AgentToolFieldDefault](../../models/components/agenttoolfielddefault.md)[] | :heavy_check_mark:                                                                     | The default values for fields used in the tool                                         | [<br/>{<br/>"default_value": "fahrenheit",<br/>"field_name": "temperature_unit"<br/>}<br/>] |