# CardClickRequest

## Example Usage

```typescript
import { CardClickRequest } from "syllable-sdk/models/components";

let value: CardClickRequest = {
  actionId: "<id>",
  actionType: "action",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `actionId`                                                     | *string*                                                       | :heavy_check_mark:                                             | Human-readable identifier for the card action.                 |
| `actionType`                                                   | [components.ActionType](../../models/components/actiontype.md) | :heavy_check_mark:                                             | The type of action triggers, either "action", or "cta".        |