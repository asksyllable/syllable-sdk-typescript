# ListResponseExperimentResponse

## Example Usage

```typescript
import { ListResponseExperimentResponse } from "syllable-sdk/models/components";

let value: ListResponseExperimentResponse = {
  items: [
    {
      id: 1,
      name: "Shorter greeting",
      targetId: 1,
      variants: [
        {
          id: 1,
          name: "b",
          weight: 10,
          isControl: false,
          agentId: 1,
          agentName: "Front desk",
        },
      ],
      status: "draft",
      createdAt: new Date("2025-06-01T19:00:46.965Z"),
      updatedAt: new Date("2026-02-04T14:11:28.363Z"),
      lastUpdatedBy: "<value>",
      target: {
        id: 1,
        target: "+19995551234",
        targetMode: "whatsapp",
        channelId: 1,
        channelName: "Main line",
      },
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.ExperimentResponse](../../models/components/experimentresponse.md)[] | :heavy_check_mark:                                                               | List of items returned from the query                                            |                                                                                  |
| `page`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | The page number of the results (0-based)                                         | 0                                                                                |
| `pageSize`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | The number of items returned per page                                            | 25                                                                               |
| `totalPages`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of pages of results given the indicated page size               | 4                                                                                |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of items returned from the query                                | 100                                                                              |