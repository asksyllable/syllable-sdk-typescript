# Two

## Example Usage

```typescript
import { Two } from "syllable-sdk/models/errors";

let value: Two = {
  code: "legacy_session_link",
  sessionId: "<id>",
  redirectTo: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `code`                                     | [errors.Code](../../models/errors/code.md) | :heavy_check_mark:                         | Identifies a legacy session link           |
| `sessionId`                                | *string*                                   | :heavy_check_mark:                         | The requested transcript ID                |
| `redirectTo`                               | *string*                                   | :heavy_check_mark:                         | The transcript path to open                |
| `message`                                  | *string*                                   | :heavy_check_mark:                         | Why this request was rejected              |