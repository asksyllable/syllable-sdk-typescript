# SupportedSttProvider

An STT provider offered to agents, with its resolved deprecation lifecycle.

## Example Usage

```typescript
import { SupportedSttProvider } from "syllable-sdk/models/components";

let value: SupportedSttProvider = {
  provider: "Google STT V2",
  displayName: "Google STT V2",
  status: "active",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `provider`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | Speech-to-text provider value, as stored on the agent.                          | Google STT V2                                                                   |
| `displayName`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Human-readable name of the provider.                                            | Google STT V2                                                                   |
| `deprecated`                                                                    | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the provider is in the deprecation warning window.                      | false                                                                           |
| `sunsetDate`                                                                    | [RFCDate](../../types/rfcdate.md)                                               | :heavy_minus_sign:                                                              | Date the provider becomes retired and can no longer be saved or selected.       |                                                                                 |
| `removed`                                                                       | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the provider is force-retired regardless of sunset_date.                | false                                                                           |
| `fallback`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | Provider substituted at runtime for critical features once this one is retired. |                                                                                 |
| `status`                                                                        | [components.LifecycleStatus](../../models/components/lifecyclestatus.md)        | :heavy_minus_sign:                                                              | Effective lifecycle status, resolved server-side against the current date.      | active                                                                          |