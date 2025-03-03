# SessionRecordingResponse

Recording URLs for a given session.

## Example Usage

```typescript
import { SessionRecordingResponse } from "syllable-sdk/models/components";

let value: SessionRecordingResponse = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `sessionId`                    | *string*                       | :heavy_minus_sign:             | The internal ID of the session |
| `recordings`                   | *string*[]                     | :heavy_minus_sign:             | List of recording URLs         |