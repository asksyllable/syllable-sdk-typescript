# DirectoryExtensionNumber

## Example Usage

```typescript
import { DirectoryExtensionNumber } from "syllable-sdk/models/components";

let value: DirectoryExtensionNumber = {
  number: "+1234567890",
  rules: [
    {
      "language": "en",
    },
  ],
  sipTransferMode: "refer",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `number`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Phone number or SIP URI                                                                                      | **Example 1:** +1234567890<br/>**Example 2:** sip:1234567890@example.com                                     |
| `rules`                                                                                                      | Record<string, *string*>[]                                                                                   | :heavy_minus_sign:                                                                                           | Directory extension number rules. To include a language rule, use key "language" with a language code value. | [<br/>{<br/>"language": "en"<br/>}<br/>]                                                                     |
| `sipTransferMode`                                                                                            | [components.SipTransferMode](../../models/components/siptransfermode.md)                                     | :heavy_minus_sign:                                                                                           | How to perform the SIP transfer, INVITE or REFER.                                                            | refer                                                                                                        |