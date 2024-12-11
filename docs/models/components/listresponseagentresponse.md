# ListResponseAgentResponse

## Example Usage

```typescript
import { ListResponseAgentResponse } from "syllable-sdk/models/components";

let value: ListResponseAgentResponse = {
  items: [
    {
      name: "<value>",
      type: "<value>",
      promptId: 548814,
      timezone: "Atlantic/St_Helena",
      promptToolDefaults: [
        {
          toolName: "<value>",
          defaultValues: [
            {
              fieldName: "<value>",
              defaultValue: "<value>",
            },
          ],
        },
      ],
      languages: [
        "<value>",
      ],
      variables: {
        "key": "<value>",
      },
      toolHeaders: {
        "key": "<value>",
      },
      id: 602763,
      updatedAt: new Date("2023-08-21T04:36:26.084Z"),
      lastUpdatedBy: "<value>",
      prompt: {
        name: "<value>",
        type: "<value>",
        llmConfig: {
          model: "gpt-4o",
          version: "2024-05-13",
          apiVersion: "2024-06-01",
        },
        id: 423655,
        lastUpdated: "<value>",
      },
    },
  ],
  page: 645894,
  pageSize: 437587,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.AgentResponse](../../models/components/agentresponse.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |