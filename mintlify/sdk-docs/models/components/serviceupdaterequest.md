---
title: 'ServiceUpdateRequest'
---

## Example Usage

```typescript
import { ServiceUpdateRequest } from "syllable-sdk/models/components";

let value: ServiceUpdateRequest = {
  name: "<value>",
  description: "neat topsail as readily including against within wiggly",
  id: 919783,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | TRUE             | The name of the service        |
| `description`                  | *string*                       | TRUE             | The description of the service |
| `id`                           | *number*                       | TRUE             | The ID of the service          |
| `lastUpdatedComments`          | *string*                       | FALSE             | Update comments                |