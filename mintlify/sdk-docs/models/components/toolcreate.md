---
title: 'ToolCreate'
---

## Example Usage

```typescript
import { ToolCreate } from "syllable-sdk/models/components";

let value: ToolCreate = {
  name: "<value>",
  serviceId: 724168,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | TRUE                                                                 | The name of the tool                                                               |
| `definition`                                                                       | [components.ToolCreateDefinition](/sdk-docs/models/components/toolcreatedefinition) | FALSE                                                                 | The definition of the tool                                                         |
| `serviceId`                                                                        | *number*                                                                           | TRUE                                                                 | The service this tool belongs to                                                   |