# InsightWorkflowInput

Request model to create/update an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowInput } from "syllable-sdk/models/components";

let value: InsightWorkflowInput = {
  name: "summary-workflow",
  source: "manual",
  description: "Default workflow - generates a summary of the call",
  insightToolIds: [
    1,
  ],
  conditions: {
    minDuration: 120,
    maxDuration: 600,
    sampleRate: 2,
    agentList: [
      "Agnes.Wangeci",
      "Dorice.Otaaba",
    ],
    promptList: [
      "123324",
    ],
    folderList: [
      16754,
      67535,
    ],
  },
  startDatetime: new Date("2025-05-27T00:00:00Z"),
  endDatetime: new Date("2025-05-28T00:00:00Z"),
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
| `startDatetime`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp for when the insight workflow should start. An empty value indicates start on activation | 2025-05-27T00:00:00Z                                                                               |
| `endDatetime`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp of when the insight workflow should end. An empty value indicates no end                 | 2025-05-28T00:00:00Z                                                                               |