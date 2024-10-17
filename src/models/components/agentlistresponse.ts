/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Agent,
  Agent$inboundSchema,
  Agent$Outbound,
  Agent$outboundSchema,
} from "./agent.js";

export type AgentListResponse = {
  agents: Array<Agent>;
  count: number;
};

/** @internal */
export const AgentListResponse$inboundSchema: z.ZodType<
  AgentListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  agents: z.array(Agent$inboundSchema),
  count: z.number().int(),
});

/** @internal */
export type AgentListResponse$Outbound = {
  agents: Array<Agent$Outbound>;
  count: number;
};

/** @internal */
export const AgentListResponse$outboundSchema: z.ZodType<
  AgentListResponse$Outbound,
  z.ZodTypeDef,
  AgentListResponse
> = z.object({
  agents: z.array(Agent$outboundSchema),
  count: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentListResponse$ {
  /** @deprecated use `AgentListResponse$inboundSchema` instead. */
  export const inboundSchema = AgentListResponse$inboundSchema;
  /** @deprecated use `AgentListResponse$outboundSchema` instead. */
  export const outboundSchema = AgentListResponse$outboundSchema;
  /** @deprecated use `AgentListResponse$Outbound` instead. */
  export type Outbound = AgentListResponse$Outbound;
}
