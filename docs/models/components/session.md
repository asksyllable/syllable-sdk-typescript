# Session

## Example Usage

```typescript
import { Session } from "syllable-sdk/models/components";

let value: Session = {
  timestamp: new Date("2023-09-24T05:41:47.829Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `channelManagerService`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `channelManagerType`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `channelManagerSid`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `target`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isLegacy`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isTest`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |