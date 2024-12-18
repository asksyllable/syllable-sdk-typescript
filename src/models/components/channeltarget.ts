/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DaoChannelTargetAgent,
  DaoChannelTargetAgent$inboundSchema,
  DaoChannelTargetAgent$Outbound,
  DaoChannelTargetAgent$outboundSchema,
} from "./daochanneltargetagent.js";

/**
 * Class for all Channel Target responses
 */
export type ChannelTarget = {
  id: number;
  channelId: number | null;
  channelName: string | null;
  agentId: number | null;
  agent: DaoChannelTargetAgent | null;
  target: string | null;
  targetMode: string | null;
  fallbackTarget: string | null;
  isTest: boolean | null;
  updatedAt: Date | null;
  lastUpdatedBy: string | null;
};

/** @internal */
export const ChannelTarget$inboundSchema: z.ZodType<
  ChannelTarget,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  channel_id: z.nullable(z.number().int()),
  channel_name: z.nullable(z.string()),
  agent_id: z.nullable(z.number().int()),
  agent: z.nullable(DaoChannelTargetAgent$inboundSchema),
  target: z.nullable(z.string()),
  target_mode: z.nullable(z.string()),
  fallback_target: z.nullable(z.string()),
  is_test: z.nullable(z.boolean()),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  last_updated_by: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "channel_name": "channelName",
    "agent_id": "agentId",
    "target_mode": "targetMode",
    "fallback_target": "fallbackTarget",
    "is_test": "isTest",
    "updated_at": "updatedAt",
    "last_updated_by": "lastUpdatedBy",
  });
});

/** @internal */
export type ChannelTarget$Outbound = {
  id: number;
  channel_id: number | null;
  channel_name: string | null;
  agent_id: number | null;
  agent: DaoChannelTargetAgent$Outbound | null;
  target: string | null;
  target_mode: string | null;
  fallback_target: string | null;
  is_test: boolean | null;
  updated_at: string | null;
  last_updated_by: string | null;
};

/** @internal */
export const ChannelTarget$outboundSchema: z.ZodType<
  ChannelTarget$Outbound,
  z.ZodTypeDef,
  ChannelTarget
> = z.object({
  id: z.number().int(),
  channelId: z.nullable(z.number().int()),
  channelName: z.nullable(z.string()),
  agentId: z.nullable(z.number().int()),
  agent: z.nullable(DaoChannelTargetAgent$outboundSchema),
  target: z.nullable(z.string()),
  targetMode: z.nullable(z.string()),
  fallbackTarget: z.nullable(z.string()),
  isTest: z.nullable(z.boolean()),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  lastUpdatedBy: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    channelName: "channel_name",
    agentId: "agent_id",
    targetMode: "target_mode",
    fallbackTarget: "fallback_target",
    isTest: "is_test",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelTarget$ {
  /** @deprecated use `ChannelTarget$inboundSchema` instead. */
  export const inboundSchema = ChannelTarget$inboundSchema;
  /** @deprecated use `ChannelTarget$outboundSchema` instead. */
  export const outboundSchema = ChannelTarget$outboundSchema;
  /** @deprecated use `ChannelTarget$Outbound` instead. */
  export type Outbound = ChannelTarget$Outbound;
}

export function channelTargetToJSON(channelTarget: ChannelTarget): string {
  return JSON.stringify(ChannelTarget$outboundSchema.parse(channelTarget));
}

export function channelTargetFromJSON(
  jsonString: string,
): SafeParseResult<ChannelTarget, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChannelTarget$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelTarget' from JSON`,
  );
}
