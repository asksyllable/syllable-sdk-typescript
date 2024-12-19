# Tool

## Example Usage

```typescript
import { Tool } from "syllable-sdk/models/components";

let value: Tool = {
  name: "<value>",
  serviceId: 456911,
  id: 882042,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | TRUE                                             | The name of the tool                                           |
| `definition`                                                   | [components.Definition](/sdk-docs/models/components/definition) | FALSE                                             | The definition of the tool                                     |
| `serviceId`                                                    | *number*                                                       | TRUE                                             | The service this tool belongs to                               |
| `id`                                                           | *number*                                                       | TRUE                                             | The ID of the tool                                             |
| `serviceName`                                                  | *string*                                                       | FALSE                                             | The name of the service this tool belongs to                   |