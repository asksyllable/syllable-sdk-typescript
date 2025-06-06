# ListResponseIncidentResponse

## Example Usage

```typescript
import { ListResponseIncidentResponse } from "syllable-sdk/models/components";

let value: ListResponseIncidentResponse = {
  items: [
    {
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
      lastUpdatedBy: "user@mail.com",
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.IncidentResponse](../../models/components/incidentresponse.md)[] | :heavy_check_mark:                                                           | List of items returned from the query                                        |                                                                              |
| `page`                                                                       | *number*                                                                     | :heavy_check_mark:                                                           | The page number of the results (0-based)                                     | 0                                                                            |
| `pageSize`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | The number of items returned per page                                        | 25                                                                           |
| `totalPages`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | The total number of pages of results given the indicated page size           | 4                                                                            |
| `totalCount`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | The total number of items returned from the query                            | 100                                                                          |