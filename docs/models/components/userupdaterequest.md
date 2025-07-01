# UserUpdateRequest

Request model to update an existing user.

## Example Usage

```typescript
import { UserUpdateRequest } from "syllable-sdk/models/components";

let value: UserUpdateRequest = {
  email: "user@syllable.ai",
  firstName: "Jane",
  lastName: "Smith",
  roleId: 1,
  lastUpdatedComments: "Updated to change which role was assigned",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `email`                                        | *string*                                       | :heavy_check_mark:                             | Email address of the user                      | user@syllable.ai                               |
| `firstName`                                    | *string*                                       | :heavy_minus_sign:                             | First name of the user                         | Jane                                           |
| `lastName`                                     | *string*                                       | :heavy_minus_sign:                             | Last name of the user                          | Smith                                          |
| `roleId`                                       | *number*                                       | :heavy_check_mark:                             | ID of the role assigned to the user            | 1                                              |
| `lastUpdatedComments`                          | *string*                                       | :heavy_minus_sign:                             | Comments for the most recent edit to the user. | Updated to change which role was assigned      |