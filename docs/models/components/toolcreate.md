# ToolCreate

## Example Usage

```typescript
import { ToolCreate } from "syllable-sdk/models/components";

let value: ToolCreate = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description: "huge whoa because er factorise yearly",
        parameters: {},
      },
    },
  },
  serviceId: 376741,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the tool                                                         |
| `definition`                                                                 | [components.SDKToolDefinition](../../models/components/sdktooldefinition.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `serviceId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | The service this tool belongs to                                             |