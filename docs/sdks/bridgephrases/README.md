# BridgePhrases

## Overview

### Available Operations

* [list](#list) - List Bridge Phrases
* [create](#create) - Create Bridge Phrases
* [update](#update) - Update Bridge Phrases
* [getById](#getbyid) - Get Bridge Phrases
* [delete](#delete) - Delete Bridge Phrases

## list

Fetch bridge phrases configs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bridge_phrases_list" method="get" path="/api/v1/bridge_phrases/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.bridgePhrases.list({
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

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { bridgePhrasesList } from "syllable-sdk/funcs/bridgePhrasesList.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await bridgePhrasesList(syllableSDK, {
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bridgePhrasesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BridgePhrasesListRequest](../../models/operations/bridgephraseslistrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseBridgePhrasesResponse](../../models/components/listresponsebridgephrasesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new bridge phrases config.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bridge_phrases_create" method="post" path="/api/v1/bridge_phrases/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.bridgePhrases.create({
    name: "Default Bridge Phrases",
    description: "Standard hold phrases for inbound line.",
    config: {
      phrases: {
        messages: [
          "One moment, please.",
          "Let me check on that for you.",
        ],
        localized: {
          "es-US": {
            messages: [
              "Un momento, por favor.",
            ],
          },
          "fr-FR": {
            messages: [
              "Un instant, je vous en prie.",
            ],
          },
        },
      },
      tools: [
        {
          toolName: "<value>",
          phrases: {
            messages: [
              "One moment, please.",
              "Let me check on that for you.",
            ],
            localized: {
              "es-US": {
                messages: [
                  "Un momento, por favor.",
                ],
              },
              "fr-FR": {
                messages: [
                  "Un instant, je vous en prie.",
                ],
              },
            },
          },
        },
      ],
      randomizeBridgePhrases: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { bridgePhrasesCreate } from "syllable-sdk/funcs/bridgePhrasesCreate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await bridgePhrasesCreate(syllableSDK, {
    name: "Default Bridge Phrases",
    description: "Standard hold phrases for inbound line.",
    config: {
      phrases: {
        messages: [
          "One moment, please.",
          "Let me check on that for you.",
        ],
        localized: {
          "es-US": {
            messages: [
              "Un momento, por favor.",
            ],
          },
          "fr-FR": {
            messages: [
              "Un instant, je vous en prie.",
            ],
          },
        },
      },
      tools: [
        {
          toolName: "<value>",
          phrases: {
            messages: [
              "One moment, please.",
              "Let me check on that for you.",
            ],
            localized: {
              "es-US": {
                messages: [
                  "Un momento, por favor.",
                ],
              },
              "fr-FR": {
                messages: [
                  "Un instant, je vous en prie.",
                ],
              },
            },
          },
        },
      ],
      randomizeBridgePhrases: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bridgePhrasesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BridgePhrasesCreateRequest](../../models/components/bridgephrasescreaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BridgePhrasesResponse](../../models/components/bridgephrasesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an existing bridge phrases config.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bridge_phrases_update" method="put" path="/api/v1/bridge_phrases/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.bridgePhrases.update({
    name: "Default Bridge Phrases",
    description: "Standard hold phrases for inbound line.",
    config: {
      phrases: {
        messages: [
          "One moment, please.",
          "Let me check on that for you.",
        ],
        localized: {
          "es-US": {
            messages: [
              "Un momento, por favor.",
            ],
          },
          "fr-FR": {
            messages: [
              "Un instant, je vous en prie.",
            ],
          },
        },
      },
      tools: [
        {
          toolName: "<value>",
          phrases: {
            messages: [
              "One moment, please.",
              "Let me check on that for you.",
            ],
            localized: {
              "es-US": {
                messages: [
                  "Un momento, por favor.",
                ],
              },
              "fr-FR": {
                messages: [
                  "Un instant, je vous en prie.",
                ],
              },
            },
          },
        },
      ],
      randomizeBridgePhrases: true,
    },
    id: 1,
    editComments: "Added Spanish overrides for the transfer tool.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { bridgePhrasesUpdate } from "syllable-sdk/funcs/bridgePhrasesUpdate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await bridgePhrasesUpdate(syllableSDK, {
    name: "Default Bridge Phrases",
    description: "Standard hold phrases for inbound line.",
    config: {
      phrases: {
        messages: [
          "One moment, please.",
          "Let me check on that for you.",
        ],
        localized: {
          "es-US": {
            messages: [
              "Un momento, por favor.",
            ],
          },
          "fr-FR": {
            messages: [
              "Un instant, je vous en prie.",
            ],
          },
        },
      },
      tools: [
        {
          toolName: "<value>",
          phrases: {
            messages: [
              "One moment, please.",
              "Let me check on that for you.",
            ],
            localized: {
              "es-US": {
                messages: [
                  "Un momento, por favor.",
                ],
              },
              "fr-FR": {
                messages: [
                  "Un instant, je vous en prie.",
                ],
              },
            },
          },
        },
      ],
      randomizeBridgePhrases: true,
    },
    id: 1,
    editComments: "Added Spanish overrides for the transfer tool.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bridgePhrasesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BridgePhrasesUpdateRequest](../../models/components/bridgephrasesupdaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BridgePhrasesResponse](../../models/components/bridgephrasesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getById

Fetch a given bridge phrases config.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bridge_phrases_get_by_id" method="get" path="/api/v1/bridge_phrases/{bridge_phrases_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.bridgePhrases.getById({
    bridgePhrasesId: 627472,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { bridgePhrasesGetById } from "syllable-sdk/funcs/bridgePhrasesGetById.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await bridgePhrasesGetById(syllableSDK, {
    bridgePhrasesId: 627472,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bridgePhrasesGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BridgePhrasesGetByIdRequest](../../models/operations/bridgephrasesgetbyidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BridgePhrasesResponse](../../models/components/bridgephrasesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a bridge phrases config.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bridge_phrases_delete" method="delete" path="/api/v1/bridge_phrases/{bridge_phrases_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.bridgePhrases.delete({
    bridgePhrasesId: 722051,
    reason: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { bridgePhrasesDelete } from "syllable-sdk/funcs/bridgePhrasesDelete.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await bridgePhrasesDelete(syllableSDK, {
    bridgePhrasesId: 722051,
    reason: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bridgePhrasesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BridgePhrasesDeleteRequest](../../models/operations/bridgephrasesdeleterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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