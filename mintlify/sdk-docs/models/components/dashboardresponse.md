---
title: 'DashboardResponse'
---

Basic information about a dashboard with a description.

## Example Usage

```typescript
import { DashboardResponse } from "syllable-sdk/models/components";

let value: DashboardResponse = {
  name: "<value>",
  displayName: "Nicola1",
  rank: 615058,
  label: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | TRUE                              | Name of the dashboard                           |
| `displayName`                                   | *string*                                        | TRUE                              | Display name of the dashboard                   |
| `rank`                                          | *number*                                        | TRUE                              | Dashboard importance, 0 is the highest          |
| `label`                                         | *string*                                        | TRUE                              | Dashboard label.  Typically report or dashboard |