# InsightToolTestInput

Request model to test an insight tool.

## Example Usage

```typescript
import { InsightToolTestInput } from "syllable-sdk/models/components";

let value: InsightToolTestInput = {
  toolName: "summary-tool",
  sessionId: 283467,
  uploadFileId: 283467,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `toolName`                                                     | *string*                                                       | :heavy_check_mark:                                             | Human readable name of insight tool configuration              | summary-tool                                                   |
| `sessionId`                                                    | *number*                                                       | :heavy_minus_sign:                                             | The session ID of the session against which to run the tool    | 283467                                                         |
| `uploadFileId`                                                 | *number*                                                       | :heavy_minus_sign:                                             | The file ID of the uploaded file against which to run the tool | 283467                                                         |