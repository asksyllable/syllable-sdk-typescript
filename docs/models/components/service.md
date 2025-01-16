# Service

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
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the service                       |
| `description`                                 | *string*                                      | :heavy_check_mark:                            | The description of the service                |
| `id`                                          | *number*                                      | :heavy_check_mark:                            | The ID of the service                         |
| `tools`                                       | *string*[]                                    | :heavy_check_mark:                            | Names of the tools that belong to the service |