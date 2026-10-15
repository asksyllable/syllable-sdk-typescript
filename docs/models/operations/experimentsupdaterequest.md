# ExperimentsUpdateRequest

## Example Usage

```typescript
import { ExperimentsUpdateRequest } from "syllable-sdk/models/operations";

let value: ExperimentsUpdateRequest = {
  experimentId: 961804,
  experimentUpdateRequest: {
    name: "Shorter greeting",
    description: "Test whether a shorter greeting reduces call duration.",
    variants: [
      {
        name: "control",
        weight: 50,
        isControl: true,
        agentId: 10,
      },
      {
        name: "short greeting",
        weight: 50,
        agentId: 11,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                | N/A                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                   |
| `experimentUpdateRequest`                                                                                                                                                                                                                                                         | [components.ExperimentUpdateRequest](../../models/components/experimentupdaterequest.md)                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                | N/A                                                                                                                                                                                                                                                                               | {<br/>"description": "Test whether a shorter greeting reduces call duration.",<br/>"name": "Shorter greeting",<br/>"variants": [<br/>{<br/>"agent_id": 10,<br/>"is_control": true,<br/>"name": "control",<br/>"weight": 50<br/>},<br/>{<br/>"agent_id": 11,<br/>"is_control": false,<br/>"name": "short greeting",<br/>"weight": 50<br/>}<br/>]<br/>} |