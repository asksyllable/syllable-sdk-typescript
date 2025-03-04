---
title: 'InsightsToolUpdateRequest'
---

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 35742,
  insightToolInput: {
    name: "<value>",
    description:
      "provided consequently considering unnaturally busy whereas any badly impolite",
    version: 768195,
    toolArguments: {},
    insightToolDefinitionId: 527715,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `toolId`                                                                   | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `insightToolInput`                                                         | [components.InsightToolInput](/sdk-docs/models/components/insighttoolinput) | TRUE                                                         | N/A                                                                        |