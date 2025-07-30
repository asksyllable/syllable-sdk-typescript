# InsightWorkflowCondition

Model for the conditions that trigger an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowCondition } from "syllable-sdk/models/components";

let value: InsightWorkflowCondition = {
  minDuration: 120,
  maxDuration: 600,
  sampleRate: 0.1,
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `minDuration`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Minimum duration of the calls in seconds                                                      | 120                                                                                           |
| `maxDuration`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum duration of the calls in seconds                                                      | 600                                                                                           |
| `sampleRate`                                                                                  | *components.SampleRate*                                                                       | :heavy_minus_sign:                                                                            | Sample rate as a percentage of calls                                                          | 0.1                                                                                           |
| `agentList`                                                                                   | *components.AgentList*                                                                        | :heavy_minus_sign:                                                                            | List of agents                                                                                | [<br/>866324,<br/>826325<br/>]                                                                |
| `promptList`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of prompts                                                                               | [<br/>"123324"<br/>]                                                                          |
| `folderList`                                                                                  | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | List of folder IDs                                                                            | [<br/>16754,<br/>67535<br/>]                                                                  |
| `sheetInfo`                                                                                   | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Information about the sheet to be used for the workflow                                       | {<br/>"sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",<br/>"sheet_name": "Q1 Sales Data"<br/>} |