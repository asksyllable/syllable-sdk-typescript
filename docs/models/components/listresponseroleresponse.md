# ListResponseRoleResponse

## Example Usage

```typescript
import { ListResponseRoleResponse } from "syllable-sdk/models/components";

let value: ListResponseRoleResponse = {
  items: [
    {
      name: "Prompt Engineer",
      description: "Role for users who can fetch and change prompts",
      permissions: [
        "prompts_read",
        "prompts_write",
        "prompts_delete",
      ],
      id: 1,
      lastUpdatedComments: "Updated to add delete permission",
      isSystemRole: false,
      lastUpdated: new Date("2023-04-20T20:22:04.958Z"),
      lastUpdatedBy: "user@email.com",
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
| `items`                                                              | [components.RoleResponse](../../models/components/roleresponse.md)[] | :heavy_check_mark:                                                   | List of items returned from the query                                |                                                                      |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | The page number of the results (0-based)                             | 0                                                                    |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | The number of items returned per page                                | 25                                                                   |
| `totalPages`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | The total number of pages of results given the indicated page size   | 4                                                                    |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | The total number of items returned from the query                    | 100                                                                  |