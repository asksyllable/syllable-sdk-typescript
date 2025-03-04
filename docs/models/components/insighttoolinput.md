# InsightToolInput

## Example Usage

```typescript
import { InsightToolInput } from "syllable-sdk/models/components";

let value: InsightToolInput = {
  name: "<value>",
  description:
    "hospitalization uselessly mostly aw quarrelsomely since hence weary exactly",
  version: 166047,
  toolArguments: {},
  insightToolDefinitionId: 922757,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Human readable name of Insight Tool                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | Text description of Insight Tool                                                                     |
| `version`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | Version number of Insight Tool                                                                       |
| `toolArguments`                                                                                      | [components.InsightToolInputToolArguments](../../models/components/insighttoolinputtoolarguments.md) | :heavy_check_mark:                                                                                   | Arguments for Insight Tool                                                                           |
| `insightToolDefinitionId`                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | Unique ID for Insight Tool Definition                                                                |