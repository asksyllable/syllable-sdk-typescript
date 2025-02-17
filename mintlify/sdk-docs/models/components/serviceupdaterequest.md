---
title: 'ServiceUpdateRequest'
---

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
| `name`                         | *string*                       | TRUE             | The name of the service        |
| `description`                  | *string*                       | TRUE             | The description of the service |
| `id`                           | *number*                       | TRUE             | The ID of the service          |
| `lastUpdatedComments`          | *string*                       | FALSE             | Update comments                |