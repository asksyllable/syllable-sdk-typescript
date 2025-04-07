# CommunicationRequest

## Example Usage

```typescript
import { CommunicationRequest } from "syllable-sdk/models/components";

let value: CommunicationRequest = {
  referenceId: "12345",
  target: "user@email.com",
  requestVariables: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `referenceId`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ID for target outreach (unique within batch)                                                                       | 12345                                                                                                              |
| `target`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Target phone number or email address                                                                               | user@email.com                                                                                                     |
| `requestVariables`                                                                                                 | [components.CommunicationRequestRequestVariables](../../models/components/communicationrequestrequestvariables.md) | :heavy_check_mark:                                                                                                 | Variables for request                                                                                              |                                                                                                                    |