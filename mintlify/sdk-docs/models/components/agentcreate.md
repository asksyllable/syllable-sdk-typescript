---
title: 'AgentCreate'
---

## Example Usage

```typescript
import { AgentCreate } from "syllable-sdk/models/components";

let value: AgentCreate = {
  name: "<value>",
  type: "ca_v1",
  promptId: 67249,
  customMessageId: 679393,
  timezone: "America/New_York",
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `name`                                                                                              | *string*                                                                                            | TRUE                                                                                  | The agent name                                                                                      |                                                                                                     |
| `description`                                                                                       | *string*                                                                                            | FALSE                                                                                  | The agent description                                                                               |                                                                                                     |
| `label`                                                                                             | *string*                                                                                            | FALSE                                                                                  | The agent label                                                                                     |                                                                                                     |
| `type`                                                                                              | *string*                                                                                            | TRUE                                                                                  | The agent type. Can be an arbitrary string                                                          | ca_v1                                                                                               |
| `promptId`                                                                                          | *number*                                                                                            | TRUE                                                                                  | ID of the prompt associated with the agent                                                          |                                                                                                     |
| `customMessageId`                                                                                   | *number*                                                                                            | TRUE                                                                                  | ID of the custom message that should be delivered at the beginning of a conversation with the agent |                                                                                                     |
| `timezone`                                                                                          | *string*                                                                                            | TRUE                                                                                  | The time zone in which the agent operates                                                           | America/New_York                                                                                    |
| `promptToolDefaults`                                                                                | [components.AgentToolDefaults](/sdk-docs/models/components/agenttooldefaults)[]                      | FALSE                                                                                  | The prompt tool defaults                                                                            |                                                                                                     |
| `languages`                                                                                         | *string*[]                                                                                          | FALSE                                                                                  | BCP 47 codes of languages the agent supports                                                        | [<br/>"en-US",<br/>"es-US"<br/>]                                                                    |
| `variables`                                                                                         | Record                                                                            | TRUE                                                                                  | Custom context variables for the conversation session. Keys should be prefixed with "vars.".        |                                                                                                     |
| `toolHeaders`                                                                                       | Record                                                                            | TRUE                                                                                  | Optional headers to include in tool calls for agent.                                                |                                                                                                     |