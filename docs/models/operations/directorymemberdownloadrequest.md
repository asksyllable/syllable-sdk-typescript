# DirectoryMemberDownloadRequest

## Example Usage

```typescript
import { DirectoryMemberDownloadRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberDownloadRequest = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `responseFormat`                                                                                                   | [components.DirectoryResponseFormat](../../models/components/directoryresponseformat.md)                           | :heavy_minus_sign:                                                                                                 | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |