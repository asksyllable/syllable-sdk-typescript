# DirectoryMemberDeleteRequest

## Example Usage

```typescript
import { DirectoryMemberDeleteRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberDeleteRequest = {
  memberId: 429020,
  comment:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `memberId`                                          | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `comment`                                           | *string*                                            | :heavy_check_mark:                                  | Comment stored in version history for this deletion |