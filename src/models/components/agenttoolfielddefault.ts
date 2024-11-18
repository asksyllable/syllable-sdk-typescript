/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AgentToolFieldDefault = {
  fieldName: string;
  defaultValue?: any | undefined;
};

/** @internal */
export const AgentToolFieldDefault$inboundSchema: z.ZodType<
  AgentToolFieldDefault,
  z.ZodTypeDef,
  unknown
> = z.object({
  field_name: z.string(),
  default_value: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "field_name": "fieldName",
    "default_value": "defaultValue",
  });
});

/** @internal */
export type AgentToolFieldDefault$Outbound = {
  field_name: string;
  default_value?: any | undefined;
};

/** @internal */
export const AgentToolFieldDefault$outboundSchema: z.ZodType<
  AgentToolFieldDefault$Outbound,
  z.ZodTypeDef,
  AgentToolFieldDefault
> = z.object({
  fieldName: z.string(),
  defaultValue: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    fieldName: "field_name",
    defaultValue: "default_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentToolFieldDefault$ {
  /** @deprecated use `AgentToolFieldDefault$inboundSchema` instead. */
  export const inboundSchema = AgentToolFieldDefault$inboundSchema;
  /** @deprecated use `AgentToolFieldDefault$outboundSchema` instead. */
  export const outboundSchema = AgentToolFieldDefault$outboundSchema;
  /** @deprecated use `AgentToolFieldDefault$Outbound` instead. */
  export type Outbound = AgentToolFieldDefault$Outbound;
}

export function agentToolFieldDefaultToJSON(
  agentToolFieldDefault: AgentToolFieldDefault,
): string {
  return JSON.stringify(
    AgentToolFieldDefault$outboundSchema.parse(agentToolFieldDefault),
  );
}

export function agentToolFieldDefaultFromJSON(
  jsonString: string,
): SafeParseResult<AgentToolFieldDefault, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentToolFieldDefault$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentToolFieldDefault' from JSON`,
  );
}
