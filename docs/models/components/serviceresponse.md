# ServiceResponse

Response model for service operations. A service is a collection of tools.

## Example Usage

```typescript
import { ServiceResponse } from "syllable-sdk/models/components";

let value: ServiceResponse = {
  id: 1,
  name: "Weather tools",
  description: "Service containing tools for fetching weather information",
  authType: "basic",
  authValueKeys: [
    "username",
    "password",
  ],
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
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The internal ID of the service                                                                | 1                                                                                             |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the service                                                                       | Weather tools                                                                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the service                                                                | Service containing tools for fetching weather information                                     |
| `authType`                                                                                    | [components.ToolAuthType](../../models/components/toolauthtype.md)                            | :heavy_minus_sign:                                                                            | The type of authentication to use for the service's tools                                     | basic                                                                                         |
| `authValueKeys`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Auth value keys (values omitted for security)                                                 | [<br/>"username",<br/>"password"<br/>]                                                        |
| `lastUpdatedComments`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Free text providing comment about what was updated                                            | Updated description to correct typo                                                           |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the most recent update to the service                                        | 2024-01-01T12:00:00Z                                                                          |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The email of the user who last updated the service                                            | user@email.com                                                                                |
| `tools`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Names of tools that belong to the service                                                     | [<br/>"hangup",<br/>"summary"<br/>]                                                           |