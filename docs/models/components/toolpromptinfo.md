# ToolPromptInfo

Information about a prompt linked to a tool.

## Example Usage

```typescript
import { ToolPromptInfo } from "syllable-sdk/models/components";

let value: ToolPromptInfo = {
  id: 1,
  name: "Test Prompt",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *number*               | :heavy_check_mark:     | The ID of the prompt   | 1                      |
| `name`                 | *string*               | :heavy_check_mark:     | The name of the prompt | Test Prompt            |