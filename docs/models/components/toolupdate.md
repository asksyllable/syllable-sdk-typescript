# ToolUpdate

## Example Usage

```typescript
import { ToolUpdate } from "syllable-sdk/models/components";

let value: ToolUpdate = {
  name: "<value>",
  serviceId: 906556,
  id: 774048,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the tool                                                               |
| `definition`                                                                       | [components.ToolUpdateDefinition](../../models/components/toolupdatedefinition.md) | :heavy_minus_sign:                                                                 | The definition of the tool                                                         |
| `serviceId`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | The service this tool belongs to                                                   |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | The ID of the tool                                                                 |