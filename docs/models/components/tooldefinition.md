# ToolDefinition

A tool that can be called from an LLM during the conversation.

The tool can result in one of the following actions depending on the `type` field:
- `action`:
  A request to perform an action.
- `endpoint`:
  An HTTP API call to an external tool. Requires the `endpoint` field to be set too.
- `context`:
  Sets context variables based on the tool arguments, e.g. to change the session language. Only
  `language` and `say` context vars are currently supported, but this will be made more generic.

For example, to change the current session language:
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

If `defaults` is provided, it will be used as the default values for the parameters of the
tool call, if the LLM doesn't provide them:
"defaults": {
  "hospital": "Queens Hospital"
}

Some special "transform" handling is supported if the value is a dict with a single `transform`
key. The parameter value will be transformed by the given `action` before being used as the
default value:

Removing an unwanted parameter:
"defaults": {
  "hospital": {
    "transform": {
      "action": "remove"
    }
  }
}

Using a value from another parameter and converting it to a dictionary:
"defaults": {
  "tags.hospital": "{vars.hospital}",
  "tags.foo": "{params.foo}",
  "foo": {
    "transform": {
      "action": "remove"
    }
  }
}

Add custom parameters from other parameters using Python's `format`:
"defaults": {
  "hello": {
    "transform": {
      "format": "Hello, {name}!"
    }
  }
}

Modify a value conditionally, e.g. change a `city` parameter with value "Bronx" to "The Bronx":
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

Some common transform actions can be abbreviated using the `@` prefix to support a string syntax:
"defaults": {
  "foo": "@remove",
  "name": "@override Hello, {name}!"
}

## Example Usage

```typescript
import { ToolDefinition } from "syllable-sdk/models/components";

let value: ToolDefinition = {
  tool: {
    function: {
      name: "<value>",
      description: "dilate uh-huh pluck slowly trek what selfishly",
      parameters: {},
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.Type](../../models/components/type.md)                         | :heavy_minus_sign:                                                         | The action to take when the LLM calls the tool.                            |
| `tool`                                                                     | [components.InternalTool](../../models/components/internaltool.md)         | :heavy_check_mark:                                                         | A tool definition to be used by the OpenAI API.                            |
| `endpoint`                                                                 | [components.ToolHttpEndpoint](../../models/components/toolhttpendpoint.md) | :heavy_minus_sign:                                                         | The configuration for an HTTP API call.                                    |
| `defaults`                                                                 | *components.Defaults*                                                      | :heavy_minus_sign:                                                         | The default values for the parameters of the function/tool call.           |
| `result`                                                                   | [components.Result](../../models/components/result.md)                     | :heavy_minus_sign:                                                         | The optional result of the tool call. Only used for `context` tools.       |