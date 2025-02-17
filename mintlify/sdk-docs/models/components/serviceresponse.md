---
title: 'ServiceResponse'
---

A service is a collection of tools.

## Example Usage

```typescript
import { ServiceResponse } from "syllable-sdk/models/components";

let value: ServiceResponse = {
  name: "<value>",
  description: "decide seemingly almost recount venture bus",
  id: 442036,
  lastUpdated: new Date("2024-07-23T20:49:38.139Z"),
  lastUpdatedBy: "<value>",
  tools: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | The name of the service                                                                       |
| `description`                                                                                 | *string*                                                                                      | TRUE                                                                            | The description of the service                                                                |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | The ID of the service                                                                         |
| `lastUpdatedComments`                                                                         | *string*                                                                                      | FALSE                                                                            | Update comments                                                                               |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | The timestamp of the most recent update to the service                                        |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | The email of the user who last updated the service                                            |
| `tools`                                                                                       | *string*[]                                                                                    | TRUE                                                                            | Names of tools that belong to the service                                                     |