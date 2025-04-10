# CommunicationBatchUpdate

## Example Usage

```typescript
import { CommunicationBatchUpdate } from "syllable-sdk/models/components";

let value: CommunicationBatchUpdate = {
  paused: true,
  expiresOn: "2027-01-01T06:00:00Z",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `paused`                                                              | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether the batch is on HOLD. When on HOLD, no outreach will be made. | true                                                                  |
| `expiresOn`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Timestamp of batch expiration                                         | 2027-01-01T06:00:00Z                                                  |