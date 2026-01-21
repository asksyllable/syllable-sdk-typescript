# ChannelConfigView

## Example Usage

```typescript
import { ChannelConfigView } from "syllable-sdk/models/components";

let value: ChannelConfigView = {
  telephony: {
    preInputTimeout: 1.2,
    overallInputTimeout: 20,
    interruptibility: "dtmf_only",
    passiveSpeechInputEnabled: true,
    passiveInputStart: 0.5,
  },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `telephony`                                                                                                                                                  | [components.TelephonyConfigurations](../../models/components/telephonyconfigurations.md)                                                                     | :heavy_minus_sign:                                                                                                                                           | Telephony configurations to be applied to targets belonging to the channel.       Only applies to voice supported channels.                                  | {<br/>"interruptibility": "dtmf_only",<br/>"overall_input_timeout": 20,<br/>"passive_input_start": 0.5,<br/>"passive_speech_input_enabled": true,<br/>"pre_input_timeout": 1.2<br/>} |
| `email`                                                                                                                                                      | [components.EmailConfigurations](../../models/components/emailconfigurations.md)                                                                             | :heavy_minus_sign:                                                                                                                                           | Email configurations for email channels. Only applies to email channels.                                                                                     | {<br/>"sending_domain": "mail.example.com"<br/>}                                                                                                             |