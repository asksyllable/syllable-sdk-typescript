# ExperimentResponse

Response model for experiment operations.

An experiment splits the traffic of one channel target between two or more agents, so that the
agents can be compared on the same population. One variant is the control the others are
measured against. Each variant is a weighted pointer to the agent that variant runs; the weights
are relative and not percentages.

## Example Usage

```typescript
import { ExperimentResponse } from "syllable-sdk/models/components";

let value: ExperimentResponse = {
  id: 1,
  name: "Shorter greeting",
  targetId: 1,
  variants: [
    {
      id: 1,
      name: "b",
      weight: 10,
      isControl: false,
      agentId: 1,
      agentName: "Front desk",
    },
  ],
  status: "stopped",
  createdAt: new Date("2026-03-17T07:22:20.252Z"),
  updatedAt: new Date("2026-05-03T19:17:50.374Z"),
  lastUpdatedBy: "<value>",
  target: {
    id: 1,
    target: "+19995551234",
    targetMode: "whatsapp",
    channelId: 1,
    channelName: "Main line",
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                  | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The internal ID of the experiment                                                                                                     | 1                                                                                                                                     |
| `name`                                                                                                                                | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The name of the experiment                                                                                                            | Shorter greeting                                                                                                                      |
| `targetId`                                                                                                                            | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The channel target being split, or null if that target has since been deleted. A running experiment always has one.                   | 1                                                                                                                                     |
| `variants`                                                                                                                            | [components.DaoExperimentVariantDetail](../../models/components/daoexperimentvariantdetail.md)[]                                      | :heavy_check_mark:                                                                                                                    | The variants of the experiment, in a stable order                                                                                     |                                                                                                                                       |
| `description`                                                                                                                         | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The hypothesis under test                                                                                                             |                                                                                                                                       |
| `status`                                                                                                                              | [components.ExperimentStatus](../../models/components/experimentstatus.md)                                                            | :heavy_check_mark:                                                                                                                    | Status of an experiment.<br/><br/>The column is a varchar and not a database enum, so a new value here does not need a migration.     |                                                                                                                                       |
| `startedAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                         | :heavy_minus_sign:                                                                                                                    | When the experiment started                                                                                                           |                                                                                                                                       |
| `stoppedAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                         | :heavy_minus_sign:                                                                                                                    | When the experiment stopped                                                                                                           |                                                                                                                                       |
| `createdAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                         | :heavy_check_mark:                                                                                                                    | When the experiment was created                                                                                                       |                                                                                                                                       |
| `updatedAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                         | :heavy_check_mark:                                                                                                                    | When the experiment was last written                                                                                                  |                                                                                                                                       |
| `lastUpdatedBy`                                                                                                                       | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Who last wrote it                                                                                                                     |                                                                                                                                       |
| `target`                                                                                                                              | [components.DaoExperimentTargetSummary](../../models/components/daoexperimenttargetsummary.md)                                        | :heavy_minus_sign:                                                                                                                    | The channel target being split, resolved for display. Null when the target has since been deleted, and when the read did not load it. |                                                                                                                                       |