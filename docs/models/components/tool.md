# Tool

## Example Usage

```typescript
import { Tool } from "syllable-sdk/models/components";

let value: Tool = {
  name: "<value>",
  serviceId: 97844,
  id: 862192,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the tool                                           |
| `definition`                                                   | [components.Definition](../../models/components/definition.md) | :heavy_minus_sign:                                             | The definition of the tool                                     |
| `serviceId`                                                    | *number*                                                       | :heavy_check_mark:                                             | The service this tool belongs to                               |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | The ID of the tool                                             |
| `serviceName`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The name of the service this tool belongs to                   |