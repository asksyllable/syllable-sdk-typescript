# SyllableSDKTools
(*insights.tools*)

## Overview

Operations related to insights tool configurationss. An insight is a tool           that processes conversation data to extract information and generate reports.

### Available Operations

* [list](#list) - List Insight Tool Configurations
* [create](#create) - Create Insight Tool Configuration
* [getById](#getbyid) - Get Insight Tool Config By Id
* [update](#update) - Update Insights Tool Configuration
* [insightsToolTest](#insightstooltest) - Test Insights Tool
* [insightToolGetDefinitions](#insighttoolgetdefinitions) - Get Insight Tool Definitions

## list

List the existing insight_tools

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.tools.list({
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

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsToolsList } from "syllable-sdk/funcs/insightsToolsList.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsToolsList(syllableSDK, {
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightToolListRequest](../../models/operations/insighttoollistrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseInsightToolOutput](../../models/components/listresponseinsighttooloutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new insight tool.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.tools.create({
    name: "summary-tool",
    description: "This tool uses GPT4.1 to generate a summary of the call",
    version: 1,
    toolArguments: {
      "prompt": "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
    },
    insightToolDefinitionId: 1,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsToolsCreate } from "syllable-sdk/funcs/insightsToolsCreate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsToolsCreate(syllableSDK, {
    name: "summary-tool",
    description: "This tool uses GPT4.1 to generate a summary of the call",
    version: 1,
    toolArguments: {
      "prompt": "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
    },
    insightToolDefinitionId: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.InsightToolInput](../../models/components/insighttoolinput.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightToolOutput](../../models/components/insighttooloutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getById

Get a InsightTool by Name.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.tools.getById({
    toolId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsToolsGetById } from "syllable-sdk/funcs/insightsToolsGetById.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsToolsGetById(syllableSDK, {
    toolId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightToolGetByIdRequest](../../models/operations/insighttoolgetbyidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightToolOutput](../../models/components/insighttooloutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an Insights tool.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.tools.update({
    toolId: 198183,
    insightToolInput: {
      name: "summary-tool",
      description: "This tool uses GPT4.1 to generate a summary of the call",
      version: 1,
      toolArguments: {
        "prompt": "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
      },
      insightToolDefinitionId: 1,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsToolsUpdate } from "syllable-sdk/funcs/insightsToolsUpdate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsToolsUpdate(syllableSDK, {
    toolId: 198183,
    insightToolInput: {
      name: "summary-tool",
      description: "This tool uses GPT4.1 to generate a summary of the call",
      version: 1,
      toolArguments: {
        "prompt": "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
      },
      insightToolDefinitionId: 1,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsToolUpdateRequest](../../models/operations/insightstoolupdaterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightToolOutput](../../models/components/insighttooloutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## insightsToolTest

Manually run the given insight tool against a session and return the response.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.tools.insightsToolTest({
    toolName: "summary-tool",
    sessionId: 283467,
    uploadFileId: 283467,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsToolsInsightsToolTest } from "syllable-sdk/funcs/insightsToolsInsightsToolTest.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsToolsInsightsToolTest(syllableSDK, {
    toolName: "summary-tool",
    sessionId: 283467,
    uploadFileId: 283467,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.InsightToolTestInput](../../models/components/insighttooltestinput.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## insightToolGetDefinitions

Get a InsightTool by Name.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.tools.insightToolGetDefinitions();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsToolsInsightToolGetDefinitions } from "syllable-sdk/funcs/insightsToolsInsightToolGetDefinitions.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsToolsInsightToolGetDefinitions(syllableSDK);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightToolDefinition[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |