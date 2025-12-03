# DirectoryMemberTestResponse

## Example Usage

```typescript
import { DirectoryMemberTestResponse } from "syllable-sdk/models/components";

let value: DirectoryMemberTestResponse = {};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extension`                                                                                                                                         | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | Extension to which the user will be transferred if they call at the provided timestamp in the given language, or a status message if no rules match |
| `status`                                                                                                                                            | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | Status message if no rules match                                                                                                                    |