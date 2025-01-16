# AgentCreate

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
  variables: {},
  toolHeaders: {
    "key": "<value>",
  },
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
| `variables`                                                                                         | [components.Variables](../../models/components/variables.md)                                        | :heavy_check_mark:                                                                                  | Custom context variables for the conversation session. Should be prefixed with "vars.".             | {<br/>"vars.hospital": "Weill Cornell Medical Center"<br/>}                                         |
| `toolHeaders`                                                                                       | Record<string, *string*>                                                                            | :heavy_check_mark:                                                                                  | Optional headers to include in tool calls for agent.                                                |                                                                                                     |