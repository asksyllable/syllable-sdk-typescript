# AgentListResponse

## Example Usage

```typescript
import { AgentListResponse } from "syllable-sdk/models/components";

let value: AgentListResponse = {
  agents: [
    {
      name: "<value>",
      timezone: "Asia/Dili",
      typeExtra: {},
      id: 715190,
    },
  ],
  count: 602763,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `agents`                                               | [components.Agent](../../models/components/agent.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `count`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |