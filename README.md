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
capabilities into your communication applications. Whether you're building phone agents, chatbots,
virtual assistants, or any other AI-driven solutions, Syllable SDK has got you covered.

## Features

- **Agent Configuration**: Create and manage agents that can interact with users across various 
channels.
- **Channel Management**: Configure channels like SMS, web chat, and more to connect agents with 
users.
- **Custom Messages**: Set up custom messages that agents can deliver as greetings or responses.
- **Conversations**: Track and manage conversations between users and agents, including session 
management.
- **Tools and Workflows**: Leverage tools and workflows to enhance agent capabilities, such as data 
processing and API calls.
- **Data Sources**: Integrate data sources to provide agents with additional context and 
information.
- **Insights and Analytics**: Analyze conversations and sessions to gain insights into user 
interactions.
- **Permissions and Security**: Manage permissions to control access to various features and 
functionalities.
- **Language Support**: Define language groups to enable multilingual support for agents.
- **Outbound Campaigns**: Create and manage outbound communication campaigns to reach users 
effectively.
- **Session Labels**: Label sessions with evaluations of quality and descriptions of issues 
encountered.
- **Incident Management**: Track and manage incidents related to agent interactions.
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
yarn add syllable-sdk
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "SyllableSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "syllable-sdk",
        "--",
        "mcp", "start",
        "--api-key-header", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "SyllableSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "syllable-sdk",
        "--",
        "mcp", "start",
        "--api-key-header", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package syllable-sdk -- mcp start --help
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
* [create](docs/sdks/channels/README.md#create) - Create Channel
* [update](docs/sdks/channels/README.md#update) - Update Channel
* [delete](docs/sdks/channels/README.md#delete) - Delete Channel Target

#### [channels.targets](docs/sdks/targets/README.md)

* [availableTargets](docs/sdks/targets/README.md#availabletargets) - Available Targets List
* [list](docs/sdks/targets/README.md#list) - Get Channel Targets
* [create](docs/sdks/targets/README.md#create) - Assign A Channel Target
* [getById](docs/sdks/targets/README.md#getbyid) - Get A Channel Target
* [update](docs/sdks/targets/README.md#update) - Edit Channel Target

#### [channels.twilio](docs/sdks/twilio/README.md)

* [getById](docs/sdks/twilio/README.md#getbyid) - Get Twilio Channel By Id
* [update](docs/sdks/twilio/README.md#update) - Update Twilio Channel
* [create](docs/sdks/twilio/README.md#create) - Create Twilio Channel

#### [channels.twilio.numbers](docs/sdks/numbers/README.md)

* [add](docs/sdks/numbers/README.md#add) - Add Twilio Number
* [update](docs/sdks/numbers/README.md#update) - Update Twilio Number
* [list](docs/sdks/numbers/README.md#list) - List Twilio Phone Numbers

### [conversations](docs/sdks/conversations/README.md)

* [list](docs/sdks/conversations/README.md#list) - Conversations List

### [customMessages](docs/sdks/custommessages/README.md)

* [list](docs/sdks/custommessages/README.md#list) - Custom Messages List
* [create](docs/sdks/custommessages/README.md#create) - Create Custom Message
* [update](docs/sdks/custommessages/README.md#update) - Update Custom Message
* [getById](docs/sdks/custommessages/README.md#getbyid) - Get Custom Message By Id
* [delete](docs/sdks/custommessages/README.md#delete) - Delete Custom Message

### [dashboards](docs/sdks/dashboards/README.md)

* [postListDashboard](docs/sdks/dashboards/README.md#postlistdashboard) - Post List Dashboards
* [postGetDashboard](docs/sdks/dashboards/README.md#postgetdashboard) - Post Fetch Info
* [~~postSessionEventsDashboard~~](docs/sdks/dashboards/README.md#postsessioneventsdashboard) - Post Session Events :warning: **Deprecated**
* [~~postSessionSummaryDashboard~~](docs/sdks/dashboards/README.md#postsessionsummarydashboard) - Post Session Summary :warning: **Deprecated**
* [~~postSessionTransfersDashboard~~](docs/sdks/dashboards/README.md#postsessiontransfersdashboard) - Post Session Transfers :warning: **Deprecated**
* [~~postSessionsDashboard~~](docs/sdks/dashboards/README.md#postsessionsdashboard) - Post Sessions :warning: **Deprecated**

### [dataSources](docs/sdks/datasources/README.md)

* [list](docs/sdks/datasources/README.md#list) - List Data Sources
* [create](docs/sdks/datasources/README.md#create) - Create Data Source
* [update](docs/sdks/datasources/README.md#update) - Update Data Source
* [getById](docs/sdks/datasources/README.md#getbyid) - Get Data Source
* [delete](docs/sdks/datasources/README.md#delete) - Delete Data Source

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Events List

### [incidents](docs/sdks/incidents/README.md)

* [list](docs/sdks/incidents/README.md#list) - List Incidents
* [create](docs/sdks/incidents/README.md#create) - Create Incident
* [update](docs/sdks/incidents/README.md#update) - Update Incident
* [incidentGetOrganizations](docs/sdks/incidents/README.md#incidentgetorganizations) - Get Organizations
* [getById](docs/sdks/incidents/README.md#getbyid) - Get Incident By Id
* [delete](docs/sdks/incidents/README.md#delete) - Delete Incident

### [insights](docs/sdks/insights/README.md)

* [list](docs/sdks/insights/README.md#list) - Insights List

#### [insights.folders](docs/sdks/folders/README.md)

* [list](docs/sdks/folders/README.md#list) - List Insights Upload Folders
* [create](docs/sdks/folders/README.md#create) - Create Insights Upload Folder
* [getById](docs/sdks/folders/README.md#getbyid) - Get Insights Folder Details
* [delete](docs/sdks/folders/README.md#delete) - Delete Insights Folder
* [update](docs/sdks/folders/README.md#update) - Update Insights Folder
* [uploadFile](docs/sdks/folders/README.md#uploadfile) - Upload Insights  Upload Folder
* [listFiles](docs/sdks/folders/README.md#listfiles) - Fetch Insights Upload Files
* [moveFiles](docs/sdks/folders/README.md#movefiles) - Move Insights Upload Files

#### [insights.tools](docs/sdks/syllablesdktools/README.md)

* [list](docs/sdks/syllablesdktools/README.md#list) - List Insight Tool Configurations
* [create](docs/sdks/syllablesdktools/README.md#create) - Create Insight Tool Configuration
* [getById](docs/sdks/syllablesdktools/README.md#getbyid) - Get Insight Tool Config By Id
* [delete](docs/sdks/syllablesdktools/README.md#delete) - Delete Insight Tool Configuration
* [update](docs/sdks/syllablesdktools/README.md#update) - Update Insights Tool Configuration
* [insightsToolTest](docs/sdks/syllablesdktools/README.md#insightstooltest) - Test Insights Tool
* [insightToolGetDefinitions](docs/sdks/syllablesdktools/README.md#insighttoolgetdefinitions) - Get Insight Tool Definitions

#### [insights.workflows](docs/sdks/workflows/README.md)

* [list](docs/sdks/workflows/README.md#list) - Insight Workflow List
* [create](docs/sdks/workflows/README.md#create) - Create Insight Workflow
* [getById](docs/sdks/workflows/README.md#getbyid) - Get Insight Workflow By Id
* [update](docs/sdks/workflows/README.md#update) - Update Insights Workflow
* [delete](docs/sdks/workflows/README.md#delete) - Delete Insights Workflow
* [inactivate](docs/sdks/workflows/README.md#inactivate) - Inactivate Insights Workflow
* [activate](docs/sdks/workflows/README.md#activate) - Activate Insights Workflow
* [queueWork](docs/sdks/workflows/README.md#queuework) - Queue Insights Workflow For Sessions/Files

### [languageGroups](docs/sdks/languagegroups/README.md)

* [list](docs/sdks/languagegroups/README.md#list) - List Language Groups
* [create](docs/sdks/languagegroups/README.md#create) - Create Language Group
* [update](docs/sdks/languagegroups/README.md#update) - Update Language Group
* [getById](docs/sdks/languagegroups/README.md#getbyid) - Get Language Group
* [delete](docs/sdks/languagegroups/README.md#delete) - Delete Language Group
* [languageGroupsCreateVoiceSample](docs/sdks/languagegroups/README.md#languagegroupscreatevoicesample) - Create Voice Sample

### [organizations](docs/sdks/organizations/README.md)

* [organizationsGet](docs/sdks/organizations/README.md#organizationsget) - Get Current Organization
* [update](docs/sdks/organizations/README.md#update) - Update Current Organization
* [create](docs/sdks/organizations/README.md#create) - Create Organization
* [delete](docs/sdks/organizations/README.md#delete) - Delete Current Organization

#### [outbound.batches](docs/sdks/batches/README.md)

* [list](docs/sdks/batches/README.md#list) - List Outbound Communication Batches
* [create](docs/sdks/batches/README.md#create) - Create Outbound Communication Batch
* [getById](docs/sdks/batches/README.md#getbyid) - Get Outbound Communication Batch
* [update](docs/sdks/batches/README.md#update) - Update Outbound Communication Batch
* [delete](docs/sdks/batches/README.md#delete) - Delete Outbound Communication Batch
* [upload](docs/sdks/batches/README.md#upload) - Upload Outbound Communication Batch
* [results](docs/sdks/batches/README.md#results) - Fetch Outbound Communication Batch Results
* [add](docs/sdks/batches/README.md#add) - Create Outbound Communication Request
* [remove](docs/sdks/batches/README.md#remove) - Delete Requests By List Of Reference Ids

#### [outbound.campaigns](docs/sdks/campaigns/README.md)

* [list](docs/sdks/campaigns/README.md#list) - List Outbound Communication Campaigns
* [create](docs/sdks/campaigns/README.md#create) - Create Outbound Communication Campaign
* [getById](docs/sdks/campaigns/README.md#getbyid) - Get Outbound Communication Campaign
* [update](docs/sdks/campaigns/README.md#update) - Update Outbound Communication Campaign
* [delete](docs/sdks/campaigns/README.md#delete) - Delete Outbound Communication Campaign

### [permissions](docs/sdks/permissions/README.md)

* [list](docs/sdks/permissions/README.md#list) - List Permissions

### [prompts](docs/sdks/prompts/README.md)

* [list](docs/sdks/prompts/README.md#list) - Prompt List
* [create](docs/sdks/prompts/README.md#create) - Create Prompt
* [update](docs/sdks/prompts/README.md#update) - Update Prompt
* [getById](docs/sdks/prompts/README.md#getbyid) - Get Prompt By Id
* [delete](docs/sdks/prompts/README.md#delete) - Delete Prompt
* [promptsHistory](docs/sdks/prompts/README.md#promptshistory) - Get Prompt History
* [promptGetSupportedLlms](docs/sdks/prompts/README.md#promptgetsupportedllms) - Get Supported Llm Configs

### [pronunciations](docs/sdks/pronunciations/README.md)

* [pronunciationsUploadCsv](docs/sdks/pronunciations/README.md#pronunciationsuploadcsv) - Upload Pronunciations Csv

### [roles](docs/sdks/roles/README.md)

* [list](docs/sdks/roles/README.md#list) - List Roles
* [create](docs/sdks/roles/README.md#create) - Create Role
* [update](docs/sdks/roles/README.md#update) - Update Role
* [getById](docs/sdks/roles/README.md#getbyid) - Get Role
* [delete](docs/sdks/roles/README.md#delete) - Delete Role

### [services](docs/sdks/services/README.md)

* [list](docs/sdks/services/README.md#list) - Service List
* [create](docs/sdks/services/README.md#create) - Create Service
* [update](docs/sdks/services/README.md#update) - Update Service
* [getById](docs/sdks/services/README.md#getbyid) - Get Service By Id
* [delete](docs/sdks/services/README.md#delete) - Delete Service

### [sessionDebug](docs/sdks/sessiondebug/README.md)

* [getSessionDataBySid](docs/sdks/sessiondebug/README.md#getsessiondatabysid) - Get Session Data By Sid
* [getSessionDataBySessionId](docs/sdks/sessiondebug/README.md#getsessiondatabysessionid) - Get Session Data By Session Id
* [getSessionToolCallResultById](docs/sdks/sessiondebug/README.md#getsessiontoolcallresultbyid) - Get Session Tool Call Result By Id

### [sessionLabels](docs/sdks/sessionlabels/README.md)

* [getById](docs/sdks/sessionlabels/README.md#getbyid) - Get Label By Id
* [create](docs/sdks/sessionlabels/README.md#create) - Create Label
* [list](docs/sdks/sessionlabels/README.md#list) - Session Labels List

### [sessions](docs/sdks/sessions/README.md)

* [list](docs/sdks/sessions/README.md#list) - Sessions List
* [getById](docs/sdks/sessions/README.md#getbyid) - Get A Single Session By Id
* [generateSessionRecordingUrls](docs/sdks/sessions/README.md#generatesessionrecordingurls) - Generate Recording Urls
* [sessionRecordingStream](docs/sdks/sessions/README.md#sessionrecordingstream) - Stream Recording

#### [sessions.fullSummary](docs/sdks/fullsummary/README.md)

* [getById](docs/sdks/fullsummary/README.md#getbyid) - Get Full Session Summary By Id

#### [sessions.latency](docs/sdks/latency/README.md)

* [getById](docs/sdks/latency/README.md#getbyid) - Inspect Latency For Session

#### [sessions.transcript](docs/sdks/transcript/README.md)

* [getById](docs/sdks/transcript/README.md#getbyid) - Get Session Transcript By Id

### [takeouts](docs/sdks/takeouts/README.md)

* [create](docs/sdks/takeouts/README.md#create) - Create Takeout
* [takeoutsGetByJobId](docs/sdks/takeouts/README.md#takeoutsgetbyjobid) - Get Takeout
* [takeoutsGetFile](docs/sdks/takeouts/README.md#takeoutsgetfile) - Get File

### [tools](docs/sdks/tools/README.md)

* [list](docs/sdks/tools/README.md#list) - Tool List
* [create](docs/sdks/tools/README.md#create) - Create Tool
* [update](docs/sdks/tools/README.md#update) - Update Tool
* [getByName](docs/sdks/tools/README.md#getbyname) - Tool Info
* [delete](docs/sdks/tools/README.md#delete) - Delete Tool

### [users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List Users
* [create](docs/sdks/users/README.md#create) - Create User
* [update](docs/sdks/users/README.md#update) - Update User
* [delete](docs/sdks/users/README.md#delete) - Delete User
* [usersGetByEmail](docs/sdks/users/README.md#usersgetbyemail) - Get User
* [usersSendEmail](docs/sdks/users/README.md#userssendemail) - Send User Email
* [usersDeleteAccount](docs/sdks/users/README.md#usersdeleteaccount) - Request Removal Of This Account

### [v1](docs/sdks/v1/README.md)

* [list](docs/sdks/v1/README.md#list) - List Users
* [create](docs/sdks/v1/README.md#create) - Create User
* [update](docs/sdks/v1/README.md#update) - Update User
* [delete](docs/sdks/v1/README.md#delete) - Delete User
* [usersGetByEmail](docs/sdks/v1/README.md#usersgetbyemail) - Get User
* [usersSendEmail](docs/sdks/v1/README.md#userssendemail) - Send User Email
* [usersDeleteAccount](docs/sdks/v1/README.md#usersdeleteaccount) - Request Removal Of This Account

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
- [`channelsCreate`](docs/sdks/channels/README.md#create) - Create Channel
- [`channelsDelete`](docs/sdks/channels/README.md#delete) - Delete Channel Target
- [`channelsList`](docs/sdks/channels/README.md#list) - Get Channels
- [`channelsTargetsAvailableTargets`](docs/sdks/targets/README.md#availabletargets) - Available Targets List
- [`channelsTargetsCreate`](docs/sdks/targets/README.md#create) - Assign A Channel Target
- [`channelsTargetsGetById`](docs/sdks/targets/README.md#getbyid) - Get A Channel Target
- [`channelsTargetsList`](docs/sdks/targets/README.md#list) - Get Channel Targets
- [`channelsTargetsUpdate`](docs/sdks/targets/README.md#update) - Edit Channel Target
- [`channelsTwilioCreate`](docs/sdks/twilio/README.md#create) - Create Twilio Channel
- [`channelsTwilioGetById`](docs/sdks/twilio/README.md#getbyid) - Get Twilio Channel By Id
- [`channelsTwilioNumbersAdd`](docs/sdks/numbers/README.md#add) - Add Twilio Number
- [`channelsTwilioNumbersList`](docs/sdks/numbers/README.md#list) - List Twilio Phone Numbers
- [`channelsTwilioNumbersUpdate`](docs/sdks/numbers/README.md#update) - Update Twilio Number
- [`channelsTwilioUpdate`](docs/sdks/twilio/README.md#update) - Update Twilio Channel
- [`channelsUpdate`](docs/sdks/channels/README.md#update) - Update Channel
- [`conversationsList`](docs/sdks/conversations/README.md#list) - Conversations List
- [`customMessagesCreate`](docs/sdks/custommessages/README.md#create) - Create Custom Message
- [`customMessagesDelete`](docs/sdks/custommessages/README.md#delete) - Delete Custom Message
- [`customMessagesGetById`](docs/sdks/custommessages/README.md#getbyid) - Get Custom Message By Id
- [`customMessagesList`](docs/sdks/custommessages/README.md#list) - Custom Messages List
- [`customMessagesUpdate`](docs/sdks/custommessages/README.md#update) - Update Custom Message
- [`dashboardsPostGetDashboard`](docs/sdks/dashboards/README.md#postgetdashboard) - Post Fetch Info
- [`dashboardsPostListDashboard`](docs/sdks/dashboards/README.md#postlistdashboard) - Post List Dashboards
- [`dataSourcesCreate`](docs/sdks/datasources/README.md#create) - Create Data Source
- [`dataSourcesDelete`](docs/sdks/datasources/README.md#delete) - Delete Data Source
- [`dataSourcesGetById`](docs/sdks/datasources/README.md#getbyid) - Get Data Source
- [`dataSourcesList`](docs/sdks/datasources/README.md#list) - List Data Sources
- [`dataSourcesUpdate`](docs/sdks/datasources/README.md#update) - Update Data Source
- [`eventsList`](docs/sdks/events/README.md#list) - Events List
- [`incidentsCreate`](docs/sdks/incidents/README.md#create) - Create Incident
- [`incidentsDelete`](docs/sdks/incidents/README.md#delete) - Delete Incident
- [`incidentsGetById`](docs/sdks/incidents/README.md#getbyid) - Get Incident By Id
- [`incidentsIncidentGetOrganizations`](docs/sdks/incidents/README.md#incidentgetorganizations) - Get Organizations
- [`incidentsList`](docs/sdks/incidents/README.md#list) - List Incidents
- [`incidentsUpdate`](docs/sdks/incidents/README.md#update) - Update Incident
- [`insightsFoldersCreate`](docs/sdks/folders/README.md#create) - Create Insights Upload Folder
- [`insightsFoldersDelete`](docs/sdks/folders/README.md#delete) - Delete Insights Folder
- [`insightsFoldersGetById`](docs/sdks/folders/README.md#getbyid) - Get Insights Folder Details
- [`insightsFoldersList`](docs/sdks/folders/README.md#list) - List Insights Upload Folders
- [`insightsFoldersListFiles`](docs/sdks/folders/README.md#listfiles) - Fetch Insights Upload Files
- [`insightsFoldersMoveFiles`](docs/sdks/folders/README.md#movefiles) - Move Insights Upload Files
- [`insightsFoldersUpdate`](docs/sdks/folders/README.md#update) - Update Insights Folder
- [`insightsFoldersUploadFile`](docs/sdks/folders/README.md#uploadfile) - Upload Insights  Upload Folder
- [`insightsList`](docs/sdks/insights/README.md#list) - Insights List
- [`insightsToolsCreate`](docs/sdks/syllablesdktools/README.md#create) - Create Insight Tool Configuration
- [`insightsToolsDelete`](docs/sdks/syllablesdktools/README.md#delete) - Delete Insight Tool Configuration
- [`insightsToolsGetById`](docs/sdks/syllablesdktools/README.md#getbyid) - Get Insight Tool Config By Id
- [`insightsToolsInsightsToolTest`](docs/sdks/syllablesdktools/README.md#insightstooltest) - Test Insights Tool
- [`insightsToolsInsightToolGetDefinitions`](docs/sdks/syllablesdktools/README.md#insighttoolgetdefinitions) - Get Insight Tool Definitions
- [`insightsToolsList`](docs/sdks/syllablesdktools/README.md#list) - List Insight Tool Configurations
- [`insightsToolsUpdate`](docs/sdks/syllablesdktools/README.md#update) - Update Insights Tool Configuration
- [`insightsWorkflowsActivate`](docs/sdks/workflows/README.md#activate) - Activate Insights Workflow
- [`insightsWorkflowsCreate`](docs/sdks/workflows/README.md#create) - Create Insight Workflow
- [`insightsWorkflowsDelete`](docs/sdks/workflows/README.md#delete) - Delete Insights Workflow
- [`insightsWorkflowsGetById`](docs/sdks/workflows/README.md#getbyid) - Get Insight Workflow By Id
- [`insightsWorkflowsInactivate`](docs/sdks/workflows/README.md#inactivate) - Inactivate Insights Workflow
- [`insightsWorkflowsList`](docs/sdks/workflows/README.md#list) - Insight Workflow List
- [`insightsWorkflowsQueueWork`](docs/sdks/workflows/README.md#queuework) - Queue Insights Workflow For Sessions/Files
- [`insightsWorkflowsUpdate`](docs/sdks/workflows/README.md#update) - Update Insights Workflow
- [`languageGroupsCreate`](docs/sdks/languagegroups/README.md#create) - Create Language Group
- [`languageGroupsDelete`](docs/sdks/languagegroups/README.md#delete) - Delete Language Group
- [`languageGroupsGetById`](docs/sdks/languagegroups/README.md#getbyid) - Get Language Group
- [`languageGroupsLanguageGroupsCreateVoiceSample`](docs/sdks/languagegroups/README.md#languagegroupscreatevoicesample) - Create Voice Sample
- [`languageGroupsList`](docs/sdks/languagegroups/README.md#list) - List Language Groups
- [`languageGroupsUpdate`](docs/sdks/languagegroups/README.md#update) - Update Language Group
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create Organization
- [`organizationsDelete`](docs/sdks/organizations/README.md#delete) - Delete Current Organization
- [`organizationsOrganizationsGet`](docs/sdks/organizations/README.md#organizationsget) - Get Current Organization
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update Current Organization
- [`outboundBatchesAdd`](docs/sdks/batches/README.md#add) - Create Outbound Communication Request
- [`outboundBatchesCreate`](docs/sdks/batches/README.md#create) - Create Outbound Communication Batch
- [`outboundBatchesDelete`](docs/sdks/batches/README.md#delete) - Delete Outbound Communication Batch
- [`outboundBatchesGetById`](docs/sdks/batches/README.md#getbyid) - Get Outbound Communication Batch
- [`outboundBatchesList`](docs/sdks/batches/README.md#list) - List Outbound Communication Batches
- [`outboundBatchesRemove`](docs/sdks/batches/README.md#remove) - Delete Requests By List Of Reference Ids
- [`outboundBatchesResults`](docs/sdks/batches/README.md#results) - Fetch Outbound Communication Batch Results
- [`outboundBatchesUpdate`](docs/sdks/batches/README.md#update) - Update Outbound Communication Batch
- [`outboundBatchesUpload`](docs/sdks/batches/README.md#upload) - Upload Outbound Communication Batch
- [`outboundCampaignsCreate`](docs/sdks/campaigns/README.md#create) - Create Outbound Communication Campaign
- [`outboundCampaignsDelete`](docs/sdks/campaigns/README.md#delete) - Delete Outbound Communication Campaign
- [`outboundCampaignsGetById`](docs/sdks/campaigns/README.md#getbyid) - Get Outbound Communication Campaign
- [`outboundCampaignsList`](docs/sdks/campaigns/README.md#list) - List Outbound Communication Campaigns
- [`outboundCampaignsUpdate`](docs/sdks/campaigns/README.md#update) - Update Outbound Communication Campaign
- [`permissionsList`](docs/sdks/permissions/README.md#list) - List Permissions
- [`promptsCreate`](docs/sdks/prompts/README.md#create) - Create Prompt
- [`promptsDelete`](docs/sdks/prompts/README.md#delete) - Delete Prompt
- [`promptsGetById`](docs/sdks/prompts/README.md#getbyid) - Get Prompt By Id
- [`promptsList`](docs/sdks/prompts/README.md#list) - Prompt List
- [`promptsPromptGetSupportedLlms`](docs/sdks/prompts/README.md#promptgetsupportedllms) - Get Supported Llm Configs
- [`promptsPromptsHistory`](docs/sdks/prompts/README.md#promptshistory) - Get Prompt History
- [`promptsUpdate`](docs/sdks/prompts/README.md#update) - Update Prompt
- [`pronunciationsPronunciationsUploadCsv`](docs/sdks/pronunciations/README.md#pronunciationsuploadcsv) - Upload Pronunciations Csv
- [`rolesCreate`](docs/sdks/roles/README.md#create) - Create Role
- [`rolesDelete`](docs/sdks/roles/README.md#delete) - Delete Role
- [`rolesGetById`](docs/sdks/roles/README.md#getbyid) - Get Role
- [`rolesList`](docs/sdks/roles/README.md#list) - List Roles
- [`rolesUpdate`](docs/sdks/roles/README.md#update) - Update Role
- [`servicesCreate`](docs/sdks/services/README.md#create) - Create Service
- [`servicesDelete`](docs/sdks/services/README.md#delete) - Delete Service
- [`servicesGetById`](docs/sdks/services/README.md#getbyid) - Get Service By Id
- [`servicesList`](docs/sdks/services/README.md#list) - Service List
- [`servicesUpdate`](docs/sdks/services/README.md#update) - Update Service
- [`sessionDebugGetSessionDataBySessionId`](docs/sdks/sessiondebug/README.md#getsessiondatabysessionid) - Get Session Data By Session Id
- [`sessionDebugGetSessionDataBySid`](docs/sdks/sessiondebug/README.md#getsessiondatabysid) - Get Session Data By Sid
- [`sessionDebugGetSessionToolCallResultById`](docs/sdks/sessiondebug/README.md#getsessiontoolcallresultbyid) - Get Session Tool Call Result By Id
- [`sessionLabelsCreate`](docs/sdks/sessionlabels/README.md#create) - Create Label
- [`sessionLabelsGetById`](docs/sdks/sessionlabels/README.md#getbyid) - Get Label By Id
- [`sessionLabelsList`](docs/sdks/sessionlabels/README.md#list) - Session Labels List
- [`sessionsFullSummaryGetById`](docs/sdks/fullsummary/README.md#getbyid) - Get Full Session Summary By Id
- [`sessionsGenerateSessionRecordingUrls`](docs/sdks/sessions/README.md#generatesessionrecordingurls) - Generate Recording Urls
- [`sessionsGetById`](docs/sdks/sessions/README.md#getbyid) - Get A Single Session By Id
- [`sessionsLatencyGetById`](docs/sdks/latency/README.md#getbyid) - Inspect Latency For Session
- [`sessionsList`](docs/sdks/sessions/README.md#list) - Sessions List
- [`sessionsSessionRecordingStream`](docs/sdks/sessions/README.md#sessionrecordingstream) - Stream Recording
- [`sessionsTranscriptGetById`](docs/sdks/transcript/README.md#getbyid) - Get Session Transcript By Id
- [`takeoutsCreate`](docs/sdks/takeouts/README.md#create) - Create Takeout
- [`takeoutsTakeoutsGetByJobId`](docs/sdks/takeouts/README.md#takeoutsgetbyjobid) - Get Takeout
- [`takeoutsTakeoutsGetFile`](docs/sdks/takeouts/README.md#takeoutsgetfile) - Get File
- [`toolsCreate`](docs/sdks/tools/README.md#create) - Create Tool
- [`toolsDelete`](docs/sdks/tools/README.md#delete) - Delete Tool
- [`toolsGetByName`](docs/sdks/tools/README.md#getbyname) - Tool Info
- [`toolsList`](docs/sdks/tools/README.md#list) - Tool List
- [`toolsUpdate`](docs/sdks/tools/README.md#update) - Update Tool
- [`usersCreate`](docs/sdks/users/README.md#create) - Create User
- [`usersCreate`](docs/sdks/v1/README.md#create) - Create User
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete User
- [`usersDelete`](docs/sdks/v1/README.md#delete) - Delete User
- [`usersList`](docs/sdks/users/README.md#list) - List Users
- [`usersList`](docs/sdks/v1/README.md#list) - List Users
- [`usersUpdate`](docs/sdks/users/README.md#update) - Update User
- [`usersUpdate`](docs/sdks/v1/README.md#update) - Update User
- [`usersUsersDeleteAccount`](docs/sdks/users/README.md#usersdeleteaccount) - Request Removal Of This Account
- [`usersUsersDeleteAccount`](docs/sdks/v1/README.md#usersdeleteaccount) - Request Removal Of This Account
- [`usersUsersGetByEmail`](docs/sdks/users/README.md#usersgetbyemail) - Get User
- [`usersUsersGetByEmail`](docs/sdks/v1/README.md#usersgetbyemail) - Get User
- [`usersUsersSendEmail`](docs/sdks/users/README.md#userssendemail) - Send User Email
- [`usersUsersSendEmail`](docs/sdks/v1/README.md#userssendemail) - Send User Email
- ~~[`dashboardsPostSessionEventsDashboard`](docs/sdks/dashboards/README.md#postsessioneventsdashboard)~~ - Post Session Events :warning: **Deprecated**
- ~~[`dashboardsPostSessionsDashboard`](docs/sdks/dashboards/README.md#postsessionsdashboard)~~ - Post Sessions :warning: **Deprecated**
- ~~[`dashboardsPostSessionSummaryDashboard`](docs/sdks/dashboards/README.md#postsessionsummarydashboard)~~ - Post Session Summary :warning: **Deprecated**
- ~~[`dashboardsPostSessionTransfersDashboard`](docs/sdks/dashboards/README.md#postsessiontransfersdashboard)~~ - Post Session Transfers :warning: **Deprecated**

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
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await syllableSDK.insights.folders.uploadFile({
    folderId: 444923,
    callId: "<id>",
  });

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
  }, {
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

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SyllableSDKError`](./src/models/errors/syllablesdkerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { SyllableSDK } from "syllable-sdk";
import * as errors from "syllable-sdk/models/errors";

const syllableSDK = new SyllableSDK({
  apiKeyHeader: process.env["SYLLABLESDK_API_KEY_HEADER"] ?? "",
});

async function run() {
  try {
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

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SyllableSDKError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.HTTPValidationError) {
        console.log(error.data$.detail); // ValidationError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SyllableSDKError`](./src/models/errors/syllablesdkerror.ts): The base class for HTTP error responses.
  * [`HTTPValidationError`](./src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SyllableSDKError`](./src/models/errors/syllablesdkerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SyllableSDK } from "syllable-sdk";

const syllableSDK = new SyllableSDK({
  serverURL: "https://api.syllable.cloud",
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

const sdk = new SyllableSDK({ httpClient: httpClient });
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
