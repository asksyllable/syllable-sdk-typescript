# BatchFileSampleRow

A row of a batch file as the agent receives it.

## Example Usage

```typescript
import { BatchFileSampleRow } from "syllable-sdk/models/components";

let value: BatchFileSampleRow = {
  referenceId: "12345",
  target: "+12125551234",
  requestVariables: {
    "first_name": "Jane",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `referenceId`                            | *string*                                 | :heavy_check_mark:                       | Reference for the contact                | 12345                                    |
| `target`                                 | *string*                                 | :heavy_check_mark:                       | Phone number or email address to contact | +12125551234                             |
| `requestVariables`                       | Record<string, *string*>                 | :heavy_check_mark:                       | Values from the other columns            | {<br/>"first_name": "Jane"<br/>}         |