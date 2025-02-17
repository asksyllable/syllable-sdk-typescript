# ServiceUpdateRequest

## Example Usage

```typescript
import { ServiceUpdateRequest } from "syllable-sdk/models/components";

let value: ServiceUpdateRequest = {
  name: "<value>",
  description: "redact zowie instead gah vision um sneaky never hmph though",
  id: 862063,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the service        |
| `description`                  | *string*                       | :heavy_check_mark:             | The description of the service |
| `id`                           | *number*                       | :heavy_check_mark:             | The ID of the service          |
| `lastUpdatedComments`          | *string*                       | :heavy_minus_sign:             | Update comments                |