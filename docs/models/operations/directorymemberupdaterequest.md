# DirectoryMemberUpdateRequest

## Example Usage

```typescript
import { DirectoryMemberUpdateRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberUpdateRequest = {
  memberId: 394864,
  directoryMemberUpdate: {
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
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `memberId`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `directoryMemberUpdate`                                                              | [components.DirectoryMemberUpdate](../../models/components/directorymemberupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |