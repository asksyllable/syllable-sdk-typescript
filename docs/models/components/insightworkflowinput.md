# InsightWorkflowInput

Request model to create/update an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowInput } from "syllable-sdk/models/components";

let value: InsightWorkflowInput = {
  name: "summary-workflow",
  description: "Default workflow - generates a summary of the call",
  insightToolIds: [
    1,
  ],
  conditions: {},
  status: "ACTIVE",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Human-readable name of insight workflow                                                                | summary-workflow                                                                                       |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Text description of insight workflow                                                                   | Default workflow - generates a summary of the call                                                     |
| `insightToolIds`                                                                                       | *number*[]                                                                                             | :heavy_check_mark:                                                                                     | List of IDs of insight tools used in the workflow                                                      | [<br/>1<br/>]                                                                                          |
| `conditions`                                                                                           | [components.InsightWorkflowInputConditions](../../models/components/insightworkflowinputconditions.md) | :heavy_check_mark:                                                                                     | Conditions for insight workflow to trigger on a given call recording.                                  | {<br/>"trigger": "call_recording"<br/>}                                                                |
| `status`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | Status of the insight workflow                                                                         | ACTIVE                                                                                                 |