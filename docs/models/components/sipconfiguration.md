# SipConfiguration

SIP routing configuration for transferring a call to a destination.

This is internal telephony/routing configuration used to direct a transfer to specific
SIP endpoints.

## Example Usage

```typescript
import { SipConfiguration } from "syllable-sdk/models/components";

let value: SipConfiguration = {
  sipTransferMode: "refer",
  sipEndpoints: [
    {
      host: "10.0.0.1",
      port: "5060",
      transport: "tcp",
    },
    {
      host: "pbx.example.com",
      port: "5071",
      transport: "tls",
    },
  ],
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sipTransferMode`                                                                                                                 | [components.SipTransferMode](../../models/components/siptransfermode.md)                                                          | :heavy_minus_sign:                                                                                                                | How to perform the SIP transfer, INVITE or REFER.                                                                                 | refer                                                                                                                             |
| `sipEndpoints`                                                                                                                    | [components.SipEndpoint](../../models/components/sipendpoint.md)[]                                                                | :heavy_minus_sign:                                                                                                                | List of SIP endpoints to attempt for the transfer.                                                                                | [<br/>{<br/>"host": "10.0.0.1",<br/>"port": "5060",<br/>"transport": "tcp"<br/>},<br/>{<br/>"host": "pbx.example.com",<br/>"port": "5071",<br/>"transport": "tls"<br/>}<br/>] |