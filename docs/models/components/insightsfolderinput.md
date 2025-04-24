# InsightsFolderInput

Request model to create/update an insight upload folder.

## Example Usage

```typescript
import { InsightsFolderInput } from "syllable-sdk/models/components";

let value: InsightsFolderInput = {
  name: "customer-complaints",
  label: "support",
  description: "Call recordings related to customer complaints",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Human-readable name of insight folder          | customer-complaints                            |
| `label`                                        | *string*                                       | :heavy_minus_sign:                             | optional label assigned to insight folder      | support                                        |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | Text description of insight upload folder      | Call recordings related to customer complaints |