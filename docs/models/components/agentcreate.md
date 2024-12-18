# AgentCreate

## Example Usage

```typescript
import { AgentCreate } from "syllable-sdk/models/components";

let value: AgentCreate = {
  name: "<value>",
  timezone: "Asia/Irkutsk",
  type: "<value>",
  promptId: 18789,
  customMessageId: 617636,
  languages: [
    "<value>",
  ],
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