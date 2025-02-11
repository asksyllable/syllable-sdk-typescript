# ToolUpdateRequest

## Example Usage

```typescript
import { ToolUpdateRequest } from "syllable-sdk/models/components";

let value: ToolUpdateRequest = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description: "before substantiate mosh noted abaft",
        parameters: "<value>",
      },
    },
  },
  serviceId: 322829,
  id: 229567,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the tool                                                   |
| `definition`                                                           | [components.ToolDefinition](../../models/components/tooldefinition.md) | :heavy_check_mark:                                                     | A tool that can be called from an LLM during the conversation.         |
| `serviceId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | The service this tool belongs to                                       |
| `id`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | The ID of the tool                                                     |
| `lastUpdatedComments`                                                  | *string*                                                               | :heavy_minus_sign:                                                     | Update comments                                                        |