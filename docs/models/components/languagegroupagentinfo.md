# LanguageGroupAgentInfo

Information about an agent linked to a language group.

## Example Usage

```typescript
import { LanguageGroupAgentInfo } from "syllable-sdk/models/components";

let value: LanguageGroupAgentInfo = {
  id: 1,
  name: "Test Agent",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *number*              | :heavy_check_mark:    | The ID of the agent   | 1                     |
| `name`                | *string*              | :heavy_check_mark:    | The name of the agent | Test Agent            |