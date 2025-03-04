---
title: 'InsightsToolUpdateRequest'
---

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 816151,
  insightToolInput: {
    name: "<value>",
    description:
      "aftermath grown whereas merit loosely fumigate duster laughter pastel solidly",
    version: 459875,
    toolArguments: {},
    insightToolDefinitionId: 573610,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `toolId`                                                                   | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `insightToolInput`                                                         | [components.InsightToolInput](/sdk-docs/models/components/insighttoolinput) | TRUE                                                         | N/A                                                                        |