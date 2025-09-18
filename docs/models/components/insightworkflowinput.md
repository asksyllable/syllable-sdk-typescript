# InsightWorkflowInput

Request model to create/update an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowInput } from "syllable-sdk/models/components";

let value: InsightWorkflowInput = {
  name: "summary-workflow",
  source: "upload",
  description: "Default workflow - generates a summary of the call",
  insightToolIds: [
    1,
  ],
  conditions: {
    minDuration: 120,
    maxDuration: 600,
    sampleRate: 10,
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
    sheetInfo: {
      "sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",
      "sheet_name": "Q1 Sales Data",
    },
  },
  startDatetime: new Date("2025-09-17T00:00:00Z"),
  endDatetime: new Date("2025-09-18T00:00:00Z"),
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Human-readable name of insight workflow                                                                                                      | summary-workflow                                                                                                                             |
| `source`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Source of the workflow                                                                                                                       | agent                                                                                                                                        |
| `description`                                                                                                                                | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Text description of workflow                                                                                                                 | Default workflow - generates a summary of the call                                                                                           |
| `insightToolIds`                                                                                                                             | *number*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | Ordered list of IDs of tool configurations to be executed in the workflow                                                                    | [<br/>1<br/>]                                                                                                                                |
| `conditions`                                                                                                                                 | [components.InsightWorkflowCondition](../../models/components/insightworkflowcondition.md)                                                   | :heavy_check_mark:                                                                                                                           | Model for the conditions that trigger an insight workflow.                                                                                   |                                                                                                                                              |
| `startDatetime`                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | Target session timestamp the workflow (backfill) should start. An empty value indicates start on activation - live sessions only             | 2025-09-17T00:00:00Z                                                                                                                         |
| `endDatetime`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | Target session timestamp the workflow (backfill) should end. An empty value indicates no end, i.e., include live sessions until deactivation | 2025-09-18T00:00:00Z                                                                                                                         |