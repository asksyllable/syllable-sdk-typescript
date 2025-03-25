# DashboardTokenResponse

Basic information about a dashboard.

## Example Usage

```typescript
import { DashboardTokenResponse } from "syllable-sdk/models/components";

let value: DashboardTokenResponse = {
  embeddedId: "976ef486-d1ea-49c7-ba81-18e955d80286",
  guestToken: "some-guest-token",
  name: "session_summary",
  displayName: "Session Summary",
  supersetUrl: "https://somesuperseturl.com",
  rank: 0,
  label: "dashboard",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `embeddedId`                                       | *string*                                           | :heavy_check_mark:                                 | Superset embedded ID of the dashboard              | 976ef486-d1ea-49c7-ba81-18e955d80286               |
| `guestToken`                                       | *string*                                           | :heavy_check_mark:                                 | Superset guest token of the dashboard              | some-guest-token                                   |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the dashboard                              | session_summary                                    |
| `displayName`                                      | *string*                                           | :heavy_check_mark:                                 | Display name of the dashboard                      | Session Summary                                    |
| `supersetUrl`                                      | *string*                                           | :heavy_check_mark:                                 | Base Superset URL of the dashboard                 | https://somesuperseturl.com                        |
| `rank`                                             | *number*                                           | :heavy_check_mark:                                 | Dashboard importance (0 is the highest)            | 0                                                  |
| `label`                                            | *string*                                           | :heavy_check_mark:                                 | Dashboard label. Typically "report" or "dashboard" | dashboard                                          |