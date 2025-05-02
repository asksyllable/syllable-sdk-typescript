# TakeoutStatusResponse

## Example Usage

```typescript
import { TakeoutStatusResponse } from "syllable-sdk/models/components";

let value: TakeoutStatusResponse = {
  jobId: "<id>",
  status: "failed",
  updatedAt: new Date("2025-08-14T10:12:10.228Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `jobId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.TakeoutRequestStatus](../../models/components/takeoutrequeststatus.md)            | :heavy_check_mark:                                                                            | Status of a takeout request.                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `downloadLinks`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |