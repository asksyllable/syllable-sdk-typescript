# OrganizationSipIpRangeUpdate

The request body for updating a SIP IP range.

## Example Usage

```typescript
import { OrganizationSipIpRangeUpdate } from "syllable-sdk/models/components";

let value: OrganizationSipIpRangeUpdate = {
  ipRange: "192.168.1.0/24",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.OrganizationSipIpRangeType](../../models/components/organizationsipiprangetype.md) | :heavy_minus_sign:                                                                             | The SIP IP range type                                                                          |                                                                                                |
| `ipRange`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | The SIP IP range in CIDR notation                                                              | 192.168.1.0/24                                                                                 |