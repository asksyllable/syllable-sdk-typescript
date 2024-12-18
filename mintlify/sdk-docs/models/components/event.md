# Event

## Example Usage

```typescript
import { Event } from "syllable-sdk/models/components";

let value: Event = {
  timestamp: new Date("2022-10-23T22:17:23.016Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | N/A                                                                                           |
| `sessionId`                                                                                   | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `conversationId`                                                                              | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `source`                                                                                      | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `sourceId`                                                                                    | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `category`                                                                                    | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `attributes`                                                                                  | [components.Attributes](../../models/components/attributes.md)                                | FALSE                                                                            | N/A                                                                                           |