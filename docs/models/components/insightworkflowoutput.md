# InsightWorkflowOutput

Response model for an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowOutput } from "syllable-sdk/models/components";

let value: InsightWorkflowOutput = {
  name: "summary-workflow",
  source: "agent",
  description: "Default workflow - generates a summary of the call",
  insightToolIds: [
    1,
  ],
  conditions: {
    minDuration: 120,
    maxDuration: 600,
    sampleRate: 2,
    agentList: [
      866324,
      826325,
    ],
    promptList: [
      "123324",
    ],
    folderList: [
      16754,
      67535,
    ],
  },
  startDatetime: new Date("2025-07-07T00:00:00Z"),
  endDatetime: new Date("2025-07-08T00:00:00Z"),
  id: 1,
  insightTools: [
    {
      name: "summary-tool",
      description: "This tool uses GPT4.1 to generate a summary of the call",
      version: 1,
      toolArguments: {
        "prompt":
          "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
      },
      insightToolDefinitionId: 1,
      id: 1,
      insightToolDefinition: {
        id: 1,
        name: "llm_tool",
        type: "<value>",
        description: "An LLM tool evaluates a transcript with a given prompt",
        toolParameters: {
          "prompt": "string",
        },
        toolResultSet: {
          "summary": "string",
        },
      },
      createdAt: new Date("2025-07-07T00:00:00Z"),
      updatedAt: new Date("2025-07-08T00:00:00Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  status: "ACTIVE",
  estimate: {
    backfillCount: 100,
    backfillDuration: 1000,
    estimatedDailyCount: 10,
    estimatedDailyDuration: 3674.11,
    estimatedDailyCost: 45.25,
    estimatedBackfillCost: 4561,
  },
  queueCount: 10,
  createdAt: new Date("2025-07-07T00:00:00Z"),
  updatedAt: new Date("2025-07-08T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Human-readable name of insight workflow                                                            | summary-workflow                                                                                   |
| `source`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | Source of the insight workflow                                                                     | agent                                                                                              |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Text description of insight workflow                                                               | Default workflow - generates a summary of the call                                                 |
| `insightToolIds`                                                                                   | *number*[]                                                                                         | :heavy_check_mark:                                                                                 | List of IDs of insight tool configurations used in the workflow                                    | [<br/>1<br/>]                                                                                      |
| `conditions`                                                                                       | [components.InsightWorkflowCondition](../../models/components/insightworkflowcondition.md)         | :heavy_check_mark:                                                                                 | Model for the conditions that trigger an insight workflow.                                         |                                                                                                    |
| `startDatetime`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp for when the insight workflow should start. An empty value indicates start on activation | 2025-07-07T00:00:00Z                                                                               |
| `endDatetime`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp of when the insight workflow should end. An empty value indicates no end                 | 2025-07-08T00:00:00Z                                                                               |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | Internal ID of the insight workflow                                                                | 1                                                                                                  |
| `insightTools`                                                                                     | [components.InsightToolOutput](../../models/components/insighttooloutput.md)[]                     | :heavy_check_mark:                                                                                 | List of insight tool configurations used in the workflow                                           |                                                                                                    |
| `status`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | Status of the insight workflow                                                                     | ACTIVE                                                                                             |
| `estimate`                                                                                         | [components.InsightWorkflowEstimate](../../models/components/insightworkflowestimate.md)           | :heavy_check_mark:                                                                                 | Response model for an insight workflow.                                                            |                                                                                                    |
| `queueCount`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Number of calls in the workflow queue (pending or processing)                                      | 10                                                                                                 |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp at which the insight workflow was created                                                | 2025-07-07T00:00:00Z                                                                               |
| `updatedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp of most recent update to the insight workflow                                            | 2025-07-08T00:00:00Z                                                                               |
| `lastUpdatedBy`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Email of user who last updated Insight Workflow                                                    | user@email.com                                                                                     |