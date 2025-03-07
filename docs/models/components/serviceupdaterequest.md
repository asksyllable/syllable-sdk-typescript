# ServiceUpdateRequest

## Example Usage

```typescript
import { ServiceUpdateRequest } from "syllable-sdk/models/components";

let value: ServiceUpdateRequest = {
  name: "<value>",
  description: "as about quietly for graceful grouper at bah poorly",
  id: 435531,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the service        |
| `description`                  | *string*                       | :heavy_check_mark:             | The description of the service |
| `id`                           | *number*                       | :heavy_check_mark:             | The ID of the service          |
| `lastUpdatedComments`          | *string*                       | :heavy_minus_sign:             | Update comments                |