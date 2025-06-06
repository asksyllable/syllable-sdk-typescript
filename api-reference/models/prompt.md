# Prompt

Prompt


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *str*                                                            | :heavy_check_mark:                                               | The Prompt name                                                  |
| `llm_config`                                                     | [models.LlmConfig](../models/llmconfig.md)                       | :heavy_check_mark:                                               | The configuration for the language model used by the Cortex API. |
| `id`                                                             | *int*                                                            | :heavy_check_mark:                                               | The Prompt ID                                                    |
| `last_updated`                                                   | *Nullable[str]*                                                  | :heavy_check_mark:                                               | N/A                                                              |
| `context`                                                        | *OptionalNullable[str]*                                          | :heavy_minus_sign:                                               | N/A                                                              |
| `tools`                                                          | List[*str*]                                                      | :heavy_minus_sign:                                               | The tools for the prompt                                         |