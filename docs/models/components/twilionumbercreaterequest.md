# TwilioNumberCreateRequest

Request model for purchasing a Twilio number and associating it with a channel.

## Example Usage

```typescript
import { TwilioNumberCreateRequest } from "syllable-sdk/models/components";

let value: TwilioNumberCreateRequest = {
  friendlyName: "Support Line",
  areaCode: "804",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `friendlyName`                      | *string*                            | :heavy_check_mark:                  | Friendly name for the Twilio number | Support Line                        |
| `areaCode`                          | *string*                            | :heavy_check_mark:                  | Area code for the Twilio number     | 804                                 |