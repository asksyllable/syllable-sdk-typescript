# OrganizationSipIpRangesUpdateRequest

## Example Usage

```typescript
import { OrganizationSipIpRangesUpdateRequest } from "syllable-sdk/models/operations";

let value: OrganizationSipIpRangesUpdateRequest = {
  sipIpRangeId: 179790,
  organizationSipIpRangeUpdate: {
    ipRange: "192.168.1.0/24",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sipIpRangeId`                                                                                     | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organizationSipIpRangeUpdate`                                                                     | [components.OrganizationSipIpRangeUpdate](../../models/components/organizationsipiprangeupdate.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |