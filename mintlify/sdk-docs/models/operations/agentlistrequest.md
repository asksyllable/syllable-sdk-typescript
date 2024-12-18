# AgentListRequest

## Example Usage

```typescript
import { AgentListRequest } from "syllable-sdk/models/operations";

let value: AgentListRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `page`                                                                     | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `searchFields`                                                             | [components.AgentProperties](../../models/components/agentproperties.md)[] | FALSE                                                         | N/A                                                                        |
| `searchFieldValues`                                                        | *string*[]                                                                 | FALSE                                                         | N/A                                                                        |
| `orderBy`                                                                  | [components.AgentProperties](../../models/components/agentproperties.md)   | FALSE                                                         | N/A                                                                        |
| `orderByDirection`                                                         | [components.OrderByDirection](../../models/components/orderbydirection.md) | FALSE                                                         | N/A                                                                        |
| `fields`                                                                   | [components.AgentProperties](../../models/components/agentproperties.md)[] | FALSE                                                         | N/A                                                                        |
| `startDatetime`                                                            | *string*                                                                   | FALSE                                                         | N/A                                                                        |
| `endDatetime`                                                              | *string*                                                                   | FALSE                                                         | N/A                                                                        |