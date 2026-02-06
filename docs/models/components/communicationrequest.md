# CommunicationRequest

## Example Usage

```typescript
import { CommunicationRequest } from "syllable-sdk/models/components";

let value: CommunicationRequest = {
  referenceId: "12345",
  target: "512-555-1234",
  requestVariables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `referenceId`                                               | *string*                                                    | :heavy_check_mark:                                          | ID for target outreach (unique within batch)                | 12345                                                       |
| `target`                                                    | *string*                                                    | :heavy_check_mark:                                          | Target phone number                                         | **Example 1:** 512-555-1234<br/>**Example 2:** +15125551234 |
| `requestVariables`                                          | Record<string, *string*>                                    | :heavy_check_mark:                                          | Variables for request                                       |                                                             |