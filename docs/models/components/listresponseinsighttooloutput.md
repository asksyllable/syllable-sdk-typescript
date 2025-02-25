# ListResponseInsightToolOutput

## Example Usage

```typescript
import { ListResponseInsightToolOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightToolOutput = {
  items: [
    {
      name: "<value>",
      description: "ambitious hefty flawless doubtfully",
      version: 612867,
      toolArguments: {},
      insightToolDefinitionId: 81369,
      id: 881897,
      lastUpdatedBy: "<value>",
    },
  ],
  page: 719620,
  pageSize: 966390,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.InsightToolOutput](../../models/components/insighttooloutput.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `page`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pageSize`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalPages`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |