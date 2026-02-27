# DirectoryMemberRestoreRequest

## Example Usage

```typescript
import { DirectoryMemberRestoreRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberRestoreRequest = {
  memberId: 526249,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `memberId`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `responseFormat`                                                                         | [components.DirectoryResponseFormat](../../models/components/directoryresponseformat.md) | :heavy_minus_sign:                                                                       | Directory response format for the restored member.                                       |