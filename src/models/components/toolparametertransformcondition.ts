/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A condition to be met for a transform to be applied to the value of a parameter.
 */
export type ToolParameterTransformCondition = {
  /**
   * The name of the parameter to check.
   */
  key: string;
  /**
   * The value to check against the parameter.
   */
  value: string;
  /**
   * The operator to use for the comparison.
   */
  operator?: "eq" | null | undefined;
};

/** @internal */
export const ToolParameterTransformCondition$inboundSchema: z.ZodType<
  ToolParameterTransformCondition,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  value: z.string(),
  operator: z.nullable(z.literal("eq")).optional(),
});

/** @internal */
export type ToolParameterTransformCondition$Outbound = {
  key: string;
  value: string;
  operator: "eq" | null;
};

/** @internal */
export const ToolParameterTransformCondition$outboundSchema: z.ZodType<
  ToolParameterTransformCondition$Outbound,
  z.ZodTypeDef,
  ToolParameterTransformCondition
> = z.object({
  key: z.string(),
  value: z.string(),
  operator: z.nullable(z.literal("eq").default("eq" as const)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolParameterTransformCondition$ {
  /** @deprecated use `ToolParameterTransformCondition$inboundSchema` instead. */
  export const inboundSchema = ToolParameterTransformCondition$inboundSchema;
  /** @deprecated use `ToolParameterTransformCondition$outboundSchema` instead. */
  export const outboundSchema = ToolParameterTransformCondition$outboundSchema;
  /** @deprecated use `ToolParameterTransformCondition$Outbound` instead. */
  export type Outbound = ToolParameterTransformCondition$Outbound;
}

export function toolParameterTransformConditionToJSON(
  toolParameterTransformCondition: ToolParameterTransformCondition,
): string {
  return JSON.stringify(
    ToolParameterTransformCondition$outboundSchema.parse(
      toolParameterTransformCondition,
    ),
  );
}

export function toolParameterTransformConditionFromJSON(
  jsonString: string,
): SafeParseResult<ToolParameterTransformCondition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolParameterTransformCondition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolParameterTransformCondition' from JSON`,
  );
}
