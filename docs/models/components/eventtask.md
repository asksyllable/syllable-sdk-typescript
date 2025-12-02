# EventTask

## Example Usage

```typescript
import { EventTask } from "syllable-sdk/models/components";

let value: EventTask = {
  type: "event",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | A unique identifier for the task.                                                |
| `config`                                                                         | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |
| `variables`                                                                      | [components.Variable](../../models/components/variable.md)[]                     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metadata`                                                                       | [components.ContextTaskMetadata](../../models/components/contexttaskmetadata.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `tool`                                                                           | [components.ContextToolInfo](../../models/components/contexttoolinfo.md)         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | *"event"*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *"v1alpha"*                                                                      | :heavy_minus_sign:                                                               | N/A                                                                              |
| `on`                                                                             | [components.EventTaskEvents](../../models/components/eventtaskevents.md)         | :heavy_minus_sign:                                                               | N/A                                                                              |