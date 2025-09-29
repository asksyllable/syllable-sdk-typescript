# TwilioPhoneNumber

## Example Usage

```typescript
import { TwilioPhoneNumber } from "syllable-sdk/models/components";

let value: TwilioPhoneNumber = {
  sid: "<id>",
  phoneNumber: "973.789.1824",
  friendlyName: "<value>",
  trunkSid: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `sid`                                       | *string*                                    | :heavy_check_mark:                          | The unique identifier for the phone number. |
| `phoneNumber`                               | *string*                                    | :heavy_check_mark:                          | The phone number.                           |
| `friendlyName`                              | *string*                                    | :heavy_check_mark:                          | A user-friendly name for the number.        |
| `trunkSid`                                  | *string*                                    | :heavy_check_mark:                          | Associated trunk SID, if any.               |