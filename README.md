# syllable-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *syllable-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=syllable-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

SyllableSDK: 
# Syllble Platform SDK

Syllble SDK gives you the power of awesome AI agentry. 🚀

## Overview

The Syllble SDK provides a comprehensive set of tools and APIs to integrate powerful AI capabilities into your applications. Whether you're building chatbots, virtual assistants, or any other AI-driven solutions, Syllble SDK has got you covered.

## Features

- **Natural Language Processing (NLP)**: Understand and generate human language with ease.
- **Machine Learning Models**: Leverage pre-trained models or train your own custom models.
- **Speech Recognition**: Convert speech to text and vice versa.
- **Image Recognition**: Identify objects, faces, and scenes in images.
- **Data Analytics**: Analyze and visualize data to gain insights.
- **Integration**: Seamlessly integrate with other services and platforms.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

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

#### [agents.chats](docs/sdks/chats/README.md)

* [chatsSendMessage](docs/sdks/chats/README.md#chatssendmessage) - Send New Message

### [channels](docs/sdks/channels/README.md)

* [list](docs/sdks/channels/README.md#list) - Get Channels
* [delete](docs/sdks/channels/README.md#delete) - Delete Channel

#### [channels.targets](docs/sdks/targets/README.md)

* [availableTargets](docs/sdks/targets/README.md#availabletargets) - Available Targets List
* [list](docs/sdks/targets/README.md#list) - Get Channel Targets
* [create](docs/sdks/targets/README.md#create) - Assign A Channel Target
* [getById](docs/sdks/targets/README.md#getbyid) - Get A Channel Target
* [update](docs/sdks/targets/README.md#update) - Edit Channel Target

### [conversations](docs/sdks/conversations/README.md)

* [list](docs/sdks/conversations/README.md#list) - Conversations List
* [getById](docs/sdks/conversations/README.md#getbyid) - Get Conversation By Id

### [dashboards](docs/sdks/dashboards/README.md)

* [totalCallVolumeByWeekday](docs/sdks/dashboards/README.md#totalcallvolumebyweekday) - Get Total Call Volume By Weekday
* [getTotalCallVolumeByHour](docs/sdks/dashboards/README.md#gettotalcallvolumebyhour) - Get Total Call Volume By Hour
* [getWeeklyCallVolumeByWeekday](docs/sdks/dashboards/README.md#getweeklycallvolumebyweekday) - Get Weekly Call Volume By Weekday
* [getDailyCallVolumeByHour](docs/sdks/dashboards/README.md#getdailycallvolumebyhour) - Get Daily Call Volume By Hour
* [getMonthlyCallVolumeByWeek](docs/sdks/dashboards/README.md#getmonthlycallvolumebyweek) - Get Monthly Call Volume By Week
* [getMonthlyCallVolumeByDay](docs/sdks/dashboards/README.md#getmonthlycallvolumebyday) - Get Monthly Call Volume By Day
* [getSessionSummary](docs/sdks/dashboards/README.md#getsessionsummary) - Get Session Summary
* [getSessionAgents](docs/sdks/dashboards/README.md#getsessionagents) - Get Agents

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Events List

### [greetings](docs/sdks/greetings/README.md)

* [list](docs/sdks/greetings/README.md#list) - Greetings List
* [create](docs/sdks/greetings/README.md#create) - Create Greeting
* [update](docs/sdks/greetings/README.md#update) - Update Greeting
* [getById](docs/sdks/greetings/README.md#getbyid) - Get Greeting By Id
* [delete](docs/sdks/greetings/README.md#delete) - Delete Greeting

### [organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - Organizations List

### [prompts](docs/sdks/prompts/README.md)

* [list](docs/sdks/prompts/README.md#list) - Prompt List
* [create](docs/sdks/prompts/README.md#create) - Create Prompt
* [update](docs/sdks/prompts/README.md#update) - Update Prompt
* [getById](docs/sdks/prompts/README.md#getbyid) - Get Prompt By Id
* [delete](docs/sdks/prompts/README.md#delete) - Delete Prompt

### [sessions](docs/sdks/sessions/README.md)

* [list](docs/sdks/sessions/README.md#list) - Sessions List


### [tools](docs/sdks/tools/README.md)

* [list](docs/sdks/tools/README.md#list) - Tool List
* [getByName](docs/sdks/tools/README.md#getbyname) - Tool Info

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

- [`agentsChatsChatsSendMessage`](docs/sdks/chats/README.md#chatssendmessage) - Send New Message
- [`agentsCreate`](docs/sdks/agents/README.md#create) - Create Agent
- [`agentsDelete`](docs/sdks/agents/README.md#delete) - Delete Agent
- [`agentsGetById`](docs/sdks/agents/README.md#getbyid) - Get Agent By Id
- [`agentsList`](docs/sdks/agents/README.md#list) - Agent List
- [`agentsUpdate`](docs/sdks/agents/README.md#update) - Update Agent
- [`channelsDelete`](docs/sdks/channels/README.md#delete) - Delete Channel
- [`channelsList`](docs/sdks/channels/README.md#list) - Get Channels
- [`channelsTargetsAvailableTargets`](docs/sdks/targets/README.md#availabletargets) - Available Targets List
- [`channelsTargetsCreate`](docs/sdks/targets/README.md#create) - Assign A Channel Target
- [`channelsTargetsGetById`](docs/sdks/targets/README.md#getbyid) - Get A Channel Target
- [`channelsTargetsList`](docs/sdks/targets/README.md#list) - Get Channel Targets
- [`channelsTargetsUpdate`](docs/sdks/targets/README.md#update) - Edit Channel Target
- [`conversationsGetById`](docs/sdks/conversations/README.md#getbyid) - Get Conversation By Id
- [`conversationsList`](docs/sdks/conversations/README.md#list) - Conversations List
- [`dashboardsGetDailyCallVolumeByHour`](docs/sdks/dashboards/README.md#getdailycallvolumebyhour) - Get Daily Call Volume By Hour
- [`dashboardsGetMonthlyCallVolumeByDay`](docs/sdks/dashboards/README.md#getmonthlycallvolumebyday) - Get Monthly Call Volume By Day
- [`dashboardsGetMonthlyCallVolumeByWeek`](docs/sdks/dashboards/README.md#getmonthlycallvolumebyweek) - Get Monthly Call Volume By Week
- [`dashboardsGetSessionAgents`](docs/sdks/dashboards/README.md#getsessionagents) - Get Agents
- [`dashboardsGetSessionSummary`](docs/sdks/dashboards/README.md#getsessionsummary) - Get Session Summary
- [`dashboardsGetTotalCallVolumeByHour`](docs/sdks/dashboards/README.md#gettotalcallvolumebyhour) - Get Total Call Volume By Hour
- [`dashboardsGetWeeklyCallVolumeByWeekday`](docs/sdks/dashboards/README.md#getweeklycallvolumebyweekday) - Get Weekly Call Volume By Weekday
- [`dashboardsTotalCallVolumeByWeekday`](docs/sdks/dashboards/README.md#totalcallvolumebyweekday) - Get Total Call Volume By Weekday
- [`eventsList`](docs/sdks/events/README.md#list) - Events List
- [`greetingsCreate`](docs/sdks/greetings/README.md#create) - Create Greeting
- [`greetingsDelete`](docs/sdks/greetings/README.md#delete) - Delete Greeting
- [`greetingsGetById`](docs/sdks/greetings/README.md#getbyid) - Get Greeting By Id
- [`greetingsList`](docs/sdks/greetings/README.md#list) - Greetings List
- [`greetingsUpdate`](docs/sdks/greetings/README.md#update) - Update Greeting
- [`organizationsList`](docs/sdks/organizations/README.md#list) - Organizations List
- [`promptsCreate`](docs/sdks/prompts/README.md#create) - Create Prompt
- [`promptsDelete`](docs/sdks/prompts/README.md#delete) - Delete Prompt
- [`promptsGetById`](docs/sdks/prompts/README.md#getbyid) - Get Prompt By Id
- [`promptsList`](docs/sdks/prompts/README.md#list) - Prompt List
- [`promptsUpdate`](docs/sdks/prompts/README.md#update) - Update Prompt
- [`sessionsList`](docs/sdks/sessions/README.md#list) - Sessions List
- [`toolsGetByName`](docs/sdks/tools/README.md#getbyname) - Tool Info
- [`toolsList`](docs/sdks/tools/README.md#list) - Tool List

</details>
<!-- End Standalone functions [standalone-funcs] -->

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

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

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
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
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
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost:8001` | None |

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  serverIdx: 0,
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

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  serverURL: "http://localhost:8001",
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

| Name                         | Type                         | Scheme                       | Environment Variable         |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `apiKeyHeader`               | apiKey                       | API key                      | `SYLLABLESDK_API_KEY_HEADER` |

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
