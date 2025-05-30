# InsightToolInput

Request model to create/update an insight tool configuration.

## Example Usage

```typescript
import { InsightToolInput } from "syllable-sdk/models/components";

let value: InsightToolInput = {
  name: "summary-tool",
  description: "This tool uses GPT4.1 to generate a summary of the call",
  version: 1,
  toolArguments: {
    "prompt":
      "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
  },
  insightToolDefinitionId: 1,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                        | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Human readable name of insight tool                                                                                                           | summary-tool                                                                                                                                  |
| `description`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Text description of insight tool configuration                                                                                                | This tool uses GPT4.1 to generate a summary of the call                                                                                       |
| `version`                                                                                                                                     | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Version number of insight tool configuration                                                                                                  | 1                                                                                                                                             |
| `toolArguments`                                                                                                                               | *any*                                                                                                                                         | :heavy_check_mark:                                                                                                                            | Arguments for calling the insight tool                                                                                                        | {<br/>"prompt": "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded"<br/>} |
| `insightToolDefinitionId`                                                                                                                     | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Internal ID for the definition used by the insight tool configuration                                                                         | 1                                                                                                                                             |