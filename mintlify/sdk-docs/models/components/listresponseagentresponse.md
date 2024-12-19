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
          provider: "azure_openai",
          model: "gpt-4o",
          version: "2024-05-13",
          apiVersion: "2024-06-01",
        },
        id: 645894,
        lastUpdated: "<value>",
      },
    },
  ],
  page: 437587,
  pageSize: 891773,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.AgentResponse](/sdk-docs/models/components/agentresponse)[] | TRUE                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | TRUE                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | TRUE                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | FALSE                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | FALSE                                                     | N/A                                                                    |