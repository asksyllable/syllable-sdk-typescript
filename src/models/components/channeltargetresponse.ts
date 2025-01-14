/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentResponse,
  AgentResponse$inboundSchema,
  AgentResponse$Outbound,
  AgentResponse$outboundSchema,
} from "./agentresponse.js";
import {
  TargetModes,
  TargetModes$inboundSchema,
  TargetModes$outboundSchema,
} from "./targetmodes.js";

/**
 * Class for all Channel Target responses
 */
export type ChannelTargetResponse = {
  /**
   * The ID of the agent associated with the channel target
   */
  agentId: number;
  /**
   * The ID of the channel associated with the channel target
   */
  channelId: number;
  /**
   * The name of the channel target (must correspond to an organization-level target)
   */
  target: string;
  /**
   * Available modes (communication methods) for channel targets.
   */
  targetMode: TargetModes;
  /**
   * The fallback for the channel target (currently only supported for "voice" mode)
   */
  fallbackTarget?: string | null | undefined;
  /**
   * Whether the channel target is intended for testing. If true, any sessions created through this target will be labeled as test.
   */
  isTest?: boolean | undefined;
  /**
   * The ID of the channel target
   */
  id: number;
  /**
   * The name of the channel associated with the channel target
   */
  channelName: string;
  /**
   * Timestamp of the most recent update to the channel target
   */
  updatedAt: Date;
  /**
   * Email of the user who last updated the channel target
   */
  lastUpdatedBy: string;
  /**
   * Definition of the agent for the channel target
   */
  agent?: AgentResponse | null | undefined;
};

/** @internal */
export const ChannelTargetResponse$inboundSchema: z.ZodType<
  ChannelTargetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  agent_id: z.number().int(),
  channel_id: z.number().int(),
  target: z.string(),
  target_mode: TargetModes$inboundSchema,
  fallback_target: z.nullable(z.string()).optional(),
  is_test: z.boolean().default(false),
  id: z.number().int(),
  channel_name: z.string(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  last_updated_by: z.string(),
  agent: z.nullable(z.lazy(() => AgentResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "agent_id": "agentId",
    "channel_id": "channelId",
    "target_mode": "targetMode",
    "fallback_target": "fallbackTarget",
    "is_test": "isTest",
    "channel_name": "channelName",
    "updated_at": "updatedAt",
    "last_updated_by": "lastUpdatedBy",
  });
});

/** @internal */
export type ChannelTargetResponse$Outbound = {
  agent_id: number;
  channel_id: number;
  target: string;
  target_mode: string;
  fallback_target?: string | null | undefined;
  is_test: boolean;
  id: number;
  channel_name: string;
  updated_at: string;
  last_updated_by: string;
  agent?: AgentResponse$Outbound | null | undefined;
};

/** @internal */
export const ChannelTargetResponse$outboundSchema: z.ZodType<
  ChannelTargetResponse$Outbound,
  z.ZodTypeDef,
  ChannelTargetResponse
> = z.object({
  agentId: z.number().int(),
  channelId: z.number().int(),
  target: z.string(),
  targetMode: TargetModes$outboundSchema,
  fallbackTarget: z.nullable(z.string()).optional(),
  isTest: z.boolean().default(false),
  id: z.number().int(),
  channelName: z.string(),
  updatedAt: z.date().transform(v => v.toISOString()),
  lastUpdatedBy: z.string(),
  agent: z.nullable(z.lazy(() => AgentResponse$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    agentId: "agent_id",
    channelId: "channel_id",
    targetMode: "target_mode",
    fallbackTarget: "fallback_target",
    isTest: "is_test",
    channelName: "channel_name",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelTargetResponse$ {
  /** @deprecated use `ChannelTargetResponse$inboundSchema` instead. */
  export const inboundSchema = ChannelTargetResponse$inboundSchema;
  /** @deprecated use `ChannelTargetResponse$outboundSchema` instead. */
  export const outboundSchema = ChannelTargetResponse$outboundSchema;
  /** @deprecated use `ChannelTargetResponse$Outbound` instead. */
  export type Outbound = ChannelTargetResponse$Outbound;
}

export function channelTargetResponseToJSON(
  channelTargetResponse: ChannelTargetResponse,
): string {
  return JSON.stringify(
    ChannelTargetResponse$outboundSchema.parse(channelTargetResponse),
  );
}

export function channelTargetResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChannelTargetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChannelTargetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelTargetResponse' from JSON`,
  );
}
