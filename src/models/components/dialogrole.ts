/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Role of dialog
 */
export const DialogRole = {
  Agent: "agent",
  User: "user",
} as const;
/**
 * Role of dialog
 */
export type DialogRole = ClosedEnum<typeof DialogRole>;

/** @internal */
export const DialogRole$inboundSchema: z.ZodNativeEnum<typeof DialogRole> = z
  .nativeEnum(DialogRole);

/** @internal */
export const DialogRole$outboundSchema: z.ZodNativeEnum<typeof DialogRole> =
  DialogRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DialogRole$ {
  /** @deprecated use `DialogRole$inboundSchema` instead. */
  export const inboundSchema = DialogRole$inboundSchema;
  /** @deprecated use `DialogRole$outboundSchema` instead. */
  export const outboundSchema = DialogRole$outboundSchema;
}
