/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentToolDefaults,
  AgentToolDefaults$inboundSchema,
  AgentToolDefaults$Outbound,
  AgentToolDefaults$outboundSchema,
} from "./agenttooldefaults.js";

export type AgentUpdateVariables = {};

export type AgentUpdate = {
  name: string;
  description?: string | null | undefined;
  timezone: string;
  type: string;
  promptId: number;
  customMessageId: number | null;
  languages: Array<string>;
  promptToolDefaults?: Array<AgentToolDefaults> | undefined;
  toolHeaders?: { [k: string]: string } | null | undefined;
  variables?: AgentUpdateVariables | null | undefined;
  /**
   * The Agent ID
   */
  id: number;
};

/** @internal */
export const AgentUpdateVariables$inboundSchema: z.ZodType<
  AgentUpdateVariables,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AgentUpdateVariables$Outbound = {};

/** @internal */
export const AgentUpdateVariables$outboundSchema: z.ZodType<
  AgentUpdateVariables$Outbound,
  z.ZodTypeDef,
  AgentUpdateVariables
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentUpdateVariables$ {
  /** @deprecated use `AgentUpdateVariables$inboundSchema` instead. */
  export const inboundSchema = AgentUpdateVariables$inboundSchema;
  /** @deprecated use `AgentUpdateVariables$outboundSchema` instead. */
  export const outboundSchema = AgentUpdateVariables$outboundSchema;
  /** @deprecated use `AgentUpdateVariables$Outbound` instead. */
  export type Outbound = AgentUpdateVariables$Outbound;
}

export function agentUpdateVariablesToJSON(
  agentUpdateVariables: AgentUpdateVariables,
): string {
  return JSON.stringify(
    AgentUpdateVariables$outboundSchema.parse(agentUpdateVariables),
  );
}

export function agentUpdateVariablesFromJSON(
  jsonString: string,
): SafeParseResult<AgentUpdateVariables, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentUpdateVariables$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentUpdateVariables' from JSON`,
  );
}

/** @internal */
export const AgentUpdate$inboundSchema: z.ZodType<
  AgentUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  timezone: z.string(),
  type: z.string(),
  prompt_id: z.number().int(),
  custom_message_id: z.nullable(z.number().int()),
  languages: z.array(z.string()),
  prompt_tool_defaults: z.array(AgentToolDefaults$inboundSchema).optional(),
  tool_headers: z.nullable(z.record(z.string())).optional(),
  variables: z.nullable(z.lazy(() => AgentUpdateVariables$inboundSchema))
    .optional(),
  id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "prompt_id": "promptId",
    "custom_message_id": "customMessageId",
    "prompt_tool_defaults": "promptToolDefaults",
    "tool_headers": "toolHeaders",
  });
});

/** @internal */
export type AgentUpdate$Outbound = {
  name: string;
  description?: string | null | undefined;
  timezone: string;
  type: string;
  prompt_id: number;
  custom_message_id: number | null;
  languages: Array<string>;
  prompt_tool_defaults?: Array<AgentToolDefaults$Outbound> | undefined;
  tool_headers?: { [k: string]: string } | null | undefined;
  variables?: AgentUpdateVariables$Outbound | null | undefined;
  id: number;
};

/** @internal */
export const AgentUpdate$outboundSchema: z.ZodType<
  AgentUpdate$Outbound,
  z.ZodTypeDef,
  AgentUpdate
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  timezone: z.string(),
  type: z.string(),
  promptId: z.number().int(),
  customMessageId: z.nullable(z.number().int()),
  languages: z.array(z.string()),
  promptToolDefaults: z.array(AgentToolDefaults$outboundSchema).optional(),
  toolHeaders: z.nullable(z.record(z.string())).optional(),
  variables: z.nullable(z.lazy(() => AgentUpdateVariables$outboundSchema))
    .optional(),
  id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    promptId: "prompt_id",
    customMessageId: "custom_message_id",
    promptToolDefaults: "prompt_tool_defaults",
    toolHeaders: "tool_headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentUpdate$ {
  /** @deprecated use `AgentUpdate$inboundSchema` instead. */
  export const inboundSchema = AgentUpdate$inboundSchema;
  /** @deprecated use `AgentUpdate$outboundSchema` instead. */
  export const outboundSchema = AgentUpdate$outboundSchema;
  /** @deprecated use `AgentUpdate$Outbound` instead. */
  export type Outbound = AgentUpdate$Outbound;
}

export function agentUpdateToJSON(agentUpdate: AgentUpdate): string {
  return JSON.stringify(AgentUpdate$outboundSchema.parse(agentUpdate));
}

export function agentUpdateFromJSON(
  jsonString: string,
): SafeParseResult<AgentUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentUpdate' from JSON`,
  );
}
