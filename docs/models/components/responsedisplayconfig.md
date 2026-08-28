# ResponseDisplayConfig

Declarative presentation metadata stored with a tool definition.

## Example Usage

```typescript
import { ResponseDisplayConfig } from "syllable-sdk/models/components";

let value: ResponseDisplayConfig = {
  type: "card-list",
  itemsPath: "<value>",
  mapping: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `version`                                                                      | *1*                                                                            | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *"card-list"*                                                                  | :heavy_check_mark:                                                             | N/A                                                                            |
| `itemsPath`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `mapping`                                                                      | [components.DisplayCardMapping](../../models/components/displaycardmapping.md) | :heavy_check_mark:                                                             | Supported mappings from one result item to the existing card shape.            |