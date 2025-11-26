# UpdateBridgePhrasesConfigRequest

## Example Usage

```typescript
import { UpdateBridgePhrasesConfigRequest } from "syllable-sdk/models/operations";

let value: UpdateBridgePhrasesConfigRequest = {
  bridgePhrasesConfig: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `agentId`                                                                        | *number*                                                                         | :heavy_minus_sign:                                                               | Agent ID to update config for                                                    |
| `toolName`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | Tool name to update config for                                                   |
| `bridgePhrasesConfig`                                                            | [components.BridgePhrasesConfig](../../models/components/bridgephrasesconfig.md) | :heavy_check_mark:                                                               | N/A                                                                              |