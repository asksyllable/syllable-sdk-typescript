# CommunicationRequest

## Example Usage

```typescript
import { CommunicationRequest } from "syllable-sdk/models/components";

let value: CommunicationRequest = {
  batchId: "20250117.9",
  referenceId: "12345",
  target: "user@email.com",
  requestVariables: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Unique ID for conversation batch                                                                                   | 20250117.9                                                                                                         |
| `referenceId`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ID for target outreach (unique within batch)                                                                       | 12345                                                                                                              |
| `target`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Target phone number or email address                                                                               | user@email.com                                                                                                     |
| `requestStatus`                                                                                                    | [components.RequestStatus](../../models/components/requeststatus.md)                                               | :heavy_minus_sign:                                                                                                 | Status of a communication request.                                                                                 |                                                                                                                    |
| `requestVariables`                                                                                                 | [components.CommunicationRequestRequestVariables](../../models/components/communicationrequestrequestvariables.md) | :heavy_check_mark:                                                                                                 | Variables for request                                                                                              |                                                                                                                    |