# Service

## Example Usage

```typescript
import { Service } from "syllable-sdk/models/components";

let value: Service = {
  name: "<value>",
  description: "aside however aha roundabout",
  id: 748664,
  tools: [
    "<value>",
  ],
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | TRUE             | The name of the service        |
| `description`                  | *string*                       | TRUE             | The description of the service |
| `id`                           | *number*                       | TRUE             | The ID of the service          |
| `tools`                        | *string*[]                     | TRUE             | The tools of the service       |