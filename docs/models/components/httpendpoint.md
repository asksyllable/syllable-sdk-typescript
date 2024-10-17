# HttpEndpoint

The configuration for an HTTP API call.

## Example Usage

```typescript
import { HttpEndpoint } from "syllable-sdk/models/components";

let value: HttpEndpoint = {
  url: "https://jam-packed-tapioca.net/",
  method: "<value>",
  argumentLocation: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `url`                                             | *string*                                          | :heavy_check_mark:                                | The endpoint URL of the external service to call. |
| `method`                                          | *string*                                          | :heavy_check_mark:                                | The HTTP method to use for the service call.      |
| `argumentLocation`                                | *string*                                          | :heavy_check_mark:                                | How to pass the arguments to the request.         |