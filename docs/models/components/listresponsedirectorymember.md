# ListResponseDirectoryMember

## Example Usage

```typescript
import { ListResponseDirectoryMember } from "syllable-sdk/models/components";

let value: ListResponseDirectoryMember = {
  items: [
    {
      name: "<value>",
      type: "<value>",
      id: 777408,
    },
  ],
  page: 259422,
  pageSize: 373813,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.DirectoryMember](../../models/components/directorymember.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |