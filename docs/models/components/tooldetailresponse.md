# ToolDetailResponse

A tool is a function that an agent can call to perform actions like accessing databases,
making API calls, or processing data. For an agent to have access to a tool, the prompt
associated with that agent should be linked to the tool and include instructions to use it.

## Example Usage

```typescript
import { ToolDetailResponse } from "syllable-sdk/models/components";

let value: ToolDetailResponse = {
  name: "Weather Fetcher",
  definition: {
    tool: {
      function: {
        name: "weather_fetcher",
        description: "Fetches weather data",
        parameters: "<value>",
      },
    },
    endpoint: {
      url: "https://api.example.com",
      method: "post",
      argumentLocation: "query",
    },
    defaults: {
      "key": {
        transform: {
          action: "default",
          when: {
            key: "key",
            value: "value",
          },
        },
      },
    },
  },
  serviceId: 399802,
  id: 380335,
  lastUpdated: new Date("2023-06-11T23:57:33.954Z"),
  lastUpdatedBy: "user@email.com",
  fields: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the tool                                                                                         | Weather Fetcher                                                                                              |
| `definition`                                                                                                 | [components.ToolDefinition](../../models/components/tooldefinition.md)                                       | :heavy_check_mark:                                                                                           | A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools. |                                                                                                              |
| `serviceId`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The service to which this tool belongs                                                                       |                                                                                                              |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the tool                                                                                           |                                                                                                              |
| `lastUpdatedComments`                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Update comments                                                                                              |                                                                                                              |
| `serviceName`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The name of the service to which the tool belongs                                                            |                                                                                                              |
| `lastUpdated`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The timestamp of the most recent update to the service                                                       |                                                                                                              |
| `lastUpdatedBy`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The email of the user who last updated the tool                                                              | user@email.com                                                                                               |
| `fields`                                                                                                     | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | Fields that the tool accepts as input                                                                        |                                                                                                              |