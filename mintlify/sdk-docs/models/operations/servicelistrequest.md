# ServiceListRequest

## Example Usage

```typescript
import { ServiceListRequest } from "syllable-sdk/models/operations";

let value: ServiceListRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `page`                                                                         | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `searchFields`                                                                 | [components.ServiceProperties](/sdk-docs/models/components/serviceproperties)[] | FALSE                                                             | N/A                                                                            |
| `searchFieldValues`                                                            | *string*[]                                                                     | FALSE                                                             | N/A                                                                            |
| `orderBy`                                                                      | [components.ServiceProperties](/sdk-docs/models/components/serviceproperties)   | FALSE                                                             | N/A                                                                            |
| `orderByDirection`                                                             | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)     | FALSE                                                             | N/A                                                                            |
| `fields`                                                                       | [components.ServiceProperties](/sdk-docs/models/components/serviceproperties)[] | FALSE                                                             | N/A                                                                            |
| `startDatetime`                                                                | *string*                                                                       | FALSE                                                             | N/A                                                                            |
| `endDatetime`                                                                  | *string*                                                                       | FALSE                                                             | N/A                                                                            |