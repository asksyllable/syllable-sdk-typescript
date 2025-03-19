---
title: 'AgentVoice'
---

Voice option for an agent.


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `provider`                                                          | [models.TtsProvider](/python-sdk-docs/models/components/ttsprovider)                      | TRUE                                                  | TTS provider for an agent voice.                                    |
| `display_name`                                                      | [models.AgentVoiceDisplayName](/python-sdk-docs/models/components/agentvoicedisplayname)  | TRUE                                                  | Display names of voices that Syllable supports.                     |
| `var_name`                                                          | [models.AgentVoiceVarName](/python-sdk-docs/models/components/agentvoicevarname)          | TRUE                                                  | The variable name of an agent voice (used when procesing messages). |
| `gender`                                                            | [models.AgentVoiceGender](/python-sdk-docs/models/components/agentvoicegender)            | TRUE                                                  | Gender for an agent voice.                                          |
| `supported_languages`                                               | List[[models.AgentLanguage](/python-sdk-docs/models/components/agentlanguage)]            | TRUE                                                  | Languages supported by the voice                                    |
| `deprecated`                                                        | *bool*                                                              | TRUE                                                  | Whether the voice is deprecated and should not be used              |
| `model`                                                             | [Optional[models.AgentVoiceModel]](/python-sdk-docs/models/components/agentvoicemodel)    | FALSE                                                  | Model for an agent voice.                                           |
