---
title: 'InsightWorkflowOutput'
---

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
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | Human readable name of Insight Workflow                                                       |
| `description`                                                                                 | *string*                                                                                      | TRUE                                                                            | Text description of Insight Workflow                                                          |
| `insightToolIds`                                                                              | *number*[]                                                                                    | TRUE                                                                            | List of Insight Tool IDs                                                                      |
| `conditions`                                                                                  | [components.Conditions](/sdk-docs/models/components/conditions)                                | TRUE                                                                            | Conditions for Insight Workflow                                                               |
| `status`                                                                                      | *string*                                                                                      | TRUE                                                                            | Status of the Insight Workflow                                                                |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | Unique ID for Insight Workflow                                                                |
| `insightTools`                                                                                | [components.InsightToolOutput](/sdk-docs/models/components/insighttooloutput)[]                | TRUE                                                                            | List of Insight Tools                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | FALSE                                                                            | Timestamp of Insight Workflow creation                                                        |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | FALSE                                                                            | Timestamp of Insight Workflow update                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | User who last updated Insight Workflow                                                        |