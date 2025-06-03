# UserDeleteRequest

Request model to delete a user.

## Example Usage

```typescript
import { UserDeleteRequest } from "syllable-sdk/models/components";

let value: UserDeleteRequest = {
  email: "user@email.com",
  reason: "User left the organization",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `email`                                 | *string*                                | :heavy_check_mark:                      | The email address of the user to delete | user@email.com                          |
| `reason`                                | *string*                                | :heavy_check_mark:                      | The reason for deleting the user        | User left the organization              |