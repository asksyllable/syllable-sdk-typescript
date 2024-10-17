# SessionListResponse

## Example Usage

```typescript
import { SessionListResponse } from "syllable-sdk/models/components";

let value: SessionListResponse = {
  sessions: [
    {
      timestamp: new Date("2023-12-17T19:21:41.015Z"),
    },
  ],
  page: 253291,
  pageSize: 466311,
  totalPages: 244425,
  totalCount: 158969,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `sessions`                                                 | [components.Session](../../models/components/session.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |