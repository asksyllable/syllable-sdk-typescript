# RoleResponse

Information about a role.

## Example Usage

```typescript
import { RoleResponse } from "syllable-sdk/models/components";

let value: RoleResponse = {
  name: "Prompt Engineer",
  description: "Role for users who can fetch and change prompts",
  permissions: [
    "prompts_read",
    "prompts_write",
    "prompts_delete",
  ],
  id: 1,
  lastUpdatedComments: "Updated to add delete permission",
  isSystemRole: false,
  lastUpdated: new Date("2024-04-17T20:01:49.892Z"),
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the role.                                                                                       | Prompt Engineer                                                                                             |
| `description`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The description of the role.                                                                                | Role for users who can fetch and change prompts                                                             |
| `permissions`                                                                                               | *string*[]                                                                                                  | :heavy_check_mark:                                                                                          | The permissions associated with the role. Available permissions can be found by calling `GET /permissions`. | [<br/>"prompts_read",<br/>"prompts_write",<br/>"prompts_delete"<br/>]                                       |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The internal ID of the role.                                                                                | 1                                                                                                           |
| `lastUpdatedComments`                                                                                       | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Comments for the most recent edit to the role.                                                              | Updated to add delete permission                                                                            |
| `isSystemRole`                                                                                              | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether this is a built-in system role that cannot be updated or deleted                                    | false                                                                                                       |
| `lastUpdated`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | The timestamp of the most recent update to the role                                                         |                                                                                                             |
| `lastUpdatedBy`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The email of the user who last updated the role                                                             | user@email.com                                                                                              |