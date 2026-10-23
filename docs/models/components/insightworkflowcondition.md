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
    866324,
    826325,
  ],
  promptList: [
    "123324",
  ],
  agentLabels: [
    "Outbound",
    "Hospital",
  ],
  promptLabels: [
    "Practice",
    "Hospital",
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

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `minDuration`                                                                                                                                   | *number*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Minimum duration of the calls in seconds                                                                                                        | 120                                                                                                                                             |
| `maxDuration`                                                                                                                                   | *number*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Maximum duration of the calls in seconds                                                                                                        | 600                                                                                                                                             |
| `sampleRate`                                                                                                                                    | *components.SampleRate*                                                                                                                         | :heavy_minus_sign:                                                                                                                              | Sample rate as a percentage of calls                                                                                                            | **Example 1:** 0.1<br/>**Example 2:** 10                                                                                                        |
| `agentList`                                                                                                                                     | *components.AgentList*                                                                                                                          | :heavy_minus_sign:                                                                                                                              | List of agents                                                                                                                                  | **Example 1:** [<br/>866324,<br/>826325<br/>]<br/>**Example 2:** [<br/>"Agnes.Wangeci",<br/>"Dorice.Otaaba"<br/>]                               |
| `promptList`                                                                                                                                    | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | List of prompts                                                                                                                                 | [<br/>"123324"<br/>]                                                                                                                            |
| `agentLabels`                                                                                                                                   | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | Match any of these labels on the session agent in its current state. Combined with other conditions using AND; an empty list applies no filter. | [<br/>"Outbound",<br/>"Hospital"<br/>]                                                                                                          |
| `promptLabels`                                                                                                                                  | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | Match any of these labels on the prompt version used by the session. Combined with other conditions using AND; an empty list applies no filter. | [<br/>"Practice",<br/>"Hospital"<br/>]                                                                                                          |
| `folderList`                                                                                                                                    | *number*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | List of folder IDs                                                                                                                              | [<br/>16754,<br/>67535<br/>]                                                                                                                    |
| `sheetInfo`                                                                                                                                     | Record<string, *string*>                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Legacy sheet metadata, retained for viewing retired workflows                                                                                   | {<br/>"sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",<br/>"sheet_name": "Q1 Sales Data"<br/>}                                       |