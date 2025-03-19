---
title: 'SessionMessage'
---


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `role`                                                               | [models.DialogRole](/python-sdk-docs/models/components/dialogrole)                         | TRUE                                                   | N/A                                                                  |
| `dialog`                                                             | [models.DialogMessage](/python-sdk-docs/models/components/dialogmessage)                   | TRUE                                                   | N/A                                                                  |
| `tool_calls`                                                         | List[[models.DialogToolCall](/python-sdk-docs/models/components/dialogtoolcall)]           | TRUE                                                   | N/A                                                                  |
| `timestamp`                                                          | [date](https://docs.python.org/3/library/datetime.html#date-objects) | TRUE                                                   | N/A                                                                  |
