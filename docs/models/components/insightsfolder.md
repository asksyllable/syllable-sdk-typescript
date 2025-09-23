# InsightsFolder

Response model for an insight upload folder.

## Example Usage

```typescript
import { InsightsFolder } from "syllable-sdk/models/components";

let value: InsightsFolder = {
  name: "customer-complaints",
  label: "support",
  description: "Call recordings related to customer complaints",
  id: 182764,
  createdAt: new Date("2025-09-22T00:00:00Z"),
  updatedAt: new Date("2025-09-23T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of insight folder                                                         | customer-complaints                                                                           |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | optional label assigned to insight folder                                                     | support                                                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Text description of insight upload folder                                                     | Call recordings related to customer complaints                                                |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | System-assign folder ID                                                                       | 182764                                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which insight upload folder was created                                          | 2025-09-22T00:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which insight upload folder was last updated                                     | 2025-09-23T00:00:00Z                                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Email of user who last updated upload folder                                                  | user@email.com                                                                                |