# InsightWorkflowCondition

Model for the conditions that trigger an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowCondition } from "syllable-sdk/models/components";

let value: InsightWorkflowCondition = {
  minDuration: 120,
  maxDuration: 600,
  sampleRate: 2,
  agentList: [
    "866324",
    "826325",
  ],
  promptList: [
    "123324",
  ],
  folderList: [
    16754,
    67535,
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `minDuration`                            | *number*                                 | :heavy_minus_sign:                       | Minimum duration of the calls in seconds | 120                                      |
| `maxDuration`                            | *number*                                 | :heavy_minus_sign:                       | Maximum duration of the calls in seconds | 600                                      |
| `sampleRate`                             | *number*                                 | :heavy_minus_sign:                       | Sample rate as a percentage of calls     | 2                                        |
| `agentList`                              | *string*[]                               | :heavy_minus_sign:                       | List of agent IDs                        | [<br/>866324,<br/>826325<br/>]           |
| `promptList`                             | *string*[]                               | :heavy_minus_sign:                       | List of prompts IDs                      | [<br/>123324<br/>]                       |
| `folderList`                             | *number*[]                               | :heavy_minus_sign:                       | List of folder IDs                       | [<br/>16754,<br/>67535<br/>]             |