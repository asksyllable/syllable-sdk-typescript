# DialogToolCall

## Example Usage

```typescript
import { DialogToolCall } from "syllable-sdk/models/components";

let value: DialogToolCall = {
  tollCallId: "<id>",
  toolName: "<value>",
  toolArguments: {},
  timestamp: new Date("2025-06-13T19:08:19.699Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `tollCallId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `toolName`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `toolArguments`                                                                                  | [components.DialogToolCallToolArguments](../../models/components/dialogtoolcalltoolarguments.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `timestamp`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |