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

export type AgentCreateVariables = {};

export type AgentCreate = {
  name: string;
  timezone: string;
  type: string;
  promptId: number;
  customMessageId: number | null;
  languages: Array<string>;
  promptToolDefaults?: Array<AgentToolDefaults> | undefined;
  toolHeaders?: { [k: string]: string } | null | undefined;
  variables?: AgentCreateVariables | null | undefined;
};

/** @internal */
export const AgentCreateVariables$inboundSchema: z.ZodType<
  AgentCreateVariables,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AgentCreateVariables$Outbound = {};

/** @internal */
export const AgentCreateVariables$outboundSchema: z.ZodType<
  AgentCreateVariables$Outbound,
  z.ZodTypeDef,
  AgentCreateVariables
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentCreateVariables$ {
  /** @deprecated use `AgentCreateVariables$inboundSchema` instead. */
  export const inboundSchema = AgentCreateVariables$inboundSchema;
  /** @deprecated use `AgentCreateVariables$outboundSchema` instead. */
  export const outboundSchema = AgentCreateVariables$outboundSchema;
  /** @deprecated use `AgentCreateVariables$Outbound` instead. */
  export type Outbound = AgentCreateVariables$Outbound;
}

export function agentCreateVariablesToJSON(
  agentCreateVariables: AgentCreateVariables,
): string {
  return JSON.stringify(
    AgentCreateVariables$outboundSchema.parse(agentCreateVariables),
  );
}

export function agentCreateVariablesFromJSON(
  jsonString: string,
): SafeParseResult<AgentCreateVariables, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentCreateVariables$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentCreateVariables' from JSON`,
  );
}

/** @internal */
export const AgentCreate$inboundSchema: z.ZodType<
  AgentCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  timezone: z.string(),
  type: z.string(),
  prompt_id: z.number().int(),
  custom_message_id: z.nullable(z.number().int()),
  languages: z.array(z.string()),
  prompt_tool_defaults: z.array(AgentToolDefaults$inboundSchema).optional(),
  tool_headers: z.nullable(z.record(z.string())).optional(),
  variables: z.nullable(z.lazy(() => AgentCreateVariables$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "prompt_id": "promptId",
    "custom_message_id": "customMessageId",
    "prompt_tool_defaults": "promptToolDefaults",
    "tool_headers": "toolHeaders",
  });
});

/** @internal */
export type AgentCreate$Outbound = {
  name: string;
  timezone: string;
  type: string;
  prompt_id: number;
  custom_message_id: number | null;
  languages: Array<string>;
  prompt_tool_defaults?: Array<AgentToolDefaults$Outbound> | undefined;
  tool_headers?: { [k: string]: string } | null | undefined;
  variables?: AgentCreateVariables$Outbound | null | undefined;
};

/** @internal */
export const AgentCreate$outboundSchema: z.ZodType<
  AgentCreate$Outbound,
  z.ZodTypeDef,
  AgentCreate
> = z.object({
  name: z.string(),
  timezone: z.string(),
  type: z.string(),
  promptId: z.number().int(),
  customMessageId: z.nullable(z.number().int()),
  languages: z.array(z.string()),
  promptToolDefaults: z.array(AgentToolDefaults$outboundSchema).optional(),
  toolHeaders: z.nullable(z.record(z.string())).optional(),
  variables: z.nullable(z.lazy(() => AgentCreateVariables$outboundSchema))
    .optional(),
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
export namespace AgentCreate$ {
  /** @deprecated use `AgentCreate$inboundSchema` instead. */
  export const inboundSchema = AgentCreate$inboundSchema;
  /** @deprecated use `AgentCreate$outboundSchema` instead. */
  export const outboundSchema = AgentCreate$outboundSchema;
  /** @deprecated use `AgentCreate$Outbound` instead. */
  export type Outbound = AgentCreate$Outbound;
}

export function agentCreateToJSON(agentCreate: AgentCreate): string {
  return JSON.stringify(AgentCreate$outboundSchema.parse(agentCreate));
}

export function agentCreateFromJSON(
  jsonString: string,
): SafeParseResult<AgentCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentCreate' from JSON`,
  );
}
