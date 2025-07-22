# Services
(*services*)

## Overview

Operations related to service configuration. A service is a collection of           tools. You can specify an authentication method and values on a service, and any linked           tools will use that auth information to generate headers for HTTP calls.

### Available Operations

* [list](#list) - Service List
* [create](#create) - Create Service
* [update](#update) - Update Service
* [getById](#getbyid) - Get Service By Id
* [delete](#delete) - Delete Service

## list

List the existing services

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.services.list({
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
import { servicesList } from "syllable-sdk/funcs/servicesList.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await servicesList(syllableSDK, {
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
| `request`                                                                                                                                                                      | [operations.ServiceListRequest](../../models/operations/servicelistrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseServiceResponse](../../models/components/listresponseserviceresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new service.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.services.create({
    name: "Weather tools",
    description: "Service containing tools for fetching weather information",
    authType: "basic",
    authValues: {
      "0": "{",
      "1": "\"",
      "2": "u",
      "3": "s",
      "4": "e",
      "5": "r",
      "6": "n",
      "7": "a",
      "8": "m",
      "9": "e",
      "10": "\"",
      "11": ":",
      "12": " ",
      "13": "\"",
      "14": "m",
      "15": "y",
      "16": "-",
      "17": "u",
      "18": "s",
      "19": "e",
      "20": "r",
      "21": "n",
      "22": "a",
      "23": "m",
      "24": "e",
      "25": "\"",
      "26": ",",
      "27": " ",
      "28": "\"",
      "29": "p",
      "30": "a",
      "31": "s",
      "32": "s",
      "33": "w",
      "34": "o",
      "35": "r",
      "36": "d",
      "37": "\"",
      "38": ":",
      "39": " ",
      "40": "\"",
      "41": "m",
      "42": "y",
      "43": "-",
      "44": "p",
      "45": "a",
      "46": "s",
      "47": "s",
      "48": "w",
      "49": "o",
      "50": "r",
      "51": "d",
      "52": "\"",
      "53": "}",
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
import { servicesCreate } from "syllable-sdk/funcs/servicesCreate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await servicesCreate(syllableSDK, {
    name: "Weather tools",
    description: "Service containing tools for fetching weather information",
    authType: "basic",
    authValues: {
      "0": "{",
      "1": "\"",
      "2": "u",
      "3": "s",
      "4": "e",
      "5": "r",
      "6": "n",
      "7": "a",
      "8": "m",
      "9": "e",
      "10": "\"",
      "11": ":",
      "12": " ",
      "13": "\"",
      "14": "m",
      "15": "y",
      "16": "-",
      "17": "u",
      "18": "s",
      "19": "e",
      "20": "r",
      "21": "n",
      "22": "a",
      "23": "m",
      "24": "e",
      "25": "\"",
      "26": ",",
      "27": " ",
      "28": "\"",
      "29": "p",
      "30": "a",
      "31": "s",
      "32": "s",
      "33": "w",
      "34": "o",
      "35": "r",
      "36": "d",
      "37": "\"",
      "38": ":",
      "39": " ",
      "40": "\"",
      "41": "m",
      "42": "y",
      "43": "-",
      "44": "p",
      "45": "a",
      "46": "s",
      "47": "s",
      "48": "w",
      "49": "o",
      "50": "r",
      "51": "d",
      "52": "\"",
      "53": "}",
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
| `request`                                                                                                                                                                      | [components.ServiceCreateRequest](../../models/components/servicecreaterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ServiceResponse](../../models/components/serviceresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an existing service.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.services.update({
    name: "Weather tools",
    description: "Service containing tools for fetching weather information",
    authType: "basic",
    authValues: {
      "0": "{",
      "1": "\"",
      "2": "u",
      "3": "s",
      "4": "e",
      "5": "r",
      "6": "n",
      "7": "a",
      "8": "m",
      "9": "e",
      "10": "\"",
      "11": ":",
      "12": " ",
      "13": "\"",
      "14": "m",
      "15": "y",
      "16": "-",
      "17": "u",
      "18": "s",
      "19": "e",
      "20": "r",
      "21": "n",
      "22": "a",
      "23": "m",
      "24": "e",
      "25": "\"",
      "26": ",",
      "27": " ",
      "28": "\"",
      "29": "p",
      "30": "a",
      "31": "s",
      "32": "s",
      "33": "w",
      "34": "o",
      "35": "r",
      "36": "d",
      "37": "\"",
      "38": ":",
      "39": " ",
      "40": "\"",
      "41": "m",
      "42": "y",
      "43": "-",
      "44": "p",
      "45": "a",
      "46": "s",
      "47": "s",
      "48": "w",
      "49": "o",
      "50": "r",
      "51": "d",
      "52": "\"",
      "53": "}",
    },
    id: 1,
    lastUpdatedComments: "Updated description to correct typo",
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
import { servicesUpdate } from "syllable-sdk/funcs/servicesUpdate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await servicesUpdate(syllableSDK, {
    name: "Weather tools",
    description: "Service containing tools for fetching weather information",
    authType: "basic",
    authValues: {
      "0": "{",
      "1": "\"",
      "2": "u",
      "3": "s",
      "4": "e",
      "5": "r",
      "6": "n",
      "7": "a",
      "8": "m",
      "9": "e",
      "10": "\"",
      "11": ":",
      "12": " ",
      "13": "\"",
      "14": "m",
      "15": "y",
      "16": "-",
      "17": "u",
      "18": "s",
      "19": "e",
      "20": "r",
      "21": "n",
      "22": "a",
      "23": "m",
      "24": "e",
      "25": "\"",
      "26": ",",
      "27": " ",
      "28": "\"",
      "29": "p",
      "30": "a",
      "31": "s",
      "32": "s",
      "33": "w",
      "34": "o",
      "35": "r",
      "36": "d",
      "37": "\"",
      "38": ":",
      "39": " ",
      "40": "\"",
      "41": "m",
      "42": "y",
      "43": "-",
      "44": "p",
      "45": "a",
      "46": "s",
      "47": "s",
      "48": "w",
      "49": "o",
      "50": "r",
      "51": "d",
      "52": "\"",
      "53": "}",
    },
    id: 1,
    lastUpdatedComments: "Updated description to correct typo",
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
| `request`                                                                                                                                                                      | [components.ServiceUpdateRequest](../../models/components/serviceupdaterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ServiceResponse](../../models/components/serviceresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getById

Get a service by its ID

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.services.getById({
    serviceId: 931598,
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
import { servicesGetById } from "syllable-sdk/funcs/servicesGetById.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await servicesGetById(syllableSDK, {
    serviceId: 931598,
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
| `request`                                                                                                                                                                      | [operations.ServicesGetByIdRequest](../../models/operations/servicesgetbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ServiceResponse](../../models/components/serviceresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a service. A service with linked tools cannot be deleted.

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.services.delete({
    serviceId: 545907,
    reason: "<value>",
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
import { servicesDelete } from "syllable-sdk/funcs/servicesDelete.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await servicesDelete(syllableSDK, {
    serviceId: 545907,
    reason: "<value>",
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
| `request`                                                                                                                                                                      | [operations.ServiceDeleteRequest](../../models/operations/servicedeleterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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