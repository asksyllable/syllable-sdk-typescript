<!-- Start SDK Example Usage [usage] -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({
    page: 0,
    searchFields: [
      "name",
    ],
    searchFieldValues: [
      "Some Object Name",
    ],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->