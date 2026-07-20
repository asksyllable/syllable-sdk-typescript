# SipEndpoint

A single SIP endpoint to attempt for a transfer.

## Example Usage

```typescript
import { SipEndpoint } from "syllable-sdk/models/components";

let value: SipEndpoint = {
  host: "10.0.0.1",
  port: "5060",
  transport: "tcp",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `host`                                                             | *string*                                                           | :heavy_check_mark:                                                 | SIP endpoint host (IP address or hostname).                        | **Example 1:** 10.0.0.1<br/>**Example 2:** pbx.example.com         |
| `port`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | SIP endpoint port.                                                 | **Example 1:** 5060<br/>**Example 2:** 5071                        |
| `transport`                                                        | [components.SipTransport](../../models/components/siptransport.md) | :heavy_minus_sign:                                                 | SIP transport protocol, e.g. `tcp`, `tls` or `udp`.                | **Example 1:** tcp<br/>**Example 2:** tls<br/>**Example 3:** udp   |