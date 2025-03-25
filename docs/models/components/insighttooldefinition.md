# InsightToolDefinition

Model for an insight tool definition. This is a template that can be used by multiple insight
tools, each providing their own parameter values.

## Example Usage

```typescript
import { InsightToolDefinition } from "syllable-sdk/models/components";

let value: InsightToolDefinition = {
  id: 1,
  name: "llm_tool",
  type: "<value>",
  description: "An LLM tool evaluates a transcript with a given prompt",
  toolParameters: {},
  toolResultSet: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | Unique ID for insight tool definition                                    | 1                                                                        |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Human-readable name of insight tool definition                           | llm_tool                                                                 |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of insight tool definition                                          |                                                                          |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Text description of insight tool definition                              | An LLM tool evaluates a transcript with a given prompt                   |
| `toolParameters`                                                         | [components.ToolParameters](../../models/components/toolparameters.md)   | :heavy_check_mark:                                                       | Parameters for tools that use this definition and their associated types | {<br/>"prompt": "string"<br/>}                                           |
| `toolResultSet`                                                          | [components.ToolResultSet](../../models/components/toolresultset.md)     | :heavy_check_mark:                                                       | Result key/types for insight tool definition                             | {<br/>"summary": "string"<br/>}                                          |