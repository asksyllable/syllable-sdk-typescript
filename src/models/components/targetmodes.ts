/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const TargetModes = {
  Voice: "voice",
  Chat: "chat",
  Sms: "sms",
  Email: "email",
} as const;
export type TargetModes = ClosedEnum<typeof TargetModes>;

/** @internal */
export const TargetModes$inboundSchema: z.ZodNativeEnum<typeof TargetModes> = z
  .nativeEnum(TargetModes);

/** @internal */
export const TargetModes$outboundSchema: z.ZodNativeEnum<typeof TargetModes> =
  TargetModes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TargetModes$ {
  /** @deprecated use `TargetModes$inboundSchema` instead. */
  export const inboundSchema = TargetModes$inboundSchema;
  /** @deprecated use `TargetModes$outboundSchema` instead. */
  export const outboundSchema = TargetModes$outboundSchema;
}
