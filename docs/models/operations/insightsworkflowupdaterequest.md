# InsightsWorkflowUpdateRequest

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 874288,
  insightWorkflowInput: {
    name: "summary-workflow",
    source: "transfer",
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
      sheetInfo: {
        "sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",
        "sheet_name": "Q1 Sales Data",
      },
    },
    startDatetime: new Date("2025-07-14T00:00:00Z"),
    endDatetime: new Date("2025-07-15T00:00:00Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowId`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `insightWorkflowInput`                                                             | [components.InsightWorkflowInput](../../models/components/insightworkflowinput.md) | :heavy_check_mark:                                                                 | N/A                                                                                |