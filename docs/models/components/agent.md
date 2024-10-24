# Agent

## Example Usage

```typescript
import { Agent } from "syllable-sdk/models/components";

let value: Agent = {
  name: "<value>",
  timezone: "Pacific/Nauru",
  type: "<value>",
  promptId: 383441,
  customMessageId: 791725,
  languages: [
    "<value>",
  ],
  id: 528895,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `timezone`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `promptId`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customMessageId`                                                              | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `languages`                                                                    | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `promptToolDefaults`                                                           | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `toolHeaders`                                                                  | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `variables`                                                                    | [components.Variables](../../models/components/variables.md)                   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | The Agent ID                                                                   |