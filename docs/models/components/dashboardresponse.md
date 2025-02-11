# DashboardResponse

Basic information about a dashboard with a description.

## Example Usage

```typescript
import { DashboardResponse } from "syllable-sdk/models/components";

let value: DashboardResponse = {
  name: "<value>",
  displayName: "Darlene55",
  rank: 418637,
  label: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | :heavy_check_mark:                              | Name of the dashboard                           |
| `displayName`                                   | *string*                                        | :heavy_check_mark:                              | Display name of the dashboard                   |
| `rank`                                          | *number*                                        | :heavy_check_mark:                              | Dashboard importance, 0 is the highest          |
| `label`                                         | *string*                                        | :heavy_check_mark:                              | Dashboard label.  Typically report or dashboard |