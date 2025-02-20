# SessionLabelCreate

## Example Usage

```typescript
import { SessionLabelCreate } from "syllable-sdk/models/components";

let value: SessionLabelCreate = {
  sessionId: 634786,
  type: "human-rating",
  code: "GOOD",
  userEmail: "<value>",
  issueCategories: [
    "Speech transcription (STT)",
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `sessionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | The internal ID of the session (see Session.session_id)        |                                                                |
| `type`                                                         | *string*                                                       | :heavy_check_mark:                                             | The type of the label                                          | auto-rating                                                    |
| `code`                                                         | *string*                                                       | :heavy_check_mark:                                             | A code describing the quality of the labeled session           | GOOD                                                           |
| `userEmail`                                                    | *string*                                                       | :heavy_check_mark:                                             | The email of the user who created the label                    |                                                                |
| `comments`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Comment string describing additional details about the session |                                                                |
| `issueCategories`                                              | *string*[]                                                     | :heavy_minus_sign:                                             | Descriptions of issues occurring in the labeled call           | [<br/>"Silent treatment"<br/>]                                 |