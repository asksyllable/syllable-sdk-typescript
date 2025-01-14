# syllable-sdk

Developer-friendly & type-safe TypeScript SDK specifically catered to leverage *syllable-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=syllable-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

SyllableSDK: 
# Syllable Platform SDK

Syllable SDK gives you the power of awesome AI agentry. 🚀

## Overview

The Syllable SDK provides a comprehensive set of tools and APIs to integrate powerful AI  
capabilities into your communication applications. Whether you're building chatbots, virtual
assistants, or any other AI-driven solutions, Syllable SDK has got you covered.

## Features

- **Natural Language Processing (NLP)**: Understand and generate human language with ease.
- **Machine Learning Models**: Leverage pre-trained models or train your own custom models.
- **Speech Recognition**: Convert speech to text and vice versa.
- **Data Analytics**: Analyze and visualize data to gain insights.
- **Integration**: Seamlessly integrate with other services and platforms.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [syllable-sdk](#syllable-sdk)
* [Syllable Platform SDK](#syllable-platform-sdk)
  * [Overview](#overview)
  * [Features](#features)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add syllable-sdk
```

### PNPM

```bash
pnpm add syllable-sdk
```

### Bun

```bash
bun add syllable-sdk
```

### Yarn

```bash
yarn add syllable-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [agents](docs/sdks/agents/README.md)

* [list](docs/sdks/agents/README.md#list) - Agent List
* [create](docs/sdks/agents/README.md#create) - Create Agent
* [update](docs/sdks/agents/README.md#update) - Update Agent
* [getById](docs/sdks/agents/README.md#getbyid) - Get Agent By Id
* [delete](docs/sdks/agents/README.md#delete) - Delete Agent
* [agentGetAvailableVoices](docs/sdks/agents/README.md#agentgetavailablevoices) - Get Available Agent Voices

#### [agents.test](docs/sdks/test/README.md)

* [sendTestMessage](docs/sdks/test/README.md#sendtestmessage) - Send New Message

### [channels](docs/sdks/channels/README.md)

* [list](docs/sdks/channels/README.md#list) - Get Channels
* [delete](docs/sdks/channels/README.md#delete) - Delete Channel Target

#### [channels.targets](docs/sdks/targets/README.md)

* [availableTargets](docs/sdks/targets/README.md#availabletargets) - Available Targets List
* [list](docs/sdks/targets/README.md#list) - Get Channel Targets
* [create](docs/sdks/targets/README.md#create) - Assign A Channel Target
* [getById](docs/sdks/targets/README.md#getbyid) - Get A Channel Target
* [update](docs/sdks/targets/README.md#update) - Edit Channel Target

### [conversations](docs/sdks/conversations/README.md)

* [list](docs/sdks/conversations/README.md#list) - Conversations List

### [customMessages](docs/sdks/custommessages/README.md)

* [list](docs/sdks/custommessages/README.md#list) - Custom Messages List
* [create](docs/sdks/custommessages/README.md#create) - Create Custom Message
* [update](docs/sdks/custommessages/README.md#update) - Update Custom Message
* [getById](docs/sdks/custommessages/README.md#getbyid) - Get Custom Message By Id
* [delete](docs/sdks/custommessages/README.md#delete) - Delete Custom Message

### [dashboards](docs/sdks/dashboards/README.md)

* [postSessionEventsDashboard](docs/sdks/dashboards/README.md#postsessioneventsdashboard) - Post Session Events
* [postSessionSummaryDashboard](docs/sdks/dashboards/README.md#postsessionsummarydashboard) - Post Session Summary
* [postSessionTransfersDashboard](docs/sdks/dashboards/README.md#postsessiontransfersdashboard) - Post Session Transfers
* [postSessionsDashboard](docs/sdks/dashboards/README.md#postsessionsdashboard) - Post Sessions

### [directory](docs/sdks/directory/README.md)

* [list](docs/sdks/directory/README.md#list) - Directory Member List
* [create](docs/sdks/directory/README.md#create) - Create Directory Member
* [getById](docs/sdks/directory/README.md#getbyid) - Get Directory Member By Id
* [update](docs/sdks/directory/README.md#update) - Update Directory Member
* [delete](docs/sdks/directory/README.md#delete) - Delete Directory Member
* [directoryMemberBulkLoad](docs/sdks/directory/README.md#directorymemberbulkload) - Bulk Load Directory Members
* [directoryMemberDownload](docs/sdks/directory/README.md#directorymemberdownload) - Download Directory Members

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Events List

### [prompts](docs/sdks/prompts/README.md)

* [list](docs/sdks/prompts/README.md#list) - Prompt List
* [create](docs/sdks/prompts/README.md#create) - Create Prompt
* [update](docs/sdks/prompts/README.md#update) - Update Prompt
* [getById](docs/sdks/prompts/README.md#getbyid) - Get Prompt By Id
* [delete](docs/sdks/prompts/README.md#delete) - Delete Prompt
* [promptsHistory](docs/sdks/prompts/README.md#promptshistory) - Get Prompt History

### [services](docs/sdks/services/README.md)

* [list](docs/sdks/services/README.md#list) - Service List
* [create](docs/sdks/services/README.md#create) - Create Service
* [update](docs/sdks/services/README.md#update) - Update Service

### [sessionLabels](docs/sdks/sessionlabels/README.md)

* [getById](docs/sdks/sessionlabels/README.md#getbyid) - Get Label By Id
* [create](docs/sdks/sessionlabels/README.md#create) - Create Label
* [list](docs/sdks/sessionlabels/README.md#list) - Session Labels List

### [sessions](docs/sdks/sessions/README.md)

* [list](docs/sdks/sessions/README.md#list) - Sessions List
* [getById](docs/sdks/sessions/README.md#getbyid) - Get A Single Session By Id
* [generateSessionRecordingUrls](docs/sdks/sessions/README.md#generatesessionrecordingurls) - Generate Recording Urls
* [sessionRecordingStream](docs/sdks/sessions/README.md#sessionrecordingstream) - Stream Recording

#### [sessions.transcript](docs/sdks/transcript/README.md)

* [getById](docs/sdks/transcript/README.md#getbyid) - Get Session Transcript By Id


### [tools](docs/sdks/tools/README.md)

* [list](docs/sdks/tools/README.md#list) - Tool List
* [create](docs/sdks/tools/README.md#create) - Create Tool
* [update](docs/sdks/tools/README.md#update) - Update Tool
* [getByName](docs/sdks/tools/README.md#getbyname) - Tool Info

### [v1](docs/sdks/v1/README.md)

* [postSessionEventsDashboard](docs/sdks/v1/README.md#postsessioneventsdashboard) - Post Session Events
* [postSessionSummaryDashboard](docs/sdks/v1/README.md#postsessionsummarydashboard) - Post Session Summary
* [postSessionTransfersDashboard](docs/sdks/v1/README.md#postsessiontransfersdashboard) - Post Session Transfers
* [postSessionsDashboard](docs/sdks/v1/README.md#postsessionsdashboard) - Post Sessions

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentsAgentGetAvailableVoices`](docs/sdks/agents/README.md#agentgetavailablevoices) - Get Available Agent Voices
- [`agentsCreate`](docs/sdks/agents/README.md#create) - Create Agent
- [`agentsDelete`](docs/sdks/agents/README.md#delete) - Delete Agent
- [`agentsGetById`](docs/sdks/agents/README.md#getbyid) - Get Agent By Id
- [`agentsList`](docs/sdks/agents/README.md#list) - Agent List
- [`agentsTestSendTestMessage`](docs/sdks/test/README.md#sendtestmessage) - Send New Message
- [`agentsUpdate`](docs/sdks/agents/README.md#update) - Update Agent
- [`channelsDelete`](docs/sdks/channels/README.md#delete) - Delete Channel Target
- [`channelsList`](docs/sdks/channels/README.md#list) - Get Channels
- [`channelsTargetsAvailableTargets`](docs/sdks/targets/README.md#availabletargets) - Available Targets List
- [`channelsTargetsCreate`](docs/sdks/targets/README.md#create) - Assign A Channel Target
- [`channelsTargetsGetById`](docs/sdks/targets/README.md#getbyid) - Get A Channel Target
- [`channelsTargetsList`](docs/sdks/targets/README.md#list) - Get Channel Targets
- [`channelsTargetsUpdate`](docs/sdks/targets/README.md#update) - Edit Channel Target
- [`conversationsList`](docs/sdks/conversations/README.md#list) - Conversations List
- [`customMessagesCreate`](docs/sdks/custommessages/README.md#create) - Create Custom Message
- [`customMessagesDelete`](docs/sdks/custommessages/README.md#delete) - Delete Custom Message
- [`customMessagesGetById`](docs/sdks/custommessages/README.md#getbyid) - Get Custom Message By Id
- [`customMessagesList`](docs/sdks/custommessages/README.md#list) - Custom Messages List
- [`customMessagesUpdate`](docs/sdks/custommessages/README.md#update) - Update Custom Message
- [`dashboardsPostSessionEventsDashboard`](docs/sdks/dashboards/README.md#postsessioneventsdashboard) - Post Session Events
- [`dashboardsPostSessionsDashboard`](docs/sdks/dashboards/README.md#postsessionsdashboard) - Post Sessions
- [`dashboardsPostSessionSummaryDashboard`](docs/sdks/dashboards/README.md#postsessionsummarydashboard) - Post Session Summary
- [`dashboardsPostSessionTransfersDashboard`](docs/sdks/dashboards/README.md#postsessiontransfersdashboard) - Post Session Transfers
- [`directoryCreate`](docs/sdks/directory/README.md#create) - Create Directory Member
- [`directoryDelete`](docs/sdks/directory/README.md#delete) - Delete Directory Member
- [`directoryDirectoryMemberBulkLoad`](docs/sdks/directory/README.md#directorymemberbulkload) - Bulk Load Directory Members
- [`directoryDirectoryMemberDownload`](docs/sdks/directory/README.md#directorymemberdownload) - Download Directory Members
- [`directoryGetById`](docs/sdks/directory/README.md#getbyid) - Get Directory Member By Id
- [`directoryList`](docs/sdks/directory/README.md#list) - Directory Member List
- [`directoryUpdate`](docs/sdks/directory/README.md#update) - Update Directory Member
- [`eventsList`](docs/sdks/events/README.md#list) - Events List
- [`promptsCreate`](docs/sdks/prompts/README.md#create) - Create Prompt
- [`promptsDelete`](docs/sdks/prompts/README.md#delete) - Delete Prompt
- [`promptsGetById`](docs/sdks/prompts/README.md#getbyid) - Get Prompt By Id
- [`promptsList`](docs/sdks/prompts/README.md#list) - Prompt List
- [`promptsPromptsHistory`](docs/sdks/prompts/README.md#promptshistory) - Get Prompt History
- [`promptsUpdate`](docs/sdks/prompts/README.md#update) - Update Prompt
- [`servicesCreate`](docs/sdks/services/README.md#create) - Create Service
- [`servicesList`](docs/sdks/services/README.md#list) - Service List
- [`servicesUpdate`](docs/sdks/services/README.md#update) - Update Service
- [`sessionLabelsCreate`](docs/sdks/sessionlabels/README.md#create) - Create Label
- [`sessionLabelsGetById`](docs/sdks/sessionlabels/README.md#getbyid) - Get Label By Id
- [`sessionLabelsList`](docs/sdks/sessionlabels/README.md#list) - Session Labels List
- [`sessionsGenerateSessionRecordingUrls`](docs/sdks/sessions/README.md#generatesessionrecordingurls) - Generate Recording Urls
- [`sessionsGetById`](docs/sdks/sessions/README.md#getbyid) - Get A Single Session By Id
- [`sessionsList`](docs/sdks/sessions/README.md#list) - Sessions List
- [`sessionsSessionRecordingStream`](docs/sdks/sessions/README.md#sessionrecordingstream) - Stream Recording
- [`sessionsTranscriptGetById`](docs/sdks/transcript/README.md#getbyid) - Get Session Transcript By Id
- [`toolsCreate`](docs/sdks/tools/README.md#create) - Create Tool
- [`toolsGetByName`](docs/sdks/tools/README.md#getbyname) - Tool Info
- [`toolsList`](docs/sdks/tools/README.md#list) - Tool List
- [`toolsUpdate`](docs/sdks/tools/README.md#update) - Update Tool
- [`v1PostSessionEventsDashboard`](docs/sdks/v1/README.md#postsessioneventsdashboard) - Post Session Events
- [`v1PostSessionsDashboard`](docs/sdks/v1/README.md#postsessionsdashboard) - Post Sessions
- [`v1PostSessionSummaryDashboard`](docs/sdks/v1/README.md#postsessionsummarydashboard) - Post Session Summary
- [`v1PostSessionTransfersDashboard`](docs/sdks/v1/README.md#postsessiontransfersdashboard) - Post Session Transfers

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.directory.directoryMemberBulkLoad({
    file: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.HTTPValidationError | 422         | application/json |
| errors.SDKError            | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { SyllableSDK } from "syllable-sdk";
import {
  HTTPValidationError,
  SDKValidationError,
} from "syllable-sdk/models/errors";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  let result;
  try {
    result = await syllableSDK.agents.list({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof HTTPValidationError): {
        // Handle err.data$: HTTPValidationErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                          |
| --- | ------------------------------- |
| 0   | `https://api.syllable.ai`       |
| 1   | `https://trial.api.syllable.ai` |

#### Example

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  serverIdx: 1,
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({});

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  serverURL: "https://api.syllable.ai",
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SyllableSDK } from "syllable-sdk";
import { HTTPClient } from "syllable-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SyllableSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type   | Scheme  | Environment Variable         |
| -------------- | ------ | ------- | ---------------------------- |
| `apiKeyHeader` | apiKey | API key | `SYLLABLESDK_API_KEY_HEADER` |

To authenticate with the API the `apiKeyHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.agents.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SyllableSDK } from "syllable-sdk";

const sdk = new SyllableSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SYLLABLESDK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=syllable-sdk&utm_campaign=typescript)
