/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const LatencyCategory = {
  Tts: "tts",
  Stt: "stt",
  Llm: "llm",
  Tool: "tool",
  Http: "http",
} as const;
export type LatencyCategory = ClosedEnum<typeof LatencyCategory>;

/** @internal */
export const LatencyCategory$inboundSchema: z.ZodNativeEnum<
  typeof LatencyCategory
> = z.nativeEnum(LatencyCategory);

/** @internal */
export const LatencyCategory$outboundSchema: z.ZodNativeEnum<
  typeof LatencyCategory
> = LatencyCategory$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LatencyCategory$ {
  /** @deprecated use `LatencyCategory$inboundSchema` instead. */
  export const inboundSchema = LatencyCategory$inboundSchema;
  /** @deprecated use `LatencyCategory$outboundSchema` instead. */
  export const outboundSchema = LatencyCategory$outboundSchema;
}
