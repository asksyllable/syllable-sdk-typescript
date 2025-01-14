# Service

## Example Usage

```typescript
import { Service } from "syllable-sdk/models/components";

let value: Service = {
  name: "<value>",
  description:
    "retool huzzah print known instead improbable experience authentic onset flustered",
  id: 30235,
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