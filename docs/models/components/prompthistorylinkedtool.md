# PromptHistoryLinkedTool

Record of a tool linked to a previous prompt version in the prompt history.

## Example Usage

```typescript
import { PromptHistoryLinkedTool } from "syllable-sdk/models/components";

let value: PromptHistoryLinkedTool = {
  toolId: 1,
  currentToolName: "hangup",
  outOfDate: false,
  deleted: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `toolId`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the tool                                                                                               | 1                                                                                                            |
| `currentToolName`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Current name of the tool (may have been different at the time the given version of the prompt was created)   | hangup                                                                                                       |
| `outOfDate`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the tool has changed (not including being deleted) since the given version of the prompt was created | false                                                                                                        |
| `deleted`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the tool has been deleted since the given version of the prompt was created                          | false                                                                                                        |