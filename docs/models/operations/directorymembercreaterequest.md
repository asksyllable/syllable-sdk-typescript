# DirectoryMemberCreateRequest

## Example Usage

```typescript
import { DirectoryMemberCreateRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberCreateRequest = {
  directoryMemberCreate: {
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
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `responseFormat`                                                                                                   | [components.DirectoryResponseFormat](../../models/components/directoryresponseformat.md)                           | :heavy_minus_sign:                                                                                                 | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |
| `directoryMemberCreate`                                                                                            | [components.DirectoryMemberCreate](../../models/components/directorymembercreate.md)                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |