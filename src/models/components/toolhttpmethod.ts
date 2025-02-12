/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The HTTP method to use for a tool HTTP request.
 */
export const ToolHttpMethod = {
  Get: "get",
  Post: "post",
} as const;
/**
 * The HTTP method to use for a tool HTTP request.
 */
export type ToolHttpMethod = ClosedEnum<typeof ToolHttpMethod>;

/** @internal */
export const ToolHttpMethod$inboundSchema: z.ZodNativeEnum<
  typeof ToolHttpMethod
> = z.nativeEnum(ToolHttpMethod);

/** @internal */
export const ToolHttpMethod$outboundSchema: z.ZodNativeEnum<
  typeof ToolHttpMethod
> = ToolHttpMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolHttpMethod$ {
  /** @deprecated use `ToolHttpMethod$inboundSchema` instead. */
  export const inboundSchema = ToolHttpMethod$inboundSchema;
  /** @deprecated use `ToolHttpMethod$outboundSchema` instead. */
  export const outboundSchema = ToolHttpMethod$outboundSchema;
}
