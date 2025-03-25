# ServiceResponse

Response model for service operations. A service is a collection of tools.

## Example Usage

```typescript
import { ServiceResponse } from "syllable-sdk/models/components";

let value: ServiceResponse = {
  name: "Weather tools",
  description: "Service containing tools for fetching weather information",
  id: 1,
  lastUpdatedComments: "Updated description to correct typo",
  lastUpdated: new Date("2024-01-01T12:00:00Z"),
  lastUpdatedBy: "user@email.com",
  tools: [
    "hangup",
    "summary",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the service                                                                       | Weather tools                                                                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the service                                                                | Service containing tools for fetching weather information                                     |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The internal ID of the service                                                                | 1                                                                                             |
| `lastUpdatedComments`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Free text providing comment about what was updated                                            | Updated description to correct typo                                                           |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the most recent update to the service                                        | 2024-01-01T12:00:00Z                                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The email of the user who last updated the service                                            | user@email.com                                                                                |
| `tools`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Names of tools that belong to the service                                                     | [<br/>"hangup",<br/>"summary"<br/>]                                                           |