# Dashboard

Deprecated.  Please update to use DashboardTokenResponse.
Basic information about a dashboard.

## Example Usage

```typescript
import { Dashboard } from "syllable-sdk/models/components";

let value: Dashboard = {
  embeddedId: "<id>",
  guestToken: "<value>",
  name: "<value>",
  supersetUrl: "https://outrageous-agreement.net/",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `embeddedId`                          | *string*                              | :heavy_check_mark:                    | Superset embedded ID of the dashboard |
| `guestToken`                          | *string*                              | :heavy_check_mark:                    | Superset guest token of the dashboard |
| `name`                                | *string*                              | :heavy_check_mark:                    | Name of the dashboard                 |
| `supersetUrl`                         | *string*                              | :heavy_check_mark:                    | Superset URL of the dashboard         |