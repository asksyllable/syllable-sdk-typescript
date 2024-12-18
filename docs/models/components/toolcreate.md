# ToolCreate

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
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the tool                                                               |
| `definition`                                                                       | [components.ToolCreateDefinition](../../models/components/toolcreatedefinition.md) | :heavy_minus_sign:                                                                 | The definition of the tool                                                         |
| `serviceId`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | The service this tool belongs to                                                   |