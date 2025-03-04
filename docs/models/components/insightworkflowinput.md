# InsightWorkflowInput

## Example Usage

```typescript
import { InsightWorkflowInput } from "syllable-sdk/models/components";

let value: InsightWorkflowInput = {
  name: "<value>",
  description: "joshingly overload nor",
  insightToolIds: [
    979963,
  ],
  conditions: {},
  status: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Human readable name of Insight Workflow                                                                |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Text description of Insight Workflow                                                                   |
| `insightToolIds`                                                                                       | *number*[]                                                                                             | :heavy_check_mark:                                                                                     | List of Insight Tool IDs                                                                               |
| `conditions`                                                                                           | [components.InsightWorkflowInputConditions](../../models/components/insightworkflowinputconditions.md) | :heavy_check_mark:                                                                                     | Conditions for Insight Workflow                                                                        |
| `status`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | Status of the Insight Workflow                                                                         |