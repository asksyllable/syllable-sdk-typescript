# Tool

## Example Usage

```typescript
import { Tool } from "syllable-sdk/models/components";

let value: Tool = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description:
          "knavishly egg keenly grave incidentally righteously gastropod ponder",
        parameters: {},
      },
    },
  },
  serviceId: 279068,
  id: 209750,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the tool                                                         |
| `definition`                                                                 | [components.SDKToolDefinition](../../models/components/sdktooldefinition.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `serviceId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | The service this tool belongs to                                             |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | The ID of the tool                                                           |
| `serviceName`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the service this tool belongs to                                 |