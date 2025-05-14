# InsightToolOutput

Response model for an insight tool configuration.

## Example Usage

```typescript
import { InsightToolOutput } from "syllable-sdk/models/components";

let value: InsightToolOutput = {
  name: "summary-tool",
  description: "This tool uses GPT4.1 to generate a summary of the call",
  version: 1,
  toolArguments: {
    "prompt":
      "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
  },
  insightToolDefinitionId: 1,
  id: 1,
  insightToolDefinition: {
    id: 1,
    name: "llm_tool",
    type: "<value>",
    description: "An LLM tool evaluates a transcript with a given prompt",
    toolParameters: {
      "prompt": "string",
    },
    toolResultSet: {
      "summary": "string",
    },
  },
  createdAt: new Date("2025-05-13T00:00:00Z"),
  updatedAt: new Date("2025-05-14T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                        | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Human readable name of insight tool                                                                                                           | summary-tool                                                                                                                                  |
| `description`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Text description of insight tool configuration                                                                                                | This tool uses GPT4.1 to generate a summary of the call                                                                                       |
| `version`                                                                                                                                     | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Version of insight tool                                                                                                                       | 1                                                                                                                                             |
| `toolArguments`                                                                                                                               | *any*                                                                                                                                         | :heavy_check_mark:                                                                                                                            | Arguments for calling the insight tool                                                                                                        | {<br/>"prompt": "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded"<br/>} |
| `insightToolDefinitionId`                                                                                                                     | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Unique ID for insight tool definition used by this tool configuration                                                                         | 1                                                                                                                                             |
| `id`                                                                                                                                          | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Unique ID for insight tool                                                                                                                    | 1                                                                                                                                             |
| `insightToolDefinition`                                                                                                                       | [components.InsightToolDefinition](../../models/components/insighttooldefinition.md)                                                          | :heavy_minus_sign:                                                                                                                            | Insight Tool Definition                                                                                                                       |                                                                                                                                               |
| `createdAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | Timestamp of at which insight tool configuration was created                                                                                  | 2025-05-13T00:00:00Z                                                                                                                          |
| `updatedAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | Timestamp at which insight tool configuration was last updated                                                                                | 2025-05-14T00:00:00Z                                                                                                                          |
| `lastUpdatedBy`                                                                                                                               | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Email of user who last updated insight tool configuration                                                                                     | user@email.com                                                                                                                                |