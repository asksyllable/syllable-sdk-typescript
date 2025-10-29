# ListResponseDirectoryMember

## Example Usage

```typescript
import { ListResponseDirectoryMember } from "syllable-sdk/models/components";

let value: ListResponseDirectoryMember = {
  items: [
    {
      name: "Jane Doe",
      type: "contact",
      extensions: [
        {
          name: "work",
          numbers: [
            {
              number: "+1234567890",
              rules: [
                {
                  "language": "en",
                },
              ],
            },
          ],
        },
      ],
      contactTags: {
        "tag1": [
          "value1",
        ],
        "tag2": [
          "value2",
        ],
      },
      id: 1,
      updatedAt: new Date("2024-01-01T00:00:00Z"),
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.DirectoryMember](../../models/components/directorymember.md)[] | :heavy_check_mark:                                                         | List of items returned from the query                                      |                                                                            |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The page number of the results (0-based)                                   | 0                                                                          |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | The number of items returned per page                                      | 25                                                                         |
| `totalPages`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of pages of results given the indicated page size         | 4                                                                          |
| `totalCount`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of items returned from the query                          | 100                                                                        |