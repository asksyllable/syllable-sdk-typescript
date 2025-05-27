# PermissionResponse

Information about a permission.

## Example Usage

```typescript
import { PermissionResponse } from "syllable-sdk/models/components";

let value: PermissionResponse = {
  name: "sa_incidents_delete",
  description: "Fetch agent information",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | [components.Permissions](../../models/components/permissions.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | Description of the permission                                    | Fetch agent information                                          |