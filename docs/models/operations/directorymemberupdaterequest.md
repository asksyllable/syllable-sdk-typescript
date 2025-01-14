# DirectoryMemberUpdateRequest

## Example Usage

```typescript
import { DirectoryMemberUpdateRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberUpdateRequest = {
  memberId: 349993,
  directoryMember: {
    name: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `memberId`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `directoryMember`                                                        | [components.DirectoryMember](../../models/components/directorymember.md) | :heavy_check_mark:                                                       | N/A                                                                      |