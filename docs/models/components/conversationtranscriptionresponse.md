# ConversationTranscriptionResponse

## Example Usage

```typescript
import { ConversationTranscriptionResponse } from "syllable-sdk/models/components";

let value: ConversationTranscriptionResponse = {
  conversationId: "<id>",
  transcription: [
    {
      timestamp: new Date("2022-04-22T20:11:12.127Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2022-08-17T22:17:39.092Z"),
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conversationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `transcription`                                                                  | [components.ConversationText](../../models/components/conversationtext.md)[]     | :heavy_check_mark:                                                               | N/A                                                                              |
| `actions`                                                                        | [components.ConversationAction](../../models/components/conversationaction.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |