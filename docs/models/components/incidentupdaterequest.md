# IncidentUpdateRequest

Request model to update an existing service incident.

## Example Usage

```typescript
import { IncidentUpdateRequest } from "syllable-sdk/models/components";

let value: IncidentUpdateRequest = {
  description: "Service outage in region X",
  startDatetime: new Date("2023-10-01T08:00:00Z"),
  resolutionDatetime: new Date("2023-10-01T12:00:00Z"),
  impactCategory: "High",
  sessionsImpacted: 1500,
  markdown: "**Incident Details**",
  organizationId: 123,
  subOrganizationId: 456,
  subOrganization: "SubOrg A",
  id: 1,
  createdAt: new Date("2023-10-01T08:00:00Z"),
  updatedAt: new Date("2023-10-01T08:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Description of the service incident                                                           | Service outage in region X                                                                    |
| `startDatetime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start time of the incident                                                                    | 2023-10-01T08:00:00Z                                                                          |
| `resolutionDatetime`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Resolution time of the incident                                                               | 2023-10-01T12:00:00Z                                                                          |
| `impactCategory`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Category of the impact                                                                        | High                                                                                          |
| `sessionsImpacted`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of sessions impacted                                                                   | 1500                                                                                          |
| `markdown`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Detailed markdown description of the incident                                                 | **Incident Details**                                                                          |
| `organizationId`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the organization                                                                    | 123                                                                                           |
| `subOrganizationId`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the sub-organization                                                                | 456                                                                                           |
| `subOrganization`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the sub-organization                                                              | SubOrg A                                                                                      |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The ID of the incident to update                                                              | 1                                                                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Creation time of the incident                                                                 | 2023-10-01T08:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last update time of the incident                                                              | 2023-10-01T08:00:00Z                                                                          |