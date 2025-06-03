# TwilioNumberUpdateResponse

Response model for updating a Twilio number and associating it with a channel.

## Example Usage

```typescript
import { TwilioNumberUpdateResponse } from "syllable-sdk/models/components";

let value: TwilioNumberUpdateResponse = {
  phoneNumber: "+18042221111",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `phoneNumber`                   | *string*                        | :heavy_check_mark:              | The updated Twilio phone number | +18042221111                    |