# InsightsFolderUpdateRequest

## Example Usage

```typescript
import { InsightsFolderUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsFolderUpdateRequest = {
  folderId: 748664,
  insightsFolderInput: {
    name: "customer-complaints",
    label: "support",
    description: "Call recordings related to customer complaints",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `folderId`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `insightsFolderInput`                                                            | [components.InsightsFolderInput](../../models/components/insightsfolderinput.md) | :heavy_check_mark:                                                               | N/A                                                                              |