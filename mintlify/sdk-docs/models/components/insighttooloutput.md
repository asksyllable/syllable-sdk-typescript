---
title: 'InsightToolOutput'
---

## Example Usage

```typescript
import { InsightToolOutput } from "syllable-sdk/models/components";

let value: InsightToolOutput = {
  name: "<value>",
  description: "tough well gadzooks blindly um platypus fund",
  version: 456520,
  toolArguments: {},
  insightToolDefinitionId: 337477,
  id: 970494,
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | Human readable name of Insight Tool                                                           |
| `description`                                                                                 | *string*                                                                                      | TRUE                                                                            | Text description of Insight Tool                                                              |
| `version`                                                                                     | *number*                                                                                      | TRUE                                                                            | Version of Insight Tool                                                                       |
| `toolArguments`                                                                               | [components.ToolArguments](/sdk-docs/models/components/toolarguments)                          | TRUE                                                                            | Arguments for Insight Tool                                                                    |
| `insightToolDefinitionId`                                                                     | *number*                                                                                      | TRUE                                                                            | Unique ID for Insight Tool Definition                                                         |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | Unique ID for Insight Tool                                                                    |
| `insightToolDefinition`                                                                       | [components.InsightToolDefinition](/sdk-docs/models/components/insighttooldefinition)          | FALSE                                                                            | Insight Tool Definition                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | FALSE                                                                            | Timestamp of Insight Tool creation                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | FALSE                                                                            | Timestamp of Insight Tool update                                                              |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | User who last updated Insight Tool                                                            |