# AgentToolDefaults

## Example Usage

```typescript
import { AgentToolDefaults } from "syllable-sdk/models/components";

let value: AgentToolDefaults = {
  toolName: "<value>",
  defaultValues: [
    {
      fieldName: "<value>",
      defaultValue: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `toolName`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `defaultValues`                                                                        | [components.AgentToolFieldDefault](../../models/components/agenttoolfielddefault.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |