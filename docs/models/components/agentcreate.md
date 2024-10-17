# AgentCreate

## Example Usage

```typescript
import { AgentCreate } from "syllable-sdk/models/components";

let value: AgentCreate = {
  name: "<value>",
  timezone: "Indian/Cocos",
  typeExtra: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `timezone`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `typeExtra`                                                                        | [components.AgentCreateTypeExtra](../../models/components/agentcreatetypeextra.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `variables`                                                                        | [components.AgentCreateVariables](../../models/components/agentcreatevariables.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |