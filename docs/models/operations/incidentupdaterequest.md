# IncidentUpdateRequest

## Example Usage

```typescript
import { IncidentUpdateRequest } from "syllable-sdk/models/operations";

let value: IncidentUpdateRequest = {
  incidentId: 189848,
  serviceIncidentRequest: {
    organizationId: 511319,
    subOrganizationId: 224317,
    subOrganization: "<value>",
    description: "briskly sans observe",
    startDatetime: new Date("2025-08-01T03:56:17.075Z"),
    resolutionDatetime: new Date("2025-03-07T20:10:20.231Z"),
    impactCategory: "<value>",
    sessionsImpacted: 270328,
    markdown: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `incidentId`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `serviceIncidentRequest`                                                               | [components.ServiceIncidentRequest](../../models/components/serviceincidentrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |