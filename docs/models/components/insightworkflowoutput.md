# InsightWorkflowOutput

Response model for an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowOutput } from "syllable-sdk/models/components";

let value: InsightWorkflowOutput = {
  name: "summary-workflow",
  description: "Default workflow - generates a summary of the call",
  insightToolIds: [
    1,
  ],
  conditions: {},
  status: "ACTIVE",
  id: 1,
  insightTools: [
    {
      name: "summary-tool",
      description: "Default tool - generates a summary of the call",
      version: 1,
      toolArguments: {},
      insightToolDefinitionId: 1,
      id: 1,
      insightToolDefinition: {
        id: 1,
        name: "llm_tool",
        type: "<value>",
        description: "An LLM tool evaluates a transcript with a given prompt",
        toolParameters: {},
        toolResultSet: {},
      },
      createdAt: new Date("2025-04-21T00:00:00Z"),
      updatedAt: new Date("2025-04-22T00:00:00Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  createdAt: new Date("2025-04-21T00:00:00Z"),
  updatedAt: new Date("2025-04-22T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of insight workflow                                                       | summary-workflow                                                                              |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Text description of insight workflow                                                          | Default workflow - generates a summary of the call                                            |
| `insightToolIds`                                                                              | *number*[]                                                                                    | :heavy_check_mark:                                                                            | List of IDs of insight tools used in the workflow                                             | [<br/>1<br/>]                                                                                 |
| `conditions`                                                                                  | [components.Conditions](../../models/components/conditions.md)                                | :heavy_check_mark:                                                                            | Conditions for insight workflow to trigger on a given call recording.                         | {<br/>"trigger": "call_recording"<br/>}                                                       |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Status of the insight workflow                                                                | ACTIVE                                                                                        |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | Internal ID of the insight workflow                                                           | 1                                                                                             |
| `insightTools`                                                                                | [components.InsightToolOutput](../../models/components/insighttooloutput.md)[]                | :heavy_check_mark:                                                                            | List of insight tools used in the workflow                                                    |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which the insight workflow was created                                           | 2025-04-21T00:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of most recent update to the insight workflow                                       | 2025-04-22T00:00:00Z                                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Email of user who last updated Insight Workflow                                               | user@email.com                                                                                |