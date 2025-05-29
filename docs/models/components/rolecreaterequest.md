# RoleCreateRequest

Request model to create a role.

## Example Usage

```typescript
import { RoleCreateRequest } from "syllable-sdk/models/components";

let value: RoleCreateRequest = {
  name: "prompt_engineer",
  description: "Role for users who can fetch and change prompts",
  permissions: [
    "prompts_read",
    "prompts_write",
    "prompts_delete",
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the role.                                                                                       | prompt_engineer                                                                                             |
| `description`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The description of the role.                                                                                | Role for users who can fetch and change prompts                                                             |
| `permissions`                                                                                               | *string*[]                                                                                                  | :heavy_check_mark:                                                                                          | The permissions associated with the role. Available permissions can be found by calling `GET /permissions`. | [<br/>"prompts_read",<br/>"prompts_write",<br/>"prompts_delete"<br/>]                                       |