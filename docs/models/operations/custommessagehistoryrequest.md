# CustomMessageHistoryRequest

## Example Usage

```typescript
import { CustomMessageHistoryRequest } from "syllable-sdk/models/operations";

let value: CustomMessageHistoryRequest = {
  customMessageId: 419420,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `customMessageId`                                                             | *number*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `page`                                                                        | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `orderByDirection`                                                            | [components.OrderByDirection](../../models/components/orderbydirection.md)    | :heavy_minus_sign:                                                            | The direction in which to order list results, either ascending or descending. |