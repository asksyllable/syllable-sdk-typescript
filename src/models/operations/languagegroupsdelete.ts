/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LanguageGroupsDeleteRequest = {
  languageGroupId: number;
  reason: string;
};

/** @internal */
export const LanguageGroupsDeleteRequest$inboundSchema: z.ZodType<
  LanguageGroupsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  language_group_id: z.number().int(),
  reason: z.string(),
}).transform((v) => {
  return remap$(v, {
    "language_group_id": "languageGroupId",
  });
});

/** @internal */
export type LanguageGroupsDeleteRequest$Outbound = {
  language_group_id: number;
  reason: string;
};

/** @internal */
export const LanguageGroupsDeleteRequest$outboundSchema: z.ZodType<
  LanguageGroupsDeleteRequest$Outbound,
  z.ZodTypeDef,
  LanguageGroupsDeleteRequest
> = z.object({
  languageGroupId: z.number().int(),
  reason: z.string(),
}).transform((v) => {
  return remap$(v, {
    languageGroupId: "language_group_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LanguageGroupsDeleteRequest$ {
  /** @deprecated use `LanguageGroupsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = LanguageGroupsDeleteRequest$inboundSchema;
  /** @deprecated use `LanguageGroupsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = LanguageGroupsDeleteRequest$outboundSchema;
  /** @deprecated use `LanguageGroupsDeleteRequest$Outbound` instead. */
  export type Outbound = LanguageGroupsDeleteRequest$Outbound;
}

export function languageGroupsDeleteRequestToJSON(
  languageGroupsDeleteRequest: LanguageGroupsDeleteRequest,
): string {
  return JSON.stringify(
    LanguageGroupsDeleteRequest$outboundSchema.parse(
      languageGroupsDeleteRequest,
    ),
  );
}

export function languageGroupsDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<LanguageGroupsDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LanguageGroupsDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LanguageGroupsDeleteRequest' from JSON`,
  );
}
