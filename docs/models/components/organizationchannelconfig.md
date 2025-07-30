# OrganizationChannelConfig

Channel config information for creates / updates through the organizations API

## Example Usage

```typescript
import { OrganizationChannelConfig } from "syllable-sdk/models/components";

let value: OrganizationChannelConfig = {
  accountSid: "AC123...",
  authToken: "sometoken",
  telephony: {
    preInputTimeout: 1.2,
    overallInputTimeout: 20,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountSid`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | SID of the Twilio account                                                                | AC123...                                                                                 |
| `authToken`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Twilio auth token                                                                    | sometoken                                                                                |
| `telephony`                                                                              | [components.TelephonyConfigurations](../../models/components/telephonyconfigurations.md) | :heavy_minus_sign:                                                                       | Telephony configurations to be applied to the targets under the channel                  | {<br/>"overall_input_timeout": 20,<br/>"pre_input_timeout": 1.2<br/>}                    |