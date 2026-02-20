# Outbound.Campaigns

## Overview

Operations related to outbound message campaigns

### Available Operations

* [list](#list) - List Outbound Communication Campaigns
* [create](#create) - Create Outbound Communication Campaign
* [getById](#getbyid) - Get Outbound Communication Campaign
* [update](#update) - Update Outbound Communication Campaign
* [delete](#delete) - Delete Outbound Communication Campaign

## list

List Outbound Communication Campaigns

### Example Usage

<!-- UsageSnippet language="typescript" operationID="outbound_campaign_list" method="get" path="/api/v1/outbound/campaigns" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.outbound.campaigns.list({
    page: 0,
    searchFields: [
      "id",
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
import { outboundCampaignsList } from "syllable-sdk/funcs/outboundCampaignsList.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await outboundCampaignsList(syllableSDK, {
    page: 0,
    searchFields: [
      "id",
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
    console.log("outboundCampaignsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OutboundCampaignListRequest](../../models/operations/outboundcampaignlistrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponseOutboundCampaign](../../models/components/listresponseoutboundcampaign.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create Outbound Communication Campaign

### Example Usage

<!-- UsageSnippet language="typescript" operationID="outbound_campaign_create" method="post" path="/api/v1/outbound/campaigns" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.outbound.campaigns.create({
    campaignName: "Outbound Campaign 1",
    description: "This is a test campaign",
    mode: "voice",
    smsSessionTtl: 720,
    labels: [
      "test",
      "demo",
    ],
    campaignVariables: {
      "key": "value",
      "key2": "value2",
    },
    dailyStartTime: "09:00:00",
    dailyEndTime: "17:00:00",
    source: "+19032900844",
    callerId: "19995551234",
    hourlyRate: 25,
    maxDailyCalls: 2500,
    retryCount: 1,
    retryInterval: "30m",
    activeDays: [
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
    ],
    voicemailDetection: {
      "voicemail_detection_overall_timeout": 30,
      "voicemail_detection_post_speech_timeout": 1.75,
      "voicemail_detection_pre_speech_timeout": 3.5,
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
import { outboundCampaignsCreate } from "syllable-sdk/funcs/outboundCampaignsCreate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await outboundCampaignsCreate(syllableSDK, {
    campaignName: "Outbound Campaign 1",
    description: "This is a test campaign",
    mode: "voice",
    smsSessionTtl: 720,
    labels: [
      "test",
      "demo",
    ],
    campaignVariables: {
      "key": "value",
      "key2": "value2",
    },
    dailyStartTime: "09:00:00",
    dailyEndTime: "17:00:00",
    source: "+19032900844",
    callerId: "19995551234",
    hourlyRate: 25,
    maxDailyCalls: 2500,
    retryCount: 1,
    retryInterval: "30m",
    activeDays: [
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
    ],
    voicemailDetection: {
      "voicemail_detection_overall_timeout": 30,
      "voicemail_detection_post_speech_timeout": 1.75,
      "voicemail_detection_pre_speech_timeout": 3.5,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outboundCampaignsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.OutboundCampaignInput](../../models/components/outboundcampaigninput.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OutboundCampaign](../../models/components/outboundcampaign.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getById

Get Outbound Communication Campaign

### Example Usage

<!-- UsageSnippet language="typescript" operationID="outbound_campaign_get_by_id" method="get" path="/api/v1/outbound/campaigns/{campaign_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.outbound.campaigns.getById({
    campaignId: 11227,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { outboundCampaignsGetById } from "syllable-sdk/funcs/outboundCampaignsGetById.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await outboundCampaignsGetById(syllableSDK, {
    campaignId: 11227,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outboundCampaignsGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OutboundCampaignGetByIdRequest](../../models/operations/outboundcampaigngetbyidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OutboundCampaign](../../models/components/outboundcampaign.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update Outbound Communication Campaign

### Example Usage

<!-- UsageSnippet language="typescript" operationID="outbound_campaign_update" method="put" path="/api/v1/outbound/campaigns/{campaign_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.outbound.campaigns.update({
    campaignId: 679645,
    outboundCampaignInput: {
      campaignName: "Outbound Campaign 1",
      description: "This is a test campaign",
      mode: "voice",
      smsSessionTtl: 720,
      labels: [
        "test",
        "demo",
      ],
      campaignVariables: {
        "key": "value",
        "key2": "value2",
      },
      dailyStartTime: "09:00:00",
      dailyEndTime: "17:00:00",
      source: "+19032900844",
      callerId: "19995551234",
      hourlyRate: 25,
      maxDailyCalls: 2500,
      retryCount: 1,
      retryInterval: "30m",
      activeDays: [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
      ],
      voicemailDetection: {
        "voicemail_detection_overall_timeout": 30,
        "voicemail_detection_post_speech_timeout": 1.75,
        "voicemail_detection_pre_speech_timeout": 3.5,
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
import { outboundCampaignsUpdate } from "syllable-sdk/funcs/outboundCampaignsUpdate.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await outboundCampaignsUpdate(syllableSDK, {
    campaignId: 679645,
    outboundCampaignInput: {
      campaignName: "Outbound Campaign 1",
      description: "This is a test campaign",
      mode: "voice",
      smsSessionTtl: 720,
      labels: [
        "test",
        "demo",
      ],
      campaignVariables: {
        "key": "value",
        "key2": "value2",
      },
      dailyStartTime: "09:00:00",
      dailyEndTime: "17:00:00",
      source: "+19032900844",
      callerId: "19995551234",
      hourlyRate: 25,
      maxDailyCalls: 2500,
      retryCount: 1,
      retryInterval: "30m",
      activeDays: [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
      ],
      voicemailDetection: {
        "voicemail_detection_overall_timeout": 30,
        "voicemail_detection_post_speech_timeout": 1.75,
        "voicemail_detection_pre_speech_timeout": 3.5,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outboundCampaignsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OutboundCampaignUpdateRequest](../../models/operations/outboundcampaignupdaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OutboundCampaign](../../models/components/outboundcampaign.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete Outbound Communication Campaign

### Example Usage

<!-- UsageSnippet language="typescript" operationID="outbound_campaign_delete" method="delete" path="/api/v1/outbound/campaigns/{campaign_id}" -->
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.outbound.campaigns.delete({
    campaignId: 439537,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SyllableSDKCore } from "syllable-sdk/core.js";
import { outboundCampaignsDelete } from "syllable-sdk/funcs/outboundCampaignsDelete.js";

// Use `SyllableSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const syllableSDK = new SyllableSDKCore({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await outboundCampaignsDelete(syllableSDK, {
    campaignId: 439537,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outboundCampaignsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OutboundCampaignDeleteRequest](../../models/operations/outboundcampaigndeleterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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