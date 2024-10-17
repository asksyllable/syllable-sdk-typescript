# Agent

## Example Usage

```typescript
import { Agent } from "syllable-sdk/models/components";

let value: Agent = {
  name: "<value>",
  timezone: "Asia/Dhaka",
  typeExtra: {},
  id: 423655,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `timezone`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `typeExtra`                                                  | [components.TypeExtra](../../models/components/typeextra.md) | :heavy_check_mark:                                           | N/A                                                          |
| `variables`                                                  | [components.Variables](../../models/components/variables.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *number*                                                     | :heavy_check_mark:                                           | The Agent ID                                                 |