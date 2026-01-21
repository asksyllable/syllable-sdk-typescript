# EmailConfigurations

Email channel configurations.

## Example Usage

```typescript
import { EmailConfigurations } from "syllable-sdk/models/components";

let value: EmailConfigurations = {
  sendingDomain: "mail.example.com",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sendingDomain`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | The domain to use for sending emails. Must be authenticated in SendGrid. | mail.example.com                                                         |