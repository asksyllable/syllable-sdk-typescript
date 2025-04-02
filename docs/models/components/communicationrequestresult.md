# CommunicationRequestResult

## Example Usage

```typescript
import { CommunicationRequestResult } from "syllable-sdk/models/components";

let value: CommunicationRequestResult = {
  batchId: "20250117.9",
  referenceId: "12345",
  target: "user@email.com",
  requestVariables: {},
  callManagerSid: "LMc4b16a9df2ce33d84b3d30581fe6598c",
  createdAt: "2024-01-01T00:00:00Z",
  sentAt: "2024-01-02T00:00:00Z",
  sessionId: 1,
  conversationId: 1,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `batchId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Unique ID for conversation batch                                           | 20250117.9                                                                 |
| `referenceId`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | ID for target outreach (unique within batch)                               | 12345                                                                      |
| `target`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Target phone number or email address                                       | user@email.com                                                             |
| `requestStatus`                                                            | [components.RequestStatus](../../models/components/requeststatus.md)       | :heavy_minus_sign:                                                         | Status of a communication request.                                         |                                                                            |
| `requestVariables`                                                         | [components.RequestVariables](../../models/components/requestvariables.md) | :heavy_check_mark:                                                         | Variables for request                                                      |                                                                            |
| `callManagerSid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | Call manager SID                                                           | LMc4b16a9df2ce33d84b3d30581fe6598c                                         |
| `createdAt`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Timestamp of request creation                                              | 2024-01-01T00:00:00Z                                                       |
| `sentAt`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Timestamp at which request was sent                                        | 2024-01-02T00:00:00Z                                                       |
| `attemptCount`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | Number of attempts for request                                             | 0                                                                          |
| `sessionId`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Unique ID for call session                                                 | 1                                                                          |
| `conversationId`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | Unique ID for conversation                                                 | 1                                                                          |