# ListResponseAgent

## Example Usage

```typescript
import { ListResponseAgent } from "syllable-sdk/models/components";

let value: ListResponseAgent = {
  items: [
    {
      name: "<value>",
      timezone: "Asia/Dili",
      type: "<value>",
      promptId: 715190,
      customMessageId: 602763,
      languages: [
        "<value>",
      ],
      id: 544883,
    },
  ],
  page: 423655,
  pageSize: 645894,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [components.Agent](../../models/components/agent.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `page`                                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalPages`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |