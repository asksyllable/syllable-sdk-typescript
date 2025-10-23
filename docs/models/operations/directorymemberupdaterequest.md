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
          {},
        ],
      },
    ],
    id: 1,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `memberId`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `directoryMember`                                                        | [components.DirectoryMember](../../models/components/directorymember.md) | :heavy_check_mark:                                                       | N/A                                                                      |