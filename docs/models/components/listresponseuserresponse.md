# ListResponseUserResponse

## Example Usage

```typescript
import { ListResponseUserResponse } from "syllable-sdk/models/components";

let value: ListResponseUserResponse = {
  items: [
    {
      email: "user@email.com",
      firstName: "Jane",
      lastName: "Smith",
      roleId: 1,
      lastUpdatedComments: "Updated to change which role was assigned",
      id: 1,
      roleName: "admin",
      emailSent: true,
      lastUpdated: new Date("2023-05-25T17:55:10.089Z"),
      lastUpdatedBy: "admin@email.com",
      lastSessionAt: new Date("2025-01-01T12:00:00Z"),
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.UserResponse](../../models/components/userresponse.md)[] | :heavy_check_mark:                                                   | List of items returned from the query                                |                                                                      |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | The page number of the results (0-based)                             | 0                                                                    |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | The number of items returned per page                                | 25                                                                   |
| `totalPages`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | The total number of pages of results given the indicated page size   | 4                                                                    |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | The total number of items returned from the query                    | 100                                                                  |