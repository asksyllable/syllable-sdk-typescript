# TwilioChannelConfigUpdate

Twilio channel config information. If a field is passed as None, it will not be updated.

## Example Usage

```typescript
import { TwilioChannelConfigUpdate } from "syllable-sdk/models/components";

let value: TwilioChannelConfigUpdate = {
  accountSid: "AC123...",
  authToken: "sometoken",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountSid`              | *string*                  | :heavy_minus_sign:        | SID of the Twilio account | AC123...                  |
| `authToken`               | *string*                  | :heavy_minus_sign:        | The Twilio auth token     | sometoken                 |