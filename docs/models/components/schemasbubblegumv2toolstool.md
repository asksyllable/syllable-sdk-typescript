# SchemasBubblegumV2ToolsTool

## Example Usage

```typescript
import { SchemasBubblegumV2ToolsTool } from "syllable-sdk/models/components";

let value: SchemasBubblegumV2ToolsTool = {
  name: "<value>",
  serviceId: 586513,
  id: 20107,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the tool                                                   |
| `definition`                                                           | [components.ToolDefinition](../../models/components/tooldefinition.md) | :heavy_minus_sign:                                                     | The definition of the tool                                             |
| `serviceId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | The service this tool belongs to                                       |
| `id`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | The ID of the tool                                                     |
| `serviceName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The name of the service this tool belongs to                           |