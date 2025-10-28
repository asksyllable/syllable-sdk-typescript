# DirectoryMemberCreate

Request model to create a directory member.

## Example Usage

```typescript
import { DirectoryMemberCreate } from "syllable-sdk/models/components";

let value: DirectoryMemberCreate = {
  name: "Jane Doe",
  type: "contact",
  extensions: [
    {
      name: "work",
      numbers: [
        {},
      ],
    },
  ],
  contactTags: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Name of the directory member                                                                               | Jane Doe                                                                                                   |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Type of the directory member                                                                               | contact                                                                                                    |
| `extensions`                                                                                               | [components.DirectoryExtension](../../models/components/directoryextension.md)[]                           | :heavy_minus_sign:                                                                                         | List of extensions for the directory member                                                                | [<br/>{<br/>"name": "work",<br/>"numbers": [<br/>{<br/>"number": "+1234567890",<br/>"rules": [<br/>{<br/>"language": "en"<br/>}<br/>]<br/>}<br/>]<br/>}<br/>] |
| `contactTags`                                                                                              | [components.DirectoryMemberCreateContactTags](../../models/components/directorymembercreatecontacttags.md) | :heavy_minus_sign:                                                                                         | Tags for the directory member                                                                              | {<br/>"tag1": "value1",<br/>"tag2": "value2"<br/>}                                                         |