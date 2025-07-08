# Conversation

A conversation is a record of messages between a user and an agent, and is composed of one or
more sessions.

## Example Usage

```typescript
import { Conversation } from "syllable-sdk/models/components";

let value: Conversation = {
  timestamp: new Date("2023-03-29T08:06:26.678Z"),
  conversationId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the conversation                                                                 |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the conversation                                                                        |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the agent with which the conversation occurred                                          |
| `agentName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the agent with which the conversation occurred                                        |
| `agentType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Value of the "type" field of the agent with which the conversation occurred                   |
| `promptId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the prompt used in the conversation                                                     |
| `promptName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the prompt used in the conversation                                                   |
| `promptVersion`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Version of the prompt used in the conversation                                                |
| `llmProvider`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider for the LLM used in the conversation (see PromptResponse.llm_config.provider)        |
| `llmModel`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Model for the LLM used in the conversation (see PromptResponse.llm_config.model)              |
| `llmVersion`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Version for the LLM used in the conversation (see PromptResponse.llm_config.version)          |
| `llmTemperature`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | Temperature for the LLM used in the conversation (see PromptResponse.llm_config.temperature)  |
| `llmSeed`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Seed for the LLM used in the conversation (see PromptResponse.llm_config.seed).               |
| `isLegacy`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the conversation occurred on the legacy Syllable system                               |