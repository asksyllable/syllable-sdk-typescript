# LoadToolFromFileTask

Bootstraps a tool from a file (for internal developer use only if ENV.local=True).

## Example Usage

```typescript
import { LoadToolFromFileTask } from "syllable-sdk/models/components";

let value: LoadToolFromFileTask = {
  type: "import",
  file: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | A unique identifier for the task.                                                |
| `config`                                                                         | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |
| `variables`                                                                      | [components.Variable](../../models/components/variable.md)[]                     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metadata`                                                                       | [components.ContextTaskMetadata](../../models/components/contexttaskmetadata.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `tool`                                                                           | [components.ContextToolInfo](../../models/components/contexttoolinfo.md)         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | *"import"*                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *"v1alpha"*                                                                      | :heavy_minus_sign:                                                               | N/A                                                                              |
| `file`                                                                           | *components.FileT*                                                               | :heavy_check_mark:                                                               | The local path of the tool definition JSON file.                                 |