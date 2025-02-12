# AgentUpdate

## Example Usage

```typescript
import { AgentUpdate } from "syllable-sdk/models/components";

let value: AgentUpdate = {
  name: "<value>",
  type: "ca_v1",
  promptId: 536579,
  customMessageId: 896672,
  timezone: "America/Chicago",
  languages: [
    "en-US",
    "es-US",
  ],
  variables: {
    "key": "<value>",
  },
  toolHeaders: {
    "key": "<value>",
  },
  id: 216897,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | The agent name                                                                                      |                                                                                                     |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The agent description                                                                               |                                                                                                     |
| `label`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The agent label                                                                                     |                                                                                                     |
| `type`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | The agent type. Can be an arbitrary string                                                          | ca_v1                                                                                               |
| `promptId`                                                                                          | *number*                                                                                            | :heavy_check_mark:                                                                                  | ID of the prompt associated with the agent                                                          |                                                                                                     |
| `customMessageId`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | ID of the custom message that should be delivered at the beginning of a conversation with the agent |                                                                                                     |
| `timezone`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | The time zone in which the agent operates                                                           | America/New_York                                                                                    |
| `promptToolDefaults`                                                                                | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                      | :heavy_minus_sign:                                                                                  | The prompt tool defaults                                                                            |                                                                                                     |
| `languages`                                                                                         | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | BCP 47 codes of languages the agent supports                                                        | [<br/>"en-US",<br/>"es-US"<br/>]                                                                    |
| `variables`                                                                                         | Record<string, *string*>                                                                            | :heavy_check_mark:                                                                                  | Custom context variables for the conversation session. Keys should be prefixed with "vars.".        |                                                                                                     |
| `toolHeaders`                                                                                       | Record<string, *string*>                                                                            | :heavy_check_mark:                                                                                  | Optional headers to include in tool calls for agent.                                                |                                                                                                     |
| `agentInitiated`                                                                                    | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether the agent initiates conversation with a user after the custom_message is delivered          |                                                                                                     |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | The agent ID                                                                                        |                                                                                                     |