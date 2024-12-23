---
title: 'SessionLabelCreate'
---

## Example Usage

```typescript
import { SessionLabelCreate } from "syllable-sdk/models/components";

let value: SessionLabelCreate = {
  sessionId: 815524,
  type: "<value>",
  code: "<value>",
  userEmail: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `sessionId`        | *number*           | TRUE | N/A                |
| `type`             | *string*           | TRUE | N/A                |
| `code`             | *string*           | TRUE | N/A                |
| `userEmail`        | *string*           | TRUE | N/A                |
| `comments`         | *string*           | FALSE | N/A                |
| `issueCategories`  | *string*[]         | FALSE | N/A                |