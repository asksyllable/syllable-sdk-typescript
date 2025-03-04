# InsightWorkflowOutput

## Example Usage

```typescript
import { InsightWorkflowOutput } from "syllable-sdk/models/components";

let value: InsightWorkflowOutput = {
  name: "<value>",
  description:
    "furthermore jaggedly hence runny knavishly egg keenly grave incidentally righteously",
  insightToolIds: [
    879235,
  ],
  conditions: {},
  status: "<value>",
  id: 543678,
  insightTools: [
    {
      name: "<value>",
      description: "against captain supposing fidget faithfully",
      version: 410301,
      toolArguments: {},
      insightToolDefinitionId: 623295,
      id: 886961,
      lastUpdatedBy: "<value>",
    },
  ],
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human readable name of Insight Workflow                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Text description of Insight Workflow                                                          |
| `insightToolIds`                                                                              | *number*[]                                                                                    | :heavy_check_mark:                                                                            | List of Insight Tool IDs                                                                      |
| `conditions`                                                                                  | [components.Conditions](../../models/components/conditions.md)                                | :heavy_check_mark:                                                                            | Conditions for Insight Workflow                                                               |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Status of the Insight Workflow                                                                |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | Unique ID for Insight Workflow                                                                |
| `insightTools`                                                                                | [components.InsightToolOutput](../../models/components/insighttooloutput.md)[]                | :heavy_check_mark:                                                                            | List of Insight Tools                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of Insight Workflow creation                                                        |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of Insight Workflow update                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | User who last updated Insight Workflow                                                        |