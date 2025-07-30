# TelephonyConfigurations

## Example Usage

```typescript
import { TelephonyConfigurations } from "syllable-sdk/models/components";

let value: TelephonyConfigurations = {
  preInputTimeout: 1.2,
  overallInputTimeout: 20,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `preInputTimeout`                                                               | *number*                                                                        | :heavy_minus_sign:                                                              | Pre input silence threshold                                                     |
| `postSpeechInputTimeout`                                                        | *number*                                                                        | :heavy_minus_sign:                                                              | Post speech silence timeout to determine input as ended.                        |
| `postDtmfInputTimeout`                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Post dtmf silence timeout to determine input as ended.                          |
| `overallInputTimeout`                                                           | *number*                                                                        | :heavy_minus_sign:                                                              | Total input timeout                                                             |
| `outputPadding`                                                                 | *number*                                                                        | :heavy_minus_sign:                                                              | Number of seconds to start listening to user input before assistant speech ends |