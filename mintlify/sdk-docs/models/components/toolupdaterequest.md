---
title: 'ToolUpdateRequest'
---

## Example Usage

```typescript
import { ToolUpdateRequest } from "syllable-sdk/models/components";

let value: ToolUpdateRequest = {
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
      argumentLocation: "body",
    },
    defaults: "<value>",
  },
  serviceId: 589695,
  id: 745398,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | TRUE                                                     | The name of the tool                                                   | Weather Fetcher                                                        |
| `definition`                                                           | [components.ToolDefinition](/sdk-docs/models/components/tooldefinition) | TRUE                                                     | A tool that can be called from an LLM during the conversation.         |                                                                        |
| `serviceId`                                                            | *number*                                                               | TRUE                                                     | The service to which this tool belongs                                 |                                                                        |
| `id`                                                                   | *number*                                                               | TRUE                                                     | The ID of the tool                                                     |                                                                        |
| `lastUpdatedComments`                                                  | *string*                                                               | FALSE                                                     | Update comments                                                        |                                                                        |