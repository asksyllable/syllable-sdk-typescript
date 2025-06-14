# PermissionResponse

Information about a permission.

## Example Usage

```typescript
import { PermissionResponse } from "syllable-sdk/models/components";

let value: PermissionResponse = {
  name: "agents_read",
  displayName: "View",
  description: "Fetch agent information",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | Name of the permission         | agents_read                    |
| `displayName`                  | *string*                       | :heavy_check_mark:             | Display name of the permission | View                           |
| `description`                  | *string*                       | :heavy_minus_sign:             | Description of the permission  | Fetch agent information        |