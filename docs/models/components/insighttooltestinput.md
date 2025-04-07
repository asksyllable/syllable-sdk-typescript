# InsightToolTestInput

Request model to test an insight tool.

## Example Usage

```typescript
import { InsightToolTestInput } from "syllable-sdk/models/components";

let value: InsightToolTestInput = {
  toolName: "summary-tool",
  sessionId: 283467,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `toolName`                                            | *string*                                              | :heavy_check_mark:                                    | Human readable name of insight tool                   | summary-tool                                          |
| `sessionId`                                           | *number*                                              | :heavy_check_mark:                                    | The session ID of the session to run the tool against | 283467                                                |