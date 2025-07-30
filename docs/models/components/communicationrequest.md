# CommunicationRequest

## Example Usage

```typescript
import { CommunicationRequest } from "syllable-sdk/models/components";

let value: CommunicationRequest = {
  referenceId: "12345",
  target: "512-555-1234",
  requestVariables: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `referenceId`                                | *string*                                     | :heavy_check_mark:                           | ID for target outreach (unique within batch) | 12345                                        |
| `target`                                     | *string*                                     | :heavy_check_mark:                           | Target phone number                          | 512-555-1234                                 |
| `requestVariables`                           | Record<string, *string*>                     | :heavy_check_mark:                           | Variables for request                        |                                              |