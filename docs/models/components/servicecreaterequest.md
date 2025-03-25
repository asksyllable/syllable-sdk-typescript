# ServiceCreateRequest

Request model to create a service.

## Example Usage

```typescript
import { ServiceCreateRequest } from "syllable-sdk/models/components";

let value: ServiceCreateRequest = {
  name: "Weather tools",
  description: "Service containing tools for fetching weather information",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | The name of the service                                   | Weather tools                                             |
| `description`                                             | *string*                                                  | :heavy_check_mark:                                        | The description of the service                            | Service containing tools for fetching weather information |