# Agent

## Example Usage

```typescript
import { Agent } from "syllable-sdk/models/components";

let value: Agent = {
  name: "<value>",
  timezone: "America/St_Thomas",
  type: "<value>",
  promptId: 891773,
  customMessageId: 963663,
  languages: [
    "<value>",
  ],
  id: 383441,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `promptId`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customMessageId`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `languages`                                                                                   | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `promptToolDefaults`                                                                          | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `toolHeaders`                                                                                 | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `variables`                                                                                   | [components.Variables](../../models/components/variables.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The Agent ID                                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `channelTargets`                                                                              | [components.Target](../../models/components/target.md)[]                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |