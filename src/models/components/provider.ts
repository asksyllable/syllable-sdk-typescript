/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * LLM API provider.
 */
export const Provider = {
  AzureOpenai: "azure_openai",
  Openai: "openai",
} as const;
/**
 * LLM API provider.
 */
export type Provider = ClosedEnum<typeof Provider>;

/** @internal */
export const Provider$inboundSchema: z.ZodNativeEnum<typeof Provider> = z
  .nativeEnum(Provider);

/** @internal */
export const Provider$outboundSchema: z.ZodNativeEnum<typeof Provider> =
  Provider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Provider$ {
  /** @deprecated use `Provider$inboundSchema` instead. */
  export const inboundSchema = Provider$inboundSchema;
  /** @deprecated use `Provider$outboundSchema` instead. */
  export const outboundSchema = Provider$outboundSchema;
}
