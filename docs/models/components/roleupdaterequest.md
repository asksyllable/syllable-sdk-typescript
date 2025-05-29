# RoleUpdateRequest

Request model to update an existing role.

## Example Usage

```typescript
import { RoleUpdateRequest } from "syllable-sdk/models/components";

let value: RoleUpdateRequest = {
  name: "prompt_engineer",
  description: "Role for users who can fetch and change prompts",
  permissions: [
    "prompts_read",
    "prompts_write",
    "prompts_delete",
  ],
  id: 1,
  lastUpdatedComments: "Updated to add delete permission",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the role.                                                                                       | prompt_engineer                                                                                             |
| `description`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The description of the role.                                                                                | Role for users who can fetch and change prompts                                                             |
| `permissions`                                                                                               | *string*[]                                                                                                  | :heavy_check_mark:                                                                                          | The permissions associated with the role. Available permissions can be found by calling `GET /permissions`. | [<br/>"prompts_read",<br/>"prompts_write",<br/>"prompts_delete"<br/>]                                       |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The internal ID of the role.                                                                                | 1                                                                                                           |
| `lastUpdatedComments`                                                                                       | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Comments for the most recent edit to the role.                                                              | Updated to add delete permission                                                                            |