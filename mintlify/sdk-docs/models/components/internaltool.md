---
title: 'InternalTool'
---

A tool definition to be used by the OpenAI API.

## Example Usage

```typescript
import { InternalTool } from "syllable-sdk/models/components";

let value: InternalTool = {
  function: {
    name: "<value>",
    description:
      "however ultimately boo ham gift harmful down cross-contamination before enrage",
    parameters: {},
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *string*                                                                                                                     | FALSE                                                                                                           | Always `function`.                                                                                                           |
| `function`                                                                                                                   | [components.ToolFunction](/sdk-docs/models/components/toolfunction)                                                           | TRUE                                                                                                           | A function available to an agent.<br/><br/>See:<br/>- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling |