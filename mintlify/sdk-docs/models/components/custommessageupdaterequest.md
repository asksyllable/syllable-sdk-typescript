---
title: 'CustomMessageUpdateRequest'
---

## Example Usage

```typescript
import { CustomMessageUpdateRequest } from "syllable-sdk/models/components";

let value: CustomMessageUpdateRequest = {
  name: "<value>",
  text: "<value>",
  id: 569101,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | TRUE                                                                   | The name of the custom message                                                       |
| `text`                                                                               | *string*                                                                             | TRUE                                                                   | The text of the custom message                                                       |
| `label`                                                                              | *string*                                                                             | FALSE                                                                   | The label of the custom message                                                      |
| `rules`                                                                              | [components.DaoCustomMessageRule](/sdk-docs/models/components/daocustommessagerule)[] | FALSE                                                                   | Rules for time-specific message variants                                             |
| `id`                                                                                 | *number*                                                                             | TRUE                                                                   | The ID of the custom message                                                         |
| `type`                                                                               | *string*                                                                             | FALSE                                                                   | N/A                                                                                  |