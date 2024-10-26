# ToolDefinition

A tool that can be called from GPT during the conversation.

The tool can result in one of the following actions depending on the `type` field:
- `action`:
  An `ActionRequest` to return to Bubblegum in `GetResponseResponse`.
- `endpoint`:
  An HTTP API call to an external tool. Requires the `endpoint` field to be set too.
- `context`:
  Sets context variables based on the tool arguments, e.g. to change the session language. Only
  `language` and `say` context vars are currently supported, but this will be made more generic.

For example, to change the current session language:
```
{
  "type": "context",
  "tool": {
    "function": {
      "name": "set_language",
      "parameters": {
        "language": {
          "type": "string",
          "description": "The ISO 639 language code to set for the session e.g. 'en-US'."
        },
        "message": {
          "type": "string",
          "description": "Inform the caller we're now speaking in the new language."
        }
      }
    }
  }
}
```

If `defaults` is provided, it will be used as the default values for the parameters of the
tool call, if GPT doesn't provide them:
```
"defaults": {
  "hospital": "Queens Hospital"
}
```

Some special "transform" handling is supported if the value is a dict with a single `transform`
key. The parameter value will be transformed by the given `action` before being used as the
default value:

Removing an unwanted parameter:
```
"defaults": {
  "hospital": {
    "transform": {
      "action": "remove"
    }
  }
}
```

Add custom parameters from other parameters using Python's `format`:
```
"defaults": {
  "hello": {
    "transform": {
      "format": "Hello, {name}!"
    }
  }
}

Modify a value conditionally, e.g. change a `city` parameter with value "Bronx" to "The Bronx":
```
{
  "defaults": {
    "city": {
      "transform": {
        "when": {"operator": "eq", "key": "city", "value": "Bronx"},
        "action": "override",
        "format": "The {city}"
      }
    }
  }
}
```

## Example Usage

```typescript
import { ToolDefinition } from "syllable-sdk/models/components";

let value: ToolDefinition = {
  tool: {
    function: {
      name: "<value>",
      description: "supposing friendly serpentine",
      parameters: {},
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.Type](../../models/components/type.md)                                         | :heavy_minus_sign:                                                                         | The action to take when GPT calls the tool.                                                |
| `tool`                                                                                     | [components.SchemasCortexV1ToolsTool](../../models/components/schemascortexv1toolstool.md) | :heavy_check_mark:                                                                         | The tool definition to be used by the OpenAI API.                                          |
| `endpoint`                                                                                 | [components.HttpEndpoint](../../models/components/httpendpoint.md)                         | :heavy_minus_sign:                                                                         | The configuration for an HTTP API call.                                                    |
| `defaults`                                                                                 | *components.Defaults*                                                                      | :heavy_minus_sign:                                                                         | The default values for the parameters of the function/tool call.                           |
| `result`                                                                                   | [components.Result](../../models/components/result.md)                                     | :heavy_minus_sign:                                                                         | The optional result of the tool call. Only used for `context` tools.                       |