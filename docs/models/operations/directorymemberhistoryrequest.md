# DirectoryMemberHistoryRequest

## Example Usage

```typescript
import { DirectoryMemberHistoryRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberHistoryRequest = {
  memberId: 456851,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `memberId`            | *number*              | :heavy_check_mark:    | N/A                   |
| `page`                | *number*              | :heavy_minus_sign:    | Page number (0-based) |
| `limit`               | *number*              | :heavy_minus_sign:    | Items per page        |