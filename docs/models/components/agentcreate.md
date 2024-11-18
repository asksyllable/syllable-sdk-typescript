# AgentCreate

## Example Usage

```typescript
import { AgentCreate } from "syllable-sdk/models/components";

let value: AgentCreate = {
  name: "<value>",
  timezone: "Africa/Kinshasa",
  type: "<value>",
  promptId: 87129,
  customMessageId: 20218,
  languages: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `timezone`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `promptId`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `customMessageId`                                                                  | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `languages`                                                                        | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `promptToolDefaults`                                                               | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]     | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `toolHeaders`                                                                      | Record<string, *string*>                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `variables`                                                                        | [components.AgentCreateVariables](../../models/components/agentcreatevariables.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |