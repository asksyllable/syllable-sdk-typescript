# CustomMessageResponse

## Example Usage

```typescript
import { CustomMessageResponse } from "syllable-sdk/models/components";

let value: CustomMessageResponse = {
  name: "<value>",
  text: "<value>",
  id: 929297,
  updatedAt: new Date("2022-12-16T03:38:15.811Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the custom message                                                                |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The text of the custom message                                                                |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The label of the custom message                                                               |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The ID of the custom message                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the most recent update to the custom message                                     |
| `agentCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of agents using the custom message                                                 |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |