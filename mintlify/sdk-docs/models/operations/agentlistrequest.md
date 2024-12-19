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
| `searchFields`                                                             | [components.AgentProperties](/sdk-docs/models/components/agentproperties)[] | FALSE                                                         | N/A                                                                        |
| `searchFieldValues`                                                        | *string*[]                                                                 | FALSE                                                         | N/A                                                                        |
| `orderBy`                                                                  | [components.AgentProperties](/sdk-docs/models/components/agentproperties)   | FALSE                                                         | N/A                                                                        |
| `orderByDirection`                                                         | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection) | FALSE                                                         | N/A                                                                        |
| `fields`                                                                   | [components.AgentProperties](/sdk-docs/models/components/agentproperties)[] | FALSE                                                         | N/A                                                                        |
| `startDatetime`                                                            | *string*                                                                   | FALSE                                                         | N/A                                                                        |
| `endDatetime`                                                              | *string*                                                                   | FALSE                                                         | N/A                                                                        |