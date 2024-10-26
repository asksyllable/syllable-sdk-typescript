/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type AvailableTarget = {
  subOrganizationId: number;
  channelId: number;
  channelName: string | null;
  target: string;
};

/** @internal */
export const AvailableTarget$inboundSchema: z.ZodType<
  AvailableTarget,
  z.ZodTypeDef,
  unknown
> = z.object({
  sub_organization_id: z.number().int(),
  channel_id: z.number().int(),
  channel_name: z.nullable(z.string()),
  target: z.string(),
}).transform((v) => {
  return remap$(v, {
    "sub_organization_id": "subOrganizationId",
    "channel_id": "channelId",
    "channel_name": "channelName",
  });
});

/** @internal */
export type AvailableTarget$Outbound = {
  sub_organization_id: number;
  channel_id: number;
  channel_name: string | null;
  target: string;
};

/** @internal */
export const AvailableTarget$outboundSchema: z.ZodType<
  AvailableTarget$Outbound,
  z.ZodTypeDef,
  AvailableTarget
> = z.object({
  subOrganizationId: z.number().int(),
  channelId: z.number().int(),
  channelName: z.nullable(z.string()),
  target: z.string(),
}).transform((v) => {
  return remap$(v, {
    subOrganizationId: "sub_organization_id",
    channelId: "channel_id",
    channelName: "channel_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AvailableTarget$ {
  /** @deprecated use `AvailableTarget$inboundSchema` instead. */
  export const inboundSchema = AvailableTarget$inboundSchema;
  /** @deprecated use `AvailableTarget$outboundSchema` instead. */
  export const outboundSchema = AvailableTarget$outboundSchema;
  /** @deprecated use `AvailableTarget$Outbound` instead. */
  export type Outbound = AvailableTarget$Outbound;
}
