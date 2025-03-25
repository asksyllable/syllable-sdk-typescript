# ToolResultData

## Example Usage

```typescript
import { ToolResultData } from "syllable-sdk/models/components";

let value: ToolResultData = {
  toolName: "general_information_web",
  toolResult: {
    "answer":
      "Syllable is a platform for building and managing AI voice agents...",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `toolName`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | Tool name                                                                           | general_information_web                                                             |
| `toolResult`                                                                        | *any*                                                                               | :heavy_check_mark:                                                                  | Tool result data                                                                    | {<br/>"answer": "Syllable is a platform for building and managing AI voice agents..."<br/>} |