# InsightToolDefinition

## Example Usage

```typescript
import { InsightToolDefinition } from "syllable-sdk/models/components";

let value: InsightToolDefinition = {
  id: 96804,
  name: "<value>",
  type: "<value>",
  description: "private curiously censor heighten mortally",
  toolParameters: {},
  toolResultSet: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | Unique ID for Insight Tool Definition                                  |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Human readable name of Insight Tool Definition                         |
| `type`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Type of Insight Tool Definition                                        |
| `description`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Text description of Insight Tool Definition                            |
| `toolParameters`                                                       | [components.ToolParameters](../../models/components/toolparameters.md) | :heavy_check_mark:                                                     | Parameters for Insight Tool Definition                                 |
| `toolResultSet`                                                        | [components.ToolResultSet](../../models/components/toolresultset.md)   | :heavy_check_mark:                                                     | Result key/types for Insight Tool Definition                           |