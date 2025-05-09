/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LanguageConfig,
  LanguageConfig$inboundSchema,
  LanguageConfig$Outbound,
  LanguageConfig$outboundSchema,
} from "./languageconfig.js";

/**
 * Request model to update an existing language group.
 */
export type LanguageGroupUpdateRequest = {
  /**
   * The name of the language group.
   */
  name: string;
  /**
   * Description of the language group.
   */
  description?: string | null | undefined;
  /**
   * Voice and DTMF configurations for each language in the group.
   */
  languageConfigs: Array<LanguageConfig>;
  /**
   * Whether a custom message using the language group to generate a language DTMF menu should skip the agent's current language in the menu.
   */
  skipCurrentLanguageInMessage: boolean;
  /**
   * The ID of the language group to update.
   */
  id: number;
  /**
   * Comments for the most recent edit to the language group.
   */
  editComments?: string | null | undefined;
};

/** @internal */
export const LanguageGroupUpdateRequest$inboundSchema: z.ZodType<
  LanguageGroupUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  language_configs: z.array(LanguageConfig$inboundSchema),
  skip_current_language_in_message: z.boolean(),
  id: z.number().int(),
  edit_comments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "language_configs": "languageConfigs",
    "skip_current_language_in_message": "skipCurrentLanguageInMessage",
    "edit_comments": "editComments",
  });
});

/** @internal */
export type LanguageGroupUpdateRequest$Outbound = {
  name: string;
  description?: string | null | undefined;
  language_configs: Array<LanguageConfig$Outbound>;
  skip_current_language_in_message: boolean;
  id: number;
  edit_comments?: string | null | undefined;
};

/** @internal */
export const LanguageGroupUpdateRequest$outboundSchema: z.ZodType<
  LanguageGroupUpdateRequest$Outbound,
  z.ZodTypeDef,
  LanguageGroupUpdateRequest
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  languageConfigs: z.array(LanguageConfig$outboundSchema),
  skipCurrentLanguageInMessage: z.boolean(),
  id: z.number().int(),
  editComments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    languageConfigs: "language_configs",
    skipCurrentLanguageInMessage: "skip_current_language_in_message",
    editComments: "edit_comments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LanguageGroupUpdateRequest$ {
  /** @deprecated use `LanguageGroupUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = LanguageGroupUpdateRequest$inboundSchema;
  /** @deprecated use `LanguageGroupUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = LanguageGroupUpdateRequest$outboundSchema;
  /** @deprecated use `LanguageGroupUpdateRequest$Outbound` instead. */
  export type Outbound = LanguageGroupUpdateRequest$Outbound;
}

export function languageGroupUpdateRequestToJSON(
  languageGroupUpdateRequest: LanguageGroupUpdateRequest,
): string {
  return JSON.stringify(
    LanguageGroupUpdateRequest$outboundSchema.parse(languageGroupUpdateRequest),
  );
}

export function languageGroupUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<LanguageGroupUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LanguageGroupUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LanguageGroupUpdateRequest' from JSON`,
  );
}
