# A2pMessagingPathCheckRequest

Body to check US A2P / Messaging Service setup for one number on the Twilio channel.

## Example Usage

```typescript
import { A2pMessagingPathCheckRequest } from "syllable-sdk/models/components";

let value: A2pMessagingPathCheckRequest = {
  phone: "+18042221111",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `phone`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | E.164 phone number exactly as Twilio stores it for this incoming number. | +18042221111                                                             |