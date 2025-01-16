---
title: 'Service'
---

A service is a collection of tools.

## Example Usage

```typescript
import { Service } from "syllable-sdk/models/components";

let value: Service = {
  name: "<value>",
  description:
    "marketplace gazebo atop per about holster minority eek where kindly",
  id: 623295,
  tools: [
    "<value>",
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `name`                                        | *string*                                      | TRUE                            | The name of the service                       |
| `description`                                 | *string*                                      | TRUE                            | The description of the service                |
| `id`                                          | *number*                                      | TRUE                            | The ID of the service                         |
| `tools`                                       | *string*[]                                    | TRUE                            | Names of the tools that belong to the service |