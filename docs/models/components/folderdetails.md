# FolderDetails

Response model for an insight upload folder details.

## Example Usage

```typescript
import { FolderDetails } from "syllable-sdk/models/components";

let value: FolderDetails = {
  name: "customer-complaints",
  label: "support",
  description: "Call recordings related to customer complaints",
  id: 182764,
  createdAt: new Date("2025-05-03T00:00:00Z"),
  updatedAt: new Date("2025-05-04T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
  folderStats: {
    "count": 10,
    "total_duration": "10:00:00",
    "total_size": "213MB",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of insight folder                                                         | customer-complaints                                                                           |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | optional label assigned to insight folder                                                     | support                                                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Text description of insight upload folder                                                     | Call recordings related to customer complaints                                                |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | System-assign folder ID                                                                       | 182764                                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which insight upload folder was created                                          | 2025-05-03T00:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which insight upload folder was last updated                                     | 2025-05-04T00:00:00Z                                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Email of user who last updated upload folder                                                  | user@email.com                                                                                |
| `folderStats`                                                                                 | Record<string, *components.FolderStats*>                                                      | :heavy_check_mark:                                                                            | Meta-data of insight upload files associated with the folder                                  | {<br/>"count": 10,<br/>"total_duration": "10:00:00",<br/>"total_size": "213MB"<br/>}          |