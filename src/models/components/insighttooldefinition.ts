/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Model for an insight tool definition. This is a template that can be used by multiple insight
 *
 * @remarks
 * tool configurations, each providing their own parameter values.
 */
export type InsightToolDefinition = {
  /**
   * Unique ID for insight tool definition
   */
  id: number;
  /**
   * Human-readable name of insight tool definition
   */
  name: string;
  /**
   * Type of insight tool definition
   */
  type: string;
  /**
   * Text description of insight tool definition
   */
  description: string;
  /**
   * Parameters for tools that use this definition and their associated types
   */
  toolParameters?: any | undefined;
  /**
   * Result key/types for insight tool definition
   */
  toolResultSet?: any | undefined;
};

/** @internal */
export const InsightToolDefinition$inboundSchema: z.ZodType<
  InsightToolDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  tool_parameters: z.any().optional(),
  tool_result_set: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_parameters": "toolParameters",
    "tool_result_set": "toolResultSet",
  });
});

/** @internal */
export type InsightToolDefinition$Outbound = {
  id: number;
  name: string;
  type: string;
  description: string;
  tool_parameters?: any | undefined;
  tool_result_set?: any | undefined;
};

/** @internal */
export const InsightToolDefinition$outboundSchema: z.ZodType<
  InsightToolDefinition$Outbound,
  z.ZodTypeDef,
  InsightToolDefinition
> = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  toolParameters: z.any().optional(),
  toolResultSet: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    toolParameters: "tool_parameters",
    toolResultSet: "tool_result_set",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsightToolDefinition$ {
  /** @deprecated use `InsightToolDefinition$inboundSchema` instead. */
  export const inboundSchema = InsightToolDefinition$inboundSchema;
  /** @deprecated use `InsightToolDefinition$outboundSchema` instead. */
  export const outboundSchema = InsightToolDefinition$outboundSchema;
  /** @deprecated use `InsightToolDefinition$Outbound` instead. */
  export type Outbound = InsightToolDefinition$Outbound;
}

export function insightToolDefinitionToJSON(
  insightToolDefinition: InsightToolDefinition,
): string {
  return JSON.stringify(
    InsightToolDefinition$outboundSchema.parse(insightToolDefinition),
  );
}

export function insightToolDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<InsightToolDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsightToolDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsightToolDefinition' from JSON`,
  );
}
