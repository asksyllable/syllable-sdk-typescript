# ToolHistoryResponse

API response for one row in GET /tools/{tool_id}/history.

## Example Usage

```typescript
import { ToolHistoryResponse } from "syllable-sdk/models/components";

let value: ToolHistoryResponse = {
  toolId: 1,
  versionNumber: 1,
  createdAt: new Date("2024-01-01T12:00:00Z"),
  updatedBy: "user@email.com",
  comments: "Adjusted timeout",
  operation: "update",
  deletedReason: "No longer used",
  serviceId: 1,
  serviceName: "Weather API",
  name: "get_weather",
  description: "Fetch weather",
  type: "endpoint",
  definition: {
    type: "endpoint",
    tool: {
      function: {
        name: "get_weather",
        description: "Get the weather for a city",
        parameters: {},
      },
    },
    endpoint: {
      url: "https://api.example.com",
      method: "delete",
      argumentLocation: "form",
      timeout: 45,
    },
    context: {
      task: {
        type: "steps",
        start: "auto",
      },
    },
    defaults: {
      "key": {
        "transform": {
          "action": "default",
          "when": {
            "key": "key",
            "value": "value",
            "operator": "eq",
          },
        },
      },
    },
    staticParameters: [
      {
        name: "temperature_unit",
        description:
          "Whether the temperature information should be fetched in Celsius or Fahrenheit",
        required: false,
        type: "string",
        default: "fahrenheit",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `toolId`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the tool                                                                                               | 1                                                                                                            |
| `versionNumber`                                                                                              | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Monotonic version for this tool (1 = oldest)                                                                 | 1                                                                                                            |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | When this version took effect.                                                                               | 2024-01-01T12:00:00Z                                                                                         |
| `updatedBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | User who made the change that produced this row                                                              | user@email.com                                                                                               |
| `comments`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional comment stored on the tool for this version                                                         | Adjusted timeout                                                                                             |
| `operation`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | What produced this row: create, update, or delete                                                            | update                                                                                                       |
| `deletedReason`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | When operation is delete, reason copied from the tool at delete time                                         | No longer used                                                                                               |
| `serviceId`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Internal ID of the service this tool belonged to at this version                                             | 1                                                                                                            |
| `serviceName`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Service display name.                                                                                        | Weather API                                                                                                  |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Tool name at this version                                                                                    | get_weather                                                                                                  |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Human-readable description of the tool at this version                                                       | Fetch weather                                                                                                |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Tool type at this version: 'action', 'endpoint', 'context', or 'log'                                         | endpoint                                                                                                     |
| `definition`                                                                                                 | [components.ToolDefinition](../../models/components/tooldefinition.md)                                       | :heavy_check_mark:                                                                                           | A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools. |                                                                                                              |