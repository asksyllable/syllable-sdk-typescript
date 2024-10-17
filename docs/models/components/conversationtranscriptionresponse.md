# ConversationTranscriptionResponse

## Example Usage

```typescript
import { ConversationTranscriptionResponse } from "syllable-sdk/models/components";

let value: ConversationTranscriptionResponse = {
  conversationId: "<id>",
  transcription: [
    {
      timestamp: new Date("2023-11-02T20:33:57.206Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2023-11-08T03:49:54.674Z"),
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