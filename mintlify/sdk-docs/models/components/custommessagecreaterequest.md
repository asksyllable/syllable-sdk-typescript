---
title: 'CustomMessageCreateRequest'
---

## Example Usage

```typescript
import { CustomMessageCreateRequest } from "syllable-sdk/models/components";

let value: CustomMessageCreateRequest = {
  name: "<value>",
  text: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | TRUE                                                                   | The name of the custom message                                                       |
| `text`                                                                               | *string*                                                                             | TRUE                                                                   | The text of the custom message                                                       |
| `label`                                                                              | *string*                                                                             | FALSE                                                                   | The label of the custom message                                                      |
| `rules`                                                                              | [components.DaoCustomMessageRule](/sdk-docs/models/components/daocustommessagerule)[] | FALSE                                                                   | Rules for time-specific message variants                                             |
| `type`                                                                               | *string*                                                                             | FALSE                                                                   | N/A                                                                                  |