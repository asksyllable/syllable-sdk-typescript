# ServiceUpdateRequest

Request model to update an existing service.

## Example Usage

```typescript
import { ServiceUpdateRequest } from "syllable-sdk/models/components";

let value: ServiceUpdateRequest = {
  name: "Weather tools",
  description: "Service containing tools for fetching weather information",
  id: 1,
  lastUpdatedComments: "Updated description to correct typo",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | The name of the service                                   | Weather tools                                             |
| `description`                                             | *string*                                                  | :heavy_check_mark:                                        | The description of the service                            | Service containing tools for fetching weather information |
| `id`                                                      | *number*                                                  | :heavy_check_mark:                                        | The internal ID of the service                            | 1                                                         |
| `lastUpdatedComments`                                     | *string*                                                  | :heavy_minus_sign:                                        | Free text providing comment about what was updated        | Updated description to correct typo                       |