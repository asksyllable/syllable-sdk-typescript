# ServiceIncidentRequest

## Example Usage

```typescript
import { ServiceIncidentRequest } from "syllable-sdk/models/components";

let value: ServiceIncidentRequest = {
  organizationId: 807319,
  subOrganizationId: 569101,
  subOrganization: "<value>",
  description: "splosh around apologise lest ick yum",
  startDatetime: new Date("2025-02-02T04:37:08.867Z"),
  resolutionDatetime: new Date("2024-02-19T00:23:03.771Z"),
  impactCategory: "<value>",
  sessionsImpacted: 179603,
  markdown: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `organizationId`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subOrganizationId`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subOrganization`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDatetime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resolutionDatetime`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `impactCategory`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sessionsImpacted`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `markdown`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |