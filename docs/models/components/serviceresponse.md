# ServiceResponse

A service is a collection of tools.

## Example Usage

```typescript
import { ServiceResponse } from "syllable-sdk/models/components";

let value: ServiceResponse = {
  name: "<value>",
  description: "pish hyphenation trim bravely",
  id: 292794,
  lastUpdated: new Date("2023-06-16T23:32:17.442Z"),
  lastUpdatedBy: "<value>",
  tools: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the service                                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the service                                                                |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The ID of the service                                                                         |
| `lastUpdatedComments`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Update comments                                                                               |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the most recent update to the service                                        |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The email of the user who last updated the service                                            |
| `tools`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Names of tools that belong to the service                                                     |