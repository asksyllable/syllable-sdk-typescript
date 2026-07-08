# BridgePhrasesAgentInfo

Information about an agent linked to a bridge phrases config.

## Example Usage

```typescript
import { BridgePhrasesAgentInfo } from "syllable-sdk/models/components";

let value: BridgePhrasesAgentInfo = {
  id: 1,
  name: "Test Agent",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *number*               | :heavy_check_mark:     | The ID of the agent.   | 1                      |
| `name`                 | *string*               | :heavy_check_mark:     | The name of the agent. | Test Agent             |