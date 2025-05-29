# PermissionResponse

Information about a permission.

## Example Usage

```typescript
import { PermissionResponse } from "syllable-sdk/models/components";

let value: PermissionResponse = {
  name: "agents_read",
  description: "Fetch agent information",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `name`                        | *string*                      | :heavy_check_mark:            | Name of the permission        | agents_read                   |
| `description`                 | *string*                      | :heavy_check_mark:            | Description of the permission | Fetch agent information       |