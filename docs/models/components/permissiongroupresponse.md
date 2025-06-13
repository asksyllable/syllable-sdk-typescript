# PermissionGroupResponse

Information about a group of permissions related to the same feature.

## Example Usage

```typescript
import { PermissionGroupResponse } from "syllable-sdk/models/components";

let value: PermissionGroupResponse = {
  name: "Agents",
  description:
    "View agents, create and edit agent configurations, and delete agents.",
  permissions: [
    {
      name: "agents_read",
      displayName: "View",
      description: "Fetch agent information",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Name of the permission group                                                     | Agents                                                                           |
| `description`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Description of the permission group                                              | View agents, create and edit agent configurations, and delete agents.            |
| `permissions`                                                                    | [components.PermissionResponse](../../models/components/permissionresponse.md)[] | :heavy_check_mark:                                                               | Permissions in the group                                                         |                                                                                  |