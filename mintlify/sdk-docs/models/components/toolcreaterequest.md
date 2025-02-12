---
title: 'ToolCreateRequest'
---

## Example Usage

```typescript
import { ToolCreateRequest } from "syllable-sdk/models/components";

let value: ToolCreateRequest = {
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
      method: "get",
      argumentLocation: "form",
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
  serviceId: 773084,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | TRUE                                                     | The name of the tool                                                   | Weather Fetcher                                                        |
| `definition`                                                           | [components.ToolDefinition](/sdk-docs/models/components/tooldefinition) | TRUE                                                     | A tool that can be called from an LLM during the conversation.         |                                                                        |
| `serviceId`                                                            | *number*                                                               | TRUE                                                     | The service to which this tool belongs                                 |                                                                        |