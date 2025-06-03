# TwilioNumberUpdateRequest

Request model for updating a Twilio number and associating it with a channel.

## Example Usage

```typescript
import { TwilioNumberUpdateRequest } from "syllable-sdk/models/components";

let value: TwilioNumberUpdateRequest = {
  friendlyName: "Support Line",
  phoneSid: "PN123",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `friendlyName`                      | *string*                            | :heavy_check_mark:                  | Friendly name for the Twilio number | Support Line                        |
| `phoneSid`                          | *string*                            | :heavy_check_mark:                  | Twilio number SID                   | PN123                               |