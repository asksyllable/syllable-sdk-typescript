# DashboardResponse

Basic information about a dashboard with a description.

## Example Usage

```typescript
import { DashboardResponse } from "syllable-sdk/models/components";

let value: DashboardResponse = {
  name: "session_summary",
  displayName: "Session Summary",
  rank: 0,
  label: "dashboard",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the dashboard                              | session_summary                                    |
| `displayName`                                      | *string*                                           | :heavy_check_mark:                                 | Display name of the dashboard                      | Session Summary                                    |
| `rank`                                             | *number*                                           | :heavy_check_mark:                                 | Dashboard importance (0 is the highest)            | 0                                                  |
| `label`                                            | *string*                                           | :heavy_check_mark:                                 | Dashboard label. Typically "report" or "dashboard" | dashboard                                          |