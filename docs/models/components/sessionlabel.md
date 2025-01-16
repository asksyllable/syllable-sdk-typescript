# SessionLabel

A session label is associated with a given session and contains an evaluation of quality and
descriptions of issues the user encountered in that session or other details.

## Example Usage

```typescript
import { SessionLabel } from "syllable-sdk/models/components";

let value: SessionLabel = {
  sessionId: 859581,
  type: "auto-rating",
  code: "OK",
  userEmail: "<value>",
  issueCategories: [
    "Silent treatment",
  ],
  id: 457059,
  timestamp: "<value>",
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
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | The internal ID of the label                                   |                                                                |
| `timestamp`                                                    | *string*                                                       | :heavy_check_mark:                                             | The timestamp of the label creation                            |                                                                |