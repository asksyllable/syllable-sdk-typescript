/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AgentGetByIdRequest = {
  agentId: number;
};

/** @internal */
export const AgentGetByIdRequest$inboundSchema: z.ZodType<
  AgentGetByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  agent_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "agent_id": "agentId",
  });
});

/** @internal */
export type AgentGetByIdRequest$Outbound = {
  agent_id: number;
};

/** @internal */
export const AgentGetByIdRequest$outboundSchema: z.ZodType<
  AgentGetByIdRequest$Outbound,
  z.ZodTypeDef,
  AgentGetByIdRequest
> = z.object({
  agentId: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    agentId: "agent_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentGetByIdRequest$ {
  /** @deprecated use `AgentGetByIdRequest$inboundSchema` instead. */
  export const inboundSchema = AgentGetByIdRequest$inboundSchema;
  /** @deprecated use `AgentGetByIdRequest$outboundSchema` instead. */
  export const outboundSchema = AgentGetByIdRequest$outboundSchema;
  /** @deprecated use `AgentGetByIdRequest$Outbound` instead. */
  export type Outbound = AgentGetByIdRequest$Outbound;
}

export function agentGetByIdRequestToJSON(
  agentGetByIdRequest: AgentGetByIdRequest,
): string {
  return JSON.stringify(
    AgentGetByIdRequest$outboundSchema.parse(agentGetByIdRequest),
  );
}

export function agentGetByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<AgentGetByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentGetByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentGetByIdRequest' from JSON`,
  );
}
