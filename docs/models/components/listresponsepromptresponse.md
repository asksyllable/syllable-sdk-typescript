# ListResponsePromptResponse

## Example Usage

```typescript
import { ListResponsePromptResponse } from "syllable-sdk/models/components";

let value: ListResponsePromptResponse = {
  items: [
    {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 448369,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
      toolsFull: [
        {
          name: "Weather Fetcher",
          definition: {
            tool: {
              function: {
                name: "weather_fetcher",
                description: "Fetches weather data",
                parameters: {},
              },
            },
            endpoint: {
              url: "https://api.example.com",
              method: "post",
              argumentLocation: "path",
            },
            defaults: "<value>",
          },
          serviceId: 866789,
          id: 627735,
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
          lastUpdated: new Date("2024-03-15T23:09:38.803Z"),
          lastUpdatedBy: "user@email.com",
        },
      ],
    },
  ],
  page: 416692,
  pageSize: 810839,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.PromptResponse](../../models/components/promptresponse.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `page`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `pageSize`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `totalPages`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |