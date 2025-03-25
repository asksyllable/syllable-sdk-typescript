# SessionSummaryResponse

AI summary information for a given session.

## Example Usage

```typescript
import { SessionSummaryResponse } from "syllable-sdk/models/components";

let value: SessionSummaryResponse = {
  summary:
    "The customer service agent successfully assisted the caller with their inquiry and the call ended positively.",
  rating: "Good",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `summary`                                                                                                     | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The AI summary of the session                                                                                 | The customer service agent successfully assisted the caller with their inquiry and the call ended positively. |
| `rating`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The AI rating of the session                                                                                  | Good                                                                                                          |