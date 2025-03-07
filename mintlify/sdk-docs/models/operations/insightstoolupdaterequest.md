---
title: 'InsightsToolUpdateRequest'
---

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 543353,
  insightToolInput: {
    name: "<value>",
    description: "wealthy how onto vamoose genuine aboard barring alongside",
    version: 134173,
    toolArguments: {},
    insightToolDefinitionId: 316541,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `toolId`                                                                   | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `insightToolInput`                                                         | [components.InsightToolInput](/sdk-docs/models/components/insighttoolinput) | TRUE                                                         | N/A                                                                        |