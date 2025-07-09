# UserResponse

Information about a user.

## Example Usage

```typescript
import { UserResponse } from "syllable-sdk/models/components";

let value: UserResponse = {
  email: "user@syllable.ai",
  firstName: "Jane",
  lastName: "Smith",
  roleId: 1,
  lastUpdatedComments: "Updated to change which role was assigned",
  id: 1,
  roleName: "Admin",
  emailSent: true,
  activityStatus: "invited",
  lastUpdated: new Date("2024-09-11T16:50:31.874Z"),
  lastUpdatedBy: "admin@email.com",
  lastSessionAt: new Date("2025-01-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the user                                                                     | user@syllable.ai                                                                              |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | First name of the user                                                                        | Jane                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Last name of the user                                                                         | Smith                                                                                         |
| `roleId`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | ID of the role assigned to the user                                                           | 1                                                                                             |
| `lastUpdatedComments`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Comments for the most recent edit to the user.                                                | Updated to change which role was assigned                                                     |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | Internal ID of the user                                                                       | 1                                                                                             |
| `roleName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the role assigned to the user                                                         | Admin                                                                                         |
| `emailSent`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the welcome email has been sent to the user                                           | true                                                                                          |
| `activityStatus`                                                                              | [components.UserActivityStatus](../../models/components/useractivitystatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the most recent update to the user                                           |                                                                                               |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The email address of the user who last updated the user                                       | admin@email.com                                                                               |
| `lastSessionAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp of the user's last session                                                      | 2025-01-01T12:00:00Z                                                                          |