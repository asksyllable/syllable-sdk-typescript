---
title: 'AgentToolDefaults'
---

## Example Usage

```typescript
import { AgentToolDefaults } from "syllable-sdk/models/components";

let value: AgentToolDefaults = {
  toolName: "<value>",
  defaultValues: [
    {
      fieldName: "<value>",
      defaultValue: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `toolName`                                                                             | *string*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `defaultValues`                                                                        | [components.AgentToolFieldDefault](/sdk-docs/models/components/agenttoolfielddefault)[] | TRUE                                                                     | N/A                                                                                    |