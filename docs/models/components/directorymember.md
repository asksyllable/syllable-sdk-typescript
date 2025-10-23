# DirectoryMember

Model for a directory member (i.e. a contact).

## Example Usage

```typescript
import { DirectoryMember } from "syllable-sdk/models/components";

let value: DirectoryMember = {
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
  id: 1,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Name of the directory member                                                                          | Jane Doe                                                                                              |
| `type`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Type of the directory member                                                                          | contact                                                                                               |
| `extensions`                                                                                          | [components.DirectoryExtension](../../models/components/directoryextension.md)[]                      | :heavy_minus_sign:                                                                                    | List of extensions for the directory member                                                           | [<br/>{<br/>"name": "work",<br/>"numbers": [<br/>{<br/>"number": "+1234567890",<br/>"rules": [<br/>{<br/>"language": "en"<br/>}<br/>]<br/>}<br/>]<br/>}<br/>] |
| `contactTags`                                                                                         | [components.ContactTags](../../models/components/contacttags.md)                                      | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `lastUpdatedBy`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `id`                                                                                                  | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Internal ID of the directory member                                                                   | 1                                                                                                     |