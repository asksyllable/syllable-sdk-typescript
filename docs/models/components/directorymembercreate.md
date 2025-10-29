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
        {
          number: "+1234567890",
          rules: [
            {
              "language": "en",
            },
          ],
        },
      ],
    },
  ],
  contactTags: {
    "tag1": [
      "value1",
    ],
    "tag2": [
      "value2",
    ],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Name of the directory member                                                                          | Jane Doe                                                                                              |
| `type`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Type of the directory member                                                                          | contact                                                                                               |
| `extensions`                                                                                          | [components.DirectoryExtension](../../models/components/directoryextension.md)[]                      | :heavy_minus_sign:                                                                                    | List of extensions for the directory member                                                           | [<br/>{<br/>"name": "work",<br/>"numbers": [<br/>{<br/>"number": "+1234567890",<br/>"rules": [<br/>{<br/>"language": "en"<br/>}<br/>]<br/>}<br/>]<br/>}<br/>] |
| `contactTags`                                                                                         | Record<string, *string*[]>                                                                            | :heavy_minus_sign:                                                                                    | Tags for the directory member                                                                         | {<br/>"tag1": [<br/>"value1"<br/>],<br/>"tag2": [<br/>"value2"<br/>]<br/>}                            |