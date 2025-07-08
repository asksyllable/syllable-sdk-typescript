# OrganizationResponse

## Example Usage

```typescript
import { OrganizationResponse } from "syllable-sdk/models/components";

let value: OrganizationResponse = {
  displayName: "My Great Org",
  description: "An organization that does great things with agentic AI.",
  domains: "mygreatorg.com,myothergreatorg.org",
  id: 1,
  lastUpdatedComments: "Updated to add an additional domain",
  lastUpdated: new Date("2024-06-29T21:52:21.732Z"),
  logoStr: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The human-readable display name of the organization.                                              | My Great Org                                                                                      |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Description of the organization.                                                                  | An organization that does great things with agentic AI.                                           |
| `domains`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | Comma-delimited list of domains that users at the organization may have in their email addresses. | mygreatorg.com,myothergreatorg.org                                                                |
| `id`                                                                                              | *number*                                                                                          | :heavy_check_mark:                                                                                | The internal ID of the organization.                                                              | 1                                                                                                 |
| `lastUpdatedComments`                                                                             | *string*                                                                                          | :heavy_minus_sign:                                                                                | Comments for the most recent edit to the organization.                                            | Updated to add an additional domain                                                               |
| `lastUpdated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | The timestamp of the most recent update to the organization                                       |                                                                                                   |
| `lastUpdatedBy`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | The email of the user who most recently updated the organization                                  |                                                                                                   |
| `logoStr`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |