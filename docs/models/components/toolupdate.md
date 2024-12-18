# ToolUpdate

## Example Usage

```typescript
import { ToolUpdate } from "syllable-sdk/models/components";

let value: ToolUpdate = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description:
          "however ultimately boo ham gift harmful down cross-contamination before enrage",
        parameters: {},
      },
    },
  },
  serviceId: 715053,
  id: 418109,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the tool                                                         |
| `definition`                                                                 | [components.SDKToolDefinition](../../models/components/sdktooldefinition.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `serviceId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | The service this tool belongs to                                             |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | The ID of the tool                                                           |