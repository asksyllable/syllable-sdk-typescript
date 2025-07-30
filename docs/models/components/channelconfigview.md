# ChannelConfigView

## Example Usage

```typescript
import { ChannelConfigView } from "syllable-sdk/models/components";

let value: ChannelConfigView = {
  telephony: {
    preInputTimeout: 1.2,
    overallInputTimeout: 20,
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `telephony`                                                                                                                 | [components.TelephonyConfigurations](../../models/components/telephonyconfigurations.md)                                    | :heavy_minus_sign:                                                                                                          | Telephony configurations to be applied to targets belonging to the channel.       Only applies to voice supported channels. | {<br/>"overall_input_timeout": 20,<br/>"pre_input_timeout": 1.2<br/>}                                                       |