# TwilioNumberCreateResponse

Response model for purchasing a Twilio number and associating it with a channel.

## Example Usage

```typescript
import { TwilioNumberCreateResponse } from "syllable-sdk/models/components";

let value: TwilioNumberCreateResponse = {
  phoneNumber: "+18042221111",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `phoneNumber`                     | *string*                          | :heavy_check_mark:                | The purchased Twilio phone number | +18042221111                      |