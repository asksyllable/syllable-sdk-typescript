# DirectoryMemberUpdateRequest

## Example Usage

```typescript
import { DirectoryMemberUpdateRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberUpdateRequest = {
  memberId: 394864,
  directoryMember: {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `memberId`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `directoryMember`                                                        | [components.DirectoryMember](../../models/components/directorymember.md) | :heavy_check_mark:                                                       | N/A                                                                      |