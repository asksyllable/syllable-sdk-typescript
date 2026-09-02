# Insights.Workflows

## Overview

Operations related to insights workflows. An workflow is series of tool           invocations that processes conversation data to extract information and generate           reports.

### Available Operations

* [list](#list) - Insight Workflow List
* [create](#create) - Create Insight Workflow
* [getById](#getbyid) - Get Insight Workflow By Id
* [update](#update) - Update Insights Workflow
* [delete](#delete) - Delete Insights Workflow
* [listExecutions](#listexecutions) - List Insight Workflow Executions
* [listSessions](#listsessions) - List Insight Workflow Sessions
* [executionsSummary](#executionssummary) - Insight Workflow Executions Summary
* [inactivate](#inactivate) - Inactivate Insights Workflow
* [activate](#activate) - Activate Insights Workflow
* [queueWork](#queuework) - Queue Insights Workflow For Sessions/Files

## list

List the existing insight_workflows

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_list" method="get" path="/api/v1/insights/workflows/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.list({
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
import { insightsWorkflowsList } from "syllable-sdk/funcs/insightsWorkflowsList.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsList(syllableSDK, {
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
    console.log("insightsWorkflowsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowListRequest](../../models/operations/insightsworkflowlistrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseInsightWorkflowOutput](../../models/components/listresponseinsightworkflowoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new tool in the insights

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_create" method="post" path="/api/v1/insights/workflows/" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.create({
    name: "summary-workflow",
    source: "agent",
    description: "Default workflow - generates a summary of the call",
    insightToolIds: [
      1,
    ],
    conditions: {
      minDuration: 120,
      maxDuration: 600,
      sampleRate: 0.1,
      agentList: [
        866324,
        826325,
      ],
      promptList: [
        "123324",
      ],
      folderList: [
        16754,
        67535,
      ],
      sheetInfo: {
        "sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",
        "sheet_name": "Q1 Sales Data",
      },
    },
    startDatetime: new Date("2026-02-03T00:00:00Z"),
    endDatetime: new Date("2026-02-04T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsWorkflowsCreate } from "syllable-sdk/funcs/insightsWorkflowsCreate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsCreate(syllableSDK, {
    name: "summary-workflow",
    source: "agent",
    description: "Default workflow - generates a summary of the call",
    insightToolIds: [
      1,
    ],
    conditions: {
      minDuration: 120,
      maxDuration: 600,
      sampleRate: 0.1,
      agentList: [
        866324,
        826325,
      ],
      promptList: [
        "123324",
      ],
      folderList: [
        16754,
        67535,
      ],
      sheetInfo: {
        "sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",
        "sheet_name": "Q1 Sales Data",
      },
    },
    startDatetime: new Date("2026-02-03T00:00:00Z"),
    endDatetime: new Date("2026-02-04T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.InsightWorkflowInput](../../models/components/insightworkflowinput.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getById

Get a InsightWorkflow by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_get_by_id" method="get" path="/api/v1/insights/workflows/{workflow_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.getById({
    workflowId: 788857,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsWorkflowsGetById } from "syllable-sdk/funcs/insightsWorkflowsGetById.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsGetById(syllableSDK, {
    workflowId: 788857,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowGetByIdRequest](../../models/operations/insightsworkflowgetbyidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update a InsightWorkflow.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_update" method="put" path="/api/v1/insights/workflows/{workflow_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.update({
    workflowId: 673493,
    insightWorkflowInput: {
      name: "summary-workflow",
      source: "agent",
      description: "Default workflow - generates a summary of the call",
      insightToolIds: [
        1,
      ],
      conditions: {
        minDuration: 120,
        maxDuration: 600,
        sampleRate: 0.1,
        agentList: [
          866324,
          826325,
        ],
        promptList: [
          "123324",
        ],
        folderList: [
          16754,
          67535,
        ],
        sheetInfo: {
          "sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",
          "sheet_name": "Q1 Sales Data",
        },
      },
      startDatetime: new Date("2026-02-03T00:00:00Z"),
      endDatetime: new Date("2026-02-04T00:00:00Z"),
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
import { insightsWorkflowsUpdate } from "syllable-sdk/funcs/insightsWorkflowsUpdate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsUpdate(syllableSDK, {
    workflowId: 673493,
    insightWorkflowInput: {
      name: "summary-workflow",
      source: "agent",
      description: "Default workflow - generates a summary of the call",
      insightToolIds: [
        1,
      ],
      conditions: {
        minDuration: 120,
        maxDuration: 600,
        sampleRate: 0.1,
        agentList: [
          866324,
          826325,
        ],
        promptList: [
          "123324",
        ],
        folderList: [
          16754,
          67535,
        ],
        sheetInfo: {
          "sheet_id": "1AGOCYz05AZYYOMzow2EYlgdDXSXaWIhyA3-zCxBm4go",
          "sheet_name": "Q1 Sales Data",
        },
      },
      startDatetime: new Date("2026-02-03T00:00:00Z"),
      endDatetime: new Date("2026-02-04T00:00:00Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowUpdateRequest](../../models/operations/insightsworkflowupdaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete an Insights workflow.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_delete" method="delete" path="/api/v1/insights/workflows/{workflow_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.delete({
    workflowId: 609419,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsWorkflowsDelete } from "syllable-sdk/funcs/insightsWorkflowsDelete.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsDelete(syllableSDK, {
    workflowId: 609419,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowDeleteRequest](../../models/operations/insightsworkflowdeleterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## listExecutions

List a workflow's execution rows.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_executions" method="get" path="/api/v1/insights/workflows/{workflow_id}/executions" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.listExecutions({
    workflowId: 304703,
    page: 0,
    searchFields: [
      "status",
    ],
    searchFieldValues: [
      "Some Object Name",
    ],
    orderBy: "id",
    fields: [
      "session_id",
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
import { insightsWorkflowsListExecutions } from "syllable-sdk/funcs/insightsWorkflowsListExecutions.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsListExecutions(syllableSDK, {
    workflowId: 304703,
    page: 0,
    searchFields: [
      "status",
    ],
    searchFieldValues: [
      "Some Object Name",
    ],
    orderBy: "id",
    fields: [
      "session_id",
    ],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsListExecutions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowExecutionsRequest](../../models/operations/insightsworkflowexecutionsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseInsightWorkflowExecutionOutput](../../models/components/listresponseinsightworkflowexecutionoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listSessions

List the sessions under a workflow, one row per session, with each tool's
results grouped into a ``results`` dict keyed by tool name.

Sessions come from the workflow's execution queue, so pending, processing and
failed sessions show up too, not just completed ones. A session that was
queued more than once appears only once. Insights reused from another
workflow still show up here.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_sessions" method="get" path="/api/v1/insights/workflows/{workflow_id}/sessions" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.listSessions({
    workflowId: 939810,
    page: 0,
    searchFields: [
      "session_id",
    ],
    searchFieldValues: [
      "Some Object Name",
    ],
    orderBy: "session_id",
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
import { insightsWorkflowsListSessions } from "syllable-sdk/funcs/insightsWorkflowsListSessions.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsListSessions(syllableSDK, {
    workflowId: 939810,
    page: 0,
    searchFields: [
      "session_id",
    ],
    searchFieldValues: [
      "Some Object Name",
    ],
    orderBy: "session_id",
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsListSessions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowSessionsRequest](../../models/operations/insightsworkflowsessionsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseWorkflowSessionRow](../../models/components/listresponseworkflowsessionrow.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## executionsSummary

Return how many of a workflow's executions are in each status, optionally
within a created_at range (for example, since the workflow's `updated_at`
passed as `start_datetime`).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_executions_summary" method="get" path="/api/v1/insights/workflows/{workflow_id}/executions/summary" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.executionsSummary({
    workflowId: 163523,
    startDatetime: "2026-08-27T13:57:00.123456+00:00",
    endDatetime: "2026-08-28T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsWorkflowsExecutionsSummary } from "syllable-sdk/funcs/insightsWorkflowsExecutionsSummary.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsExecutionsSummary(syllableSDK, {
    workflowId: 163523,
    startDatetime: "2026-08-27T13:57:00.123456+00:00",
    endDatetime: "2026-08-28T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsExecutionsSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowExecutionsSummaryRequest](../../models/operations/insightsworkflowexecutionssummaryrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightWorkflowExecutionSummary](../../models/components/insightworkflowexecutionsummary.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## inactivate

Inactivate an InsightWorkflow.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_inactivate" method="put" path="/api/v1/insights/workflows/{workflow_id}/inactivate" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.inactivate({
    workflowId: 248768,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsWorkflowsInactivate } from "syllable-sdk/funcs/insightsWorkflowsInactivate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsInactivate(syllableSDK, {
    workflowId: 248768,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsInactivate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowInactivateRequest](../../models/operations/insightsworkflowinactivaterequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## activate

Activate an InsightWorkflow.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_activate" method="put" path="/api/v1/insights/workflows/{workflow_id}/activate" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.activate({
    workflowId: 303095,
    insightWorkflowActivate: {
      isAcknowledged: true,
      estimate: {
        backfillCount: 100,
        backfillDuration: 1000,
        estimatedDailyCount: 10,
        estimatedDailyDuration: 3674.11,
        estimatedDailyCost: 45.25,
        estimatedBackfillCost: 4561,
      },
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
import { insightsWorkflowsActivate } from "syllable-sdk/funcs/insightsWorkflowsActivate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsActivate(syllableSDK, {
    workflowId: 303095,
    insightWorkflowActivate: {
      isAcknowledged: true,
      estimate: {
        backfillCount: 100,
        backfillDuration: 1000,
        estimatedDailyCount: 10,
        estimatedDailyDuration: 3674.11,
        estimatedDailyCost: 45.25,
        estimatedBackfillCost: 4561,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsActivate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InsightsWorkflowActivateRequest](../../models/operations/insightsworkflowactivaterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## queueWork

Manually queue sessions for insights workflow evaluation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="insights_workflow_queue_work" method="post" path="/api/v1/insights/workflows/queue-work" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.workflows.queueWork({
    workflowName: "summary-workflow",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { insightsWorkflowsQueueWork } from "syllable-sdk/funcs/insightsWorkflowsQueueWork.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await insightsWorkflowsQueueWork(syllableSDK, {
    workflowName: "summary-workflow",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsWorkflowsQueueWork failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.InsightsWorkflowQueueSession](../../models/components/insightsworkflowqueuesession.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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