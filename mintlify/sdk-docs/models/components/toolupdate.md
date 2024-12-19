---
title: 'ToolUpdate'
---

## Example Usage

```typescript
import { ToolUpdate } from "syllable-sdk/models/components";

let value: ToolUpdate = {
  name: "<value>",
  serviceId: 399025,
  id: 904045,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | TRUE                                                                 | The name of the tool                                                               |
| `definition`                                                                       | [components.ToolUpdateDefinition](/sdk-docs/models/components/toolupdatedefinition) | FALSE                                                                 | The definition of the tool                                                         |
| `serviceId`                                                                        | *number*                                                                           | TRUE                                                                 | The service this tool belongs to                                                   |
| `id`                                                                               | *number*                                                                           | TRUE                                                                 | The ID of the tool                                                                 |