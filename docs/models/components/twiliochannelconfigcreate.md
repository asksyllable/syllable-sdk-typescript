# TwilioChannelConfigCreate

Twilio channel config information.

## Example Usage

```typescript
import { TwilioChannelConfigCreate } from "syllable-sdk/models/components";

let value: TwilioChannelConfigCreate = {
  accountSid: "AC123...",
  authToken: "sometoken",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountSid`              | *string*                  | :heavy_check_mark:        | SID of the Twilio account | AC123...                  |
| `authToken`               | *string*                  | :heavy_check_mark:        | The Twilio auth token     | sometoken                 |