# ListResponsePromptResponse

## Example Usage

```typescript
import { ListResponsePromptResponse } from "syllable-sdk/models/components";

let value: ListResponsePromptResponse = {
  items: [
    {
      name: "Weather Agent Prompt",
      description: "Prompt for a weather agent.",
      type: "prompt_v1",
      context:
        "You are a weather agent. Answer the user's questions about weather and nothing else.",
      llmConfig: {
        version: "2024-05-13",
        apiVersion: "2024-06-01",
        temperature: 1,
        seed: 123,
      },
      id: 1,
      editComments:
        "Updated prompt text to include requirement to not answer questions that aren't about weather.",
      lastUpdated: "2024-01-01T12:00:00Z",
      lastUpdatedBy: "user@email.com",
      agentCount: 5,
      toolsFull: [
        {
          name: "Weather Fetcher",
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
          serviceId: 1,
          id: 1,
          lastUpdatedComments: "Updated to use new API endpoint",
          promptsInfo: [
            {
              id: 1,
              name: "Test Prompt",
            },
          ],
          agentsInfo: [
            {
              id: 1,
              name: "Test Agent",
            },
          ],
          lastUpdated: new Date("2025-06-02T14:07:36.077Z"),
          lastUpdatedBy: "user@email.com",
        },
      ],
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.PromptResponse](../../models/components/promptresponse.md)[] | :heavy_check_mark:                                                       | List of items returned from the query                                    |                                                                          |
| `page`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | The page number of the results (0-based)                                 | 0                                                                        |
| `pageSize`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | The number of items returned per page                                    | 25                                                                       |
| `totalPages`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of pages of results given the indicated page size       | 4                                                                        |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of items returned from the query                        | 100                                                                      |