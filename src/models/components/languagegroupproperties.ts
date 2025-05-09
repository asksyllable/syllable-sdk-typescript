/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Names of language group fields supported for filtering/sorting on list endpoint.
 */
export const LanguageGroupProperties = {
  Name: "name",
  Description: "description",
  SkipCurrentLanguageInMessage: "skip_current_language_in_message",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
} as const;
/**
 * Names of language group fields supported for filtering/sorting on list endpoint.
 */
export type LanguageGroupProperties = ClosedEnum<
  typeof LanguageGroupProperties
>;

/** @internal */
export const LanguageGroupProperties$inboundSchema: z.ZodNativeEnum<
  typeof LanguageGroupProperties
> = z.nativeEnum(LanguageGroupProperties);

/** @internal */
export const LanguageGroupProperties$outboundSchema: z.ZodNativeEnum<
  typeof LanguageGroupProperties
> = LanguageGroupProperties$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LanguageGroupProperties$ {
  /** @deprecated use `LanguageGroupProperties$inboundSchema` instead. */
  export const inboundSchema = LanguageGroupProperties$inboundSchema;
  /** @deprecated use `LanguageGroupProperties$outboundSchema` instead. */
  export const outboundSchema = LanguageGroupProperties$outboundSchema;
}
