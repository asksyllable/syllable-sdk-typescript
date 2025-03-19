---
title: 'LanguageConfig'
---

Voice and DTMF configurations for a language in a language group. List of available voices
and their supported languages can be fetched from `GET /agents/voices/available/`.


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `language_code`                                                                              | [models.LanguageCode](/python-sdk-docs/models/components/languagecode)                                             | TRUE                                                                           | BCP 47 codes of languages that Syllable supports.                                            |                                                                                              |
| `voice_provider`                                                                             | [models.TtsProvider](/python-sdk-docs/models/components/ttsprovider)                                               | TRUE                                                                           | TTS provider for an agent voice.                                                             |                                                                                              |
| `voice_display_name`                                                                         | [models.AgentVoiceDisplayName](/python-sdk-docs/models/components/agentvoicedisplayname)                           | TRUE                                                                           | Display names of voices that Syllable supports.                                              |                                                                                              |
| `dtmf_code`                                                                                  | *int*                                                                                        | TRUE                                                                           | DTMF code that should be used for the language in the menu generated from the language group | 1                                                                                            |
