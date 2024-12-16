# AgentUpdate

## Example Usage

```typescript
import { AgentUpdate } from "syllable-sdk/models/components";

let value: AgentUpdate = {
  name: "<value>",
  timezone: "Asia/Muscat",
  type: "<value>",
  promptId: 616934,
  customMessageId: 943749,
  languages: [
    "<value>",
  ],
  id: 681820,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `label`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `timezone`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `promptId`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customMessageId`                                                              | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `languages`                                                                    | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `promptToolDefaults`                                                           | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `toolHeaders`                                                                  | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `variables`                                                                    | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | The Agent ID                                                                   |