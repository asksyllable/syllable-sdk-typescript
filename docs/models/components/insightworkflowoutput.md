# InsightWorkflowOutput

## Example Usage

```typescript
import { InsightWorkflowOutput } from "syllable-sdk/models/components";

let value: InsightWorkflowOutput = {
  name: "<value>",
  description:
    "boo almighty yowza deeply fatally forceful describe yesterday retool huzzah",
  insightToolIds: [
    449292,
  ],
  conditions: {},
  status: "<value>",
  id: 304468,
  insightTools: [
    {
      name: "<value>",
      description:
        "sizzling huzzah like nor sizzling cheerfully hungrily accessorise fly",
      version: 622231,
      toolArguments: {},
      insightToolDefinitionId: 279068,
      id: 209750,
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