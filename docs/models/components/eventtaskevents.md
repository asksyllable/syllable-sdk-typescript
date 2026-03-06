# EventTaskEvents

## Example Usage

```typescript
import { EventTaskEvents } from "syllable-sdk/models/components";

let value: EventTaskEvents = {
  start: [
    {
      action: "inc",
      name: "<value>",
      by: 1,
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `start`                                              | *components.EventTaskEventsStart*[]                  | :heavy_minus_sign:                                   | Actions to execute on the first input from the user. |