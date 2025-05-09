/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A function available to an agent.
 *
 * @remarks
 *
 * See:
 * - https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling
 */
export type ToolFunction = {
  /**
   * The name of the function/tool call.
   */
  name: string;
  /**
   * The description of the tool.
   */
  description: string;
  /**
   * The JSON Schema of parameters of the function/tool call.
   */
  parameters?: any | undefined;
};

/** @internal */
export const ToolFunction$inboundSchema: z.ZodType<
  ToolFunction,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string(),
  parameters: z.any().optional(),
});

/** @internal */
export type ToolFunction$Outbound = {
  name: string;
  description: string;
  parameters?: any | undefined;
};

/** @internal */
export const ToolFunction$outboundSchema: z.ZodType<
  ToolFunction$Outbound,
  z.ZodTypeDef,
  ToolFunction
> = z.object({
  name: z.string(),
  description: z.string(),
  parameters: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolFunction$ {
  /** @deprecated use `ToolFunction$inboundSchema` instead. */
  export const inboundSchema = ToolFunction$inboundSchema;
  /** @deprecated use `ToolFunction$outboundSchema` instead. */
  export const outboundSchema = ToolFunction$outboundSchema;
  /** @deprecated use `ToolFunction$Outbound` instead. */
  export type Outbound = ToolFunction$Outbound;
}

export function toolFunctionToJSON(toolFunction: ToolFunction): string {
  return JSON.stringify(ToolFunction$outboundSchema.parse(toolFunction));
}

export function toolFunctionFromJSON(
  jsonString: string,
): SafeParseResult<ToolFunction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolFunction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolFunction' from JSON`,
  );
}
