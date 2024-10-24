# ConversationTranscriptionResponse

## Example Usage

```typescript
import { ConversationTranscriptionResponse } from "syllable-sdk/models/components";

let value: ConversationTranscriptionResponse = {
  conversationId: "<id>",
  transcription: [
    {
      timestamp: new Date("2023-04-26T16:58:27.156Z"),
    },
  ],
  actions: [
    {
      timestamp: new Date("2024-12-19T06:11:07.571Z"),
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