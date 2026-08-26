# PostCardClickEventRequest

## Example Usage

```typescript
import { PostCardClickEventRequest } from "syllable-sdk/models/operations";

let value: PostCardClickEventRequest = {
  testId: "<id>",
  cardClickRequest: {
    actionId: "<id>",
    actionType: "cta",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `testId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `cardClickRequest`                                                         | [components.CardClickRequest](../../models/components/cardclickrequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |