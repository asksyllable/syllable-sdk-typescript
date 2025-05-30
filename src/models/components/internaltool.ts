/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolFunction,
  ToolFunction$inboundSchema,
  ToolFunction$Outbound,
  ToolFunction$outboundSchema,
} from "./toolfunction.js";

/**
 * A tool definition to be used by the OpenAI API.
 */
export type InternalTool = {
  /**
   * Always `function`.
   */
  type?: "function" | undefined;
  /**
   * A function available to an agent.
   *
   * @remarks
   *
   * See:
   * - https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling
   */
  function: ToolFunction;
};

/** @internal */
export const InternalTool$inboundSchema: z.ZodType<
  InternalTool,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("function").default("function"),
  function: ToolFunction$inboundSchema,
});

/** @internal */
export type InternalTool$Outbound = {
  type: "function";
  function: ToolFunction$Outbound;
};

/** @internal */
export const InternalTool$outboundSchema: z.ZodType<
  InternalTool$Outbound,
  z.ZodTypeDef,
  InternalTool
> = z.object({
  type: z.literal("function").default("function" as const),
  function: ToolFunction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalTool$ {
  /** @deprecated use `InternalTool$inboundSchema` instead. */
  export const inboundSchema = InternalTool$inboundSchema;
  /** @deprecated use `InternalTool$outboundSchema` instead. */
  export const outboundSchema = InternalTool$outboundSchema;
  /** @deprecated use `InternalTool$Outbound` instead. */
  export type Outbound = InternalTool$Outbound;
}

export function internalToolToJSON(internalTool: InternalTool): string {
  return JSON.stringify(InternalTool$outboundSchema.parse(internalTool));
}

export function internalToolFromJSON(
  jsonString: string,
): SafeParseResult<InternalTool, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InternalTool$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InternalTool' from JSON`,
  );
}
