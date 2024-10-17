/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ToolParameterTransformCondition,
  ToolParameterTransformCondition$inboundSchema,
  ToolParameterTransformCondition$Outbound,
  ToolParameterTransformCondition$outboundSchema,
} from "./toolparametertransformcondition.js";

/**
 * A transform to be applied to the value of a parameter.
 */
export type ToolParameterTransform = {
  when?: ToolParameterTransformCondition | null | undefined;
  /**
   * The action to perform on the value: `default` means only set the value (using the `format` field) if the parameter doesn't exist or is empty, `override` means always set the value, and `remove` means remove the parameter value.
   */
  action?: string | null | undefined;
  format?: string | null | undefined;
};

/** @internal */
export const ToolParameterTransform$inboundSchema: z.ZodType<
  ToolParameterTransform,
  z.ZodTypeDef,
  unknown
> = z.object({
  when: z.nullable(ToolParameterTransformCondition$inboundSchema).optional(),
  action: z.nullable(z.string()).optional(),
  format: z.nullable(z.string()).optional(),
});

/** @internal */
export type ToolParameterTransform$Outbound = {
  when?: ToolParameterTransformCondition$Outbound | null | undefined;
  action?: string | null | undefined;
  format?: string | null | undefined;
};

/** @internal */
export const ToolParameterTransform$outboundSchema: z.ZodType<
  ToolParameterTransform$Outbound,
  z.ZodTypeDef,
  ToolParameterTransform
> = z.object({
  when: z.nullable(ToolParameterTransformCondition$outboundSchema).optional(),
  action: z.nullable(z.string()).optional(),
  format: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolParameterTransform$ {
  /** @deprecated use `ToolParameterTransform$inboundSchema` instead. */
  export const inboundSchema = ToolParameterTransform$inboundSchema;
  /** @deprecated use `ToolParameterTransform$outboundSchema` instead. */
  export const outboundSchema = ToolParameterTransform$outboundSchema;
  /** @deprecated use `ToolParameterTransform$Outbound` instead. */
  export type Outbound = ToolParameterTransform$Outbound;
}
