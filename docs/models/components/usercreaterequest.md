# UserCreateRequest

Request model to create a user.

## Example Usage

```typescript
import { UserCreateRequest } from "syllable-sdk/models/components";

let value: UserCreateRequest = {
  email: "user@syllable.ai",
  firstName: "Jane",
  lastName: "Smith",
  roleId: 1,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `email`                             | *string*                            | :heavy_check_mark:                  | Email address of the user           | user@syllable.ai                    |
| `firstName`                         | *string*                            | :heavy_minus_sign:                  | First name of the user              | Jane                                |
| `lastName`                          | *string*                            | :heavy_minus_sign:                  | Last name of the user               | Smith                               |
| `roleId`                            | *number*                            | :heavy_check_mark:                  | ID of the role assigned to the user | 1                                   |