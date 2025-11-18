# CustomMessages
(*customMessages*)

## Overview

Operations related to custom message configuration.           A custom message is a pre-configured message delivered by an agent as a greeting at the           beginning of a conversation. Multiple agents can use the same custom mesasage. A custom           message has one or more rules defined, which allow for different messages to be           dynamically selected and delivered at runtime based on the current time and either           date or day of the week. For more information, see           [Console docs](https://docs.syllable.ai/Resources/Messages).

### Available Operations

* [list](#list) - Custom Messages List
* [create](#create) - Create Custom Message
* [update](#update) - Update Custom Message
* [getById](#getbyid) - Get Custom Message By Id
* [delete](#delete) - Delete Custom Message

## list

List the existing custom_messages

### Example Usage

<!-- UsageSnippet language="typescript" operationID="custom_messages_list" method="get" path="/api/v1/custom_messages/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.customMessages.list({
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
import { customMessagesList } from "syllable-sdk/funcs/customMessagesList.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await customMessagesList(syllableSDK, {
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
    console.log("customMessagesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomMessagesListRequest](../../models/operations/custommessageslistrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseCustomMessageResponse](../../models/components/listresponsecustommessageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new custom message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="custom_messages_create" method="post" path="/api/v1/custom_messages/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.customMessages.create({
    name: "Customer service greeting",
    text: "Hello and thank you for calling customer service. How can I help you today?",
    label: "Customer service",
    rules: [
      {
        description: "Closed on New Year's Day",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        date: "2025-01-01",
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed today.",
      },
      {
        description: "Closed on weekends",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        daysOfWeek: [
          "sa",
          "su",
        ],
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed on weekends.",
      },
    ],
    config: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { customMessagesCreate } from "syllable-sdk/funcs/customMessagesCreate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await customMessagesCreate(syllableSDK, {
    name: "Customer service greeting",
    text: "Hello and thank you for calling customer service. How can I help you today?",
    label: "Customer service",
    rules: [
      {
        description: "Closed on New Year's Day",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        date: "2025-01-01",
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed today.",
      },
      {
        description: "Closed on weekends",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        daysOfWeek: [
          "sa",
          "su",
        ],
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed on weekends.",
      },
    ],
    config: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMessagesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomMessageCreateRequest](../../models/components/custommessagecreaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomMessageResponse](../../models/components/custommessageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update a custom message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="custom_messages_update" method="put" path="/api/v1/custom_messages/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.customMessages.update({
    name: "Customer service greeting",
    text: "Hello and thank you for calling customer service. How can I help you today?",
    label: "Customer service",
    rules: [
      {
        description: "Closed on New Year's Day",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        date: "2025-01-01",
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed today.",
      },
      {
        description: "Closed on weekends",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        daysOfWeek: [
          "sa",
          "su",
        ],
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed on weekends.",
      },
    ],
    config: {},
    id: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { customMessagesUpdate } from "syllable-sdk/funcs/customMessagesUpdate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await customMessagesUpdate(syllableSDK, {
    name: "Customer service greeting",
    text: "Hello and thank you for calling customer service. How can I help you today?",
    label: "Customer service",
    rules: [
      {
        description: "Closed on New Year's Day",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        date: "2025-01-01",
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed today.",
      },
      {
        description: "Closed on weekends",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        daysOfWeek: [
          "sa",
          "su",
        ],
        invert: false,
        text: "Hello, thank you for calling. Sorry, we're closed on weekends.",
      },
    ],
    config: {},
    id: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMessagesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomMessageUpdateRequest](../../models/components/custommessageupdaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomMessageResponse](../../models/components/custommessageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getById

Get the custom message by its ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="custom_message_get_by_id" method="get" path="/api/v1/custom_messages/{custom_message_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.customMessages.getById({
    customMessageId: 909433,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { customMessagesGetById } from "syllable-sdk/funcs/customMessagesGetById.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await customMessagesGetById(syllableSDK, {
    customMessageId: 909433,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMessagesGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomMessageGetByIdRequest](../../models/operations/custommessagegetbyidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomMessageResponse](../../models/components/custommessageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete custom message by ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="custom_messages_delete" method="delete" path="/api/v1/custom_messages/{custom_message_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.customMessages.delete({
    customMessageId: 729986,
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
import { customMessagesDelete } from "syllable-sdk/funcs/customMessagesDelete.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await customMessagesDelete(syllableSDK, {
    customMessageId: 729986,
    reason: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMessagesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomMessagesDeleteRequest](../../models/operations/custommessagesdeleterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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