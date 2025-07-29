# SessionLabel

Response model for session label operations.
A session label is associated with a given session and contains an evaluation of quality and
descriptions of issues the user encountered in that session or other details.

## Example Usage

```typescript
import { SessionLabel } from "syllable-sdk/models/components";

let value: SessionLabel = {
  sessionId: 1,
  type: "human-rating",
  code: "N/A",
  userEmail: "user@email.com",
  issueCategories: [
    "Silent treatment",
  ],
  id: 1,
  timestamp: "2024-01-01T12:00:00Z",
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
| `id`                                                                                        | *number*                                                                                    | :heavy_check_mark:                                                                          | The internal ID of the label                                                                | 1                                                                                           |
| `timestamp`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | The timestamp at which the label was created                                                | 2024-01-01T12:00:00Z                                                                        |