# SessionRecordingResponse

Recording URLs for a given session.

## Example Usage

```typescript
import { SessionRecordingResponse } from "syllable-sdk/models/components";

let value: SessionRecordingResponse = {
  recordings: [
    "https://example.com/recording1.mp3",
    "https://example.com/recording2.mp3",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `sessionId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The internal ID of the session                                                 |                                                                                |
| `recordings`                                                                   | *string*[]                                                                     | :heavy_minus_sign:                                                             | List of recording URLs                                                         | [<br/>"https://example.com/recording1.mp3",<br/>"https://example.com/recording2.mp3"<br/>] |