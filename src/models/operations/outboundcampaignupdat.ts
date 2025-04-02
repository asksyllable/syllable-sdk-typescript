/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OutboundCampaignUpdatRequest = {
  campaignId: number;
  outboundCampaignInput: components.OutboundCampaignInput;
};

/** @internal */
export const OutboundCampaignUpdatRequest$inboundSchema: z.ZodType<
  OutboundCampaignUpdatRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  campaign_id: z.number().int(),
  OutboundCampaignInput: components.OutboundCampaignInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "campaign_id": "campaignId",
    "OutboundCampaignInput": "outboundCampaignInput",
  });
});

/** @internal */
export type OutboundCampaignUpdatRequest$Outbound = {
  campaign_id: number;
  OutboundCampaignInput: components.OutboundCampaignInput$Outbound;
};

/** @internal */
export const OutboundCampaignUpdatRequest$outboundSchema: z.ZodType<
  OutboundCampaignUpdatRequest$Outbound,
  z.ZodTypeDef,
  OutboundCampaignUpdatRequest
> = z.object({
  campaignId: z.number().int(),
  outboundCampaignInput: components.OutboundCampaignInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    campaignId: "campaign_id",
    outboundCampaignInput: "OutboundCampaignInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutboundCampaignUpdatRequest$ {
  /** @deprecated use `OutboundCampaignUpdatRequest$inboundSchema` instead. */
  export const inboundSchema = OutboundCampaignUpdatRequest$inboundSchema;
  /** @deprecated use `OutboundCampaignUpdatRequest$outboundSchema` instead. */
  export const outboundSchema = OutboundCampaignUpdatRequest$outboundSchema;
  /** @deprecated use `OutboundCampaignUpdatRequest$Outbound` instead. */
  export type Outbound = OutboundCampaignUpdatRequest$Outbound;
}

export function outboundCampaignUpdatRequestToJSON(
  outboundCampaignUpdatRequest: OutboundCampaignUpdatRequest,
): string {
  return JSON.stringify(
    OutboundCampaignUpdatRequest$outboundSchema.parse(
      outboundCampaignUpdatRequest,
    ),
  );
}

export function outboundCampaignUpdatRequestFromJSON(
  jsonString: string,
): SafeParseResult<OutboundCampaignUpdatRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutboundCampaignUpdatRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutboundCampaignUpdatRequest' from JSON`,
  );
}
