# SessionLabelCreate

## Example Usage

```typescript
import { SessionLabelCreate } from "syllable-sdk/models/components";

let value: SessionLabelCreate = {
  sessionId: 1,
  type: "auto-rating",
  code: "GOOD",
  userEmail: "user@email.com",
  issueCategories: [
    "Silent treatment",
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                 | *number*                                                                                    | :heavy_check_mark:                                                                          | The internal ID of the session (see Session.session_id)                                     | 1                                                                                           |
| `type`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | The type of the label (either "auto-rating" or "human-rating")                              | **Example 1:** auto-rating<br/>**Example 2:** human-rating                                  |
| `code`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | A code describing the quality of the labeled session (either "GOOD", "OK", "BAD", or "N/A") | **Example 1:** GOOD<br/>**Example 2:** OK<br/>**Example 3:** BAD<br/>**Example 4:** N/A     |
| `userEmail`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | The email of the user who created the label                                                 | user@email.com                                                                              |
| `comments`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Comment string describing additional details about the session                              |                                                                                             |
| `issueCategories`                                                                           | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Descriptions of issues occurring in the labeled call                                        | **Example 1:** [<br/>"Silent treatment"<br/>]<br/>**Example 2:** [<br/>"Speech transcription (STT)"<br/>] |