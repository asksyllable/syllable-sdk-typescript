# SessionLabelCreate

## Example Usage

```typescript
import { SessionLabelCreate } from "syllable-sdk/models/components";

let value: SessionLabelCreate = {
  sessionId: 1,
  type: "human-rating",
  code: "OK",
  userEmail: "user@email.com",
  issueCategories: [
    "Speech transcription (STT)",
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                 | *number*                                                                                    | :heavy_check_mark:                                                                          | The internal ID of the session (see Session.session_id)                                     | 1                                                                                           |
| `type`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | The type of the label (either "auto-rating" or "human-rating")                              | auto-rating                                                                                 |
| `code`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | A code describing the quality of the labeled session (either "GOOD", "OK", "BAD", or "N/A") | GOOD                                                                                        |
| `userEmail`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | The email of the user who created the label                                                 | user@email.com                                                                              |
| `comments`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Comment string describing additional details about the session                              |                                                                                             |
| `issueCategories`                                                                           | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Descriptions of issues occurring in the labeled call                                        | [<br/>"Silent treatment"<br/>]                                                              |