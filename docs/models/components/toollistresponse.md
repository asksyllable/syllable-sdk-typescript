# ToolListResponse

## Example Usage

```typescript
import { ToolListResponse } from "syllable-sdk/models/components";

let value: ToolListResponse = {
  tools: [
    {
      name: "<value>",
      serviceId: 656330,
      id: 138183,
    },
  ],
  page: 196582,
  pageSize: 368725,
  totalPages: 820994,
  totalCount: 97101,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `tools`                                                                                            | [components.SchemasBubblegumV2ToolsTool](../../models/components/schemasbubblegumv2toolstool.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `page`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pageSize`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `totalPages`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `totalCount`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |