# Chats
(*agents.chats*)

## Overview

### Available Operations

* [chatsSendMessage](#chatssendmessage) - Send New Message

## chatsSendMessage

Send a new message

### Example Usage

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.chats.chatsSendMessage({
    serviceName: "<value>",
    sourceName: "<value>",
    chatId: "<id>",
    agentId: "<id>",
    orgName: "<value>",
    text: "<value>",
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
import { agentsChatsChatsSendMessage } from "syllable-sdk/funcs/agentsChatsChatsSendMessage.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await agentsChatsChatsSendMessage(syllableSDK, {
    serviceName: "<value>",
    sourceName: "<value>",
    chatId: "<id>",
    agentId: "<id>",
    orgName: "<value>",
    text: "<value>",
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
| `request`                                                                                                                                                                      | [components.ChatMessage](../../models/components/chatmessage.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatMessageResponse](../../models/components/chatmessageresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |