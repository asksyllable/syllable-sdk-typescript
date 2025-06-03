# TwilioListNumbersResponse

Response model for a list of Twilio phone numbers

## Example Usage

```typescript
import { TwilioListNumbersResponse } from "syllable-sdk/models/components";

let value: TwilioListNumbersResponse = {
  phoneNumbers: [
    {
      sid: "PN123",
      phoneNumber: "+19876543210",
      friendlyName: "Test number",
      trunkSid: "TK123",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `phoneNumbers`                                                                                               | [components.TwilioPhoneNumber](../../models/components/twiliophonenumber.md)[]                               | :heavy_check_mark:                                                                                           | List of phone numbers.                                                                                       | [<br/>{<br/>"friendly_name": "Test number",<br/>"phone_number": "+19876543210",<br/>"sid": "PN123",<br/>"trunk_sid": "TK123"<br/>}<br/>] |