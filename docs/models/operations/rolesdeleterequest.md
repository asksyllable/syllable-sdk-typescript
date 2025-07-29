# RolesDeleteRequest

## Example Usage

```typescript
import { RolesDeleteRequest } from "syllable-sdk/models/operations";

let value: RolesDeleteRequest = {
  roleId: 906556,
  reason: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `roleId`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | The ID of the role to delete                                                                 |
| `reason`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | The reason for deleting the role                                                             |
| `newRoleId`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | Users with the deleted role will be reassigned to the new role, if a new role ID is provided |