# A2pMessagingPathCheckResponse

Twilio-side A2P setup state for the number.

Reflects Twilio configuration (Messaging Service + Brand + Campaign records); it is not
carrier per-number REGISTERED state or legal/content compliance.

## Example Usage

```typescript
import { A2pMessagingPathCheckResponse } from "syllable-sdk/models/components";

let value: A2pMessagingPathCheckResponse = {
  a2pApproved: true,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a2pApproved`                                                                                                                                        | *boolean*                                                                                                                                            | :heavy_check_mark:                                                                                                                                   | True when the number is on a Messaging Service with a US A2P registration whose brand is approved and campaign is verified on the same registration. |