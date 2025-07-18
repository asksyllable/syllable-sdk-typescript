/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of login to use for the user.
 */
export const LoginType = {
  Google: "google",
  UsernameAndPassword: "username_and_password",
} as const;
/**
 * The type of login to use for the user.
 */
export type LoginType = ClosedEnum<typeof LoginType>;

/** @internal */
export const LoginType$inboundSchema: z.ZodNativeEnum<typeof LoginType> = z
  .nativeEnum(LoginType);

/** @internal */
export const LoginType$outboundSchema: z.ZodNativeEnum<typeof LoginType> =
  LoginType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginType$ {
  /** @deprecated use `LoginType$inboundSchema` instead. */
  export const inboundSchema = LoginType$inboundSchema;
  /** @deprecated use `LoginType$outboundSchema` instead. */
  export const outboundSchema = LoginType$outboundSchema;
}
