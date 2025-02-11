# ToolDetailResponse

A tool is a function that an agent can call to perform actions like accessing databases,
making API calls, or processing data. For an agent to have access to a tool, the prompt
associated with that agent should be linked to the tool and include instructions to use it.

## Example Usage

```typescript
import { ToolDetailResponse } from "syllable-sdk/models/components";

let value: ToolDetailResponse = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description: "mozzarella alliance airbrush oil yet following off",
        parameters: "<value>",
      },
    },
  },
  serviceId: 727544,
  id: 24272,
  lastUpdated: new Date("2024-04-16T09:46:15.071Z"),
  lastUpdatedBy: "<value>",
  fields: [
    "<value>",
  ],
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
| `fields`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Fields that the tool accepts as input                                                         |