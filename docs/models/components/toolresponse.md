# ToolResponse

A tool is a function that an agent can call to perform actions like accessing databases,
making API calls, or processing data. For an agent to have access to a tool, the prompt
associated with that agent should be linked to the tool and include instructions to use it.

## Example Usage

```typescript
import { ToolResponse } from "syllable-sdk/models/components";

let value: ToolResponse = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description:
          "hmph backburn amid productive quit ride unnaturally aboard dead midst",
        parameters: "<value>",
      },
    },
  },
  serviceId: 773456,
  id: 456410,
  lastUpdated: new Date("2023-06-18T02:12:53.867Z"),
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the tool                                                                          |
| `definition`                                                                                  | [components.ToolDefinition](../../models/components/tooldefinition.md)                        | :heavy_check_mark:                                                                            | A tool that can be called from an LLM during the conversation.                                |
| `serviceId`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The service this tool belongs to                                                              |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The ID of the tool                                                                            |
| `lastUpdatedComments`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Update comments                                                                               |
| `serviceName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the service to which the tool belongs                                             |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the most recent update to the service                                        |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The email of the user who last updated the tool                                               |