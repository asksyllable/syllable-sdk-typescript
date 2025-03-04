# InsightToolOutput

## Example Usage

```typescript
import { InsightToolOutput } from "syllable-sdk/models/components";

let value: InsightToolOutput = {
  name: "<value>",
  description: "authentic onset flustered against captain",
  version: 577140,
  toolArguments: {},
  insightToolDefinitionId: 695270,
  id: 671957,
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human readable name of Insight Tool                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Text description of Insight Tool                                                              |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Version of Insight Tool                                                                       |
| `toolArguments`                                                                               | [components.ToolArguments](../../models/components/toolarguments.md)                          | :heavy_check_mark:                                                                            | Arguments for Insight Tool                                                                    |
| `insightToolDefinitionId`                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Unique ID for Insight Tool Definition                                                         |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | Unique ID for Insight Tool                                                                    |
| `insightToolDefinition`                                                                       | [components.InsightToolDefinition](../../models/components/insighttooldefinition.md)          | :heavy_minus_sign:                                                                            | Insight Tool Definition                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of Insight Tool creation                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of Insight Tool update                                                              |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | User who last updated Insight Tool                                                            |