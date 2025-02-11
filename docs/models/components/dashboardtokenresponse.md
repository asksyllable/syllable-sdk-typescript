# DashboardTokenResponse

Basic information about a dashboard.

## Example Usage

```typescript
import { DashboardTokenResponse } from "syllable-sdk/models/components";

let value: DashboardTokenResponse = {
  embeddedId: "<id>",
  guestToken: "<value>",
  name: "<value>",
  displayName: "Aditya96",
  supersetUrl: "https://abandoned-tuxedo.biz/",
  rank: 185897,
  label: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `embeddedId`                                    | *string*                                        | :heavy_check_mark:                              | Superset embedded ID of the dashboard           |
| `guestToken`                                    | *string*                                        | :heavy_check_mark:                              | Superset guest token of the dashboard           |
| `name`                                          | *string*                                        | :heavy_check_mark:                              | Name of the dashboard                           |
| `displayName`                                   | *string*                                        | :heavy_check_mark:                              | Display name of the dashboard                   |
| `supersetUrl`                                   | *string*                                        | :heavy_check_mark:                              | Superset URL of the dashboard                   |
| `rank`                                          | *number*                                        | :heavy_check_mark:                              | Dashboard importance, 0 is the highest          |
| `label`                                         | *string*                                        | :heavy_check_mark:                              | Dashboard label.  Typically report or dashboard |