# DirectoryMemberHistoryResponse

API response for one version in a directory member's history (GET /{member_id}/history).

## Example Usage

```typescript
import { DirectoryMemberHistoryResponse } from "syllable-sdk/models/components";

let value: DirectoryMemberHistoryResponse = {
  directoryMemberId: 1,
  version: 1,
  timestamp: new Date("2024-01-01T12:00:00Z"),
  name: "Jane Doe",
  type: "Department",
  extensions: [],
  contactTags: {
    "tag1": [
      "value1",
    ],
    "tag2": [
      "value2",
    ],
  },
  userEmail: "user@email.com",
  comments: "Updated phone number",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `directoryMemberId`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | ID of the directory member                                                                    | 1                                                                                             |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | 1-based ordinal in the history list (1 = oldest)                                              | 1                                                                                             |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this version was recorded                                                                | 2024-01-01T12:00:00Z                                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name at this version                                                                          | Jane Doe                                                                                      |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Type at this version                                                                          | Department                                                                                    |
| `extensions`                                                                                  | [components.DirectoryExtension](../../models/components/directoryextension.md)[]              | :heavy_minus_sign:                                                                            | Extensions at this version                                                                    | []                                                                                            |
| `contactTags`                                                                                 | Record<string, *string*[]>                                                                    | :heavy_minus_sign:                                                                            | Contact tags at this version                                                                  | {<br/>"tag1": [<br/>"value1"<br/>],<br/>"tag2": [<br/>"value2"<br/>]<br/>}                    |
| `userEmail`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | User who made the change                                                                      | user@email.com                                                                                |
| `comments`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional comment for this version                                                             | Updated phone number                                                                          |