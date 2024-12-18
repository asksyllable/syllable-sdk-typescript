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
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the service        |
| `description`                  | *string*                       | :heavy_check_mark:             | The description of the service |
| `id`                           | *number*                       | :heavy_check_mark:             | The ID of the service          |
| `tools`                        | *string*[]                     | :heavy_check_mark:             | The tools of the service       |