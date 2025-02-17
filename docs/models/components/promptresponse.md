# PromptResponse

A prompt defines the behavior of an agent by delivering instructions to the LLM about how the
agent should behave. A prompt can be linked to one or more agents. A prompt can also be linked to
tools to allow an agent using it to use those tools.

## Example Usage

```typescript
import { PromptResponse } from "syllable-sdk/models/components";

let value: PromptResponse = {
  name: "<value>",
  type: "<value>",
  llmConfig: {
    version: "2024-05-13",
    apiVersion: "2024-06-01",
  },
  id: 947371,
  lastUpdated: "<value>",
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The prompt name                                                          |                                                                          |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | The description of the prompt                                            |                                                                          |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The type of the prompt                                                   |                                                                          |
| `context`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | The prompt text                                                          |                                                                          |
| `tools`                                                                  | *string*[]                                                               | :heavy_minus_sign:                                                       | Names of the tools to which the prompt has access                        |                                                                          |
| `llmConfig`                                                              | [components.PromptLlmConfig](../../models/components/promptllmconfig.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | The prompt ID                                                            |                                                                          |
| `editComments`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The comments for the most recent edit to the prompt                      |                                                                          |
| `lastUpdated`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The last updated date of the prompt                                      |                                                                          |
| `lastUpdatedBy`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | Email address of the user who most recently updated the prompt           | user@email.com                                                           |
| `agentCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The number of agents using the prompt                                    |                                                                          |