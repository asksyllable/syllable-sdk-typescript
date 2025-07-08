# SessionData

## Example Usage

```typescript
import { SessionData } from "syllable-sdk/models/components";

let value: SessionData = {
  sessionId: 123,
  source: "+1234567890",
  target: "+1239876543",
  isTest: false,
  messages: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sessionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Session ID                                                               | 123                                                                      |
| `source`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Session source                                                           | +1234567890                                                              |
| `target`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Session target                                                           | +1239876543                                                              |
| `isTest`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | Is test session                                                          | false                                                                    |
| `messages`                                                               | [components.SessionMessage](../../models/components/sessionmessage.md)[] | :heavy_check_mark:                                                       | Session messages                                                         |                                                                          |