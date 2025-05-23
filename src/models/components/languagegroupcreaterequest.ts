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
 * Request model to create a language group.
 */
export type LanguageGroupCreateRequest = {
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
};

/** @internal */
export const LanguageGroupCreateRequest$inboundSchema: z.ZodType<
  LanguageGroupCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  language_configs: z.array(LanguageConfig$inboundSchema),
  skip_current_language_in_message: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "language_configs": "languageConfigs",
    "skip_current_language_in_message": "skipCurrentLanguageInMessage",
  });
});

/** @internal */
export type LanguageGroupCreateRequest$Outbound = {
  name: string;
  description?: string | null | undefined;
  language_configs: Array<LanguageConfig$Outbound>;
  skip_current_language_in_message: boolean;
};

/** @internal */
export const LanguageGroupCreateRequest$outboundSchema: z.ZodType<
  LanguageGroupCreateRequest$Outbound,
  z.ZodTypeDef,
  LanguageGroupCreateRequest
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  languageConfigs: z.array(LanguageConfig$outboundSchema),
  skipCurrentLanguageInMessage: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    languageConfigs: "language_configs",
    skipCurrentLanguageInMessage: "skip_current_language_in_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LanguageGroupCreateRequest$ {
  /** @deprecated use `LanguageGroupCreateRequest$inboundSchema` instead. */
  export const inboundSchema = LanguageGroupCreateRequest$inboundSchema;
  /** @deprecated use `LanguageGroupCreateRequest$outboundSchema` instead. */
  export const outboundSchema = LanguageGroupCreateRequest$outboundSchema;
  /** @deprecated use `LanguageGroupCreateRequest$Outbound` instead. */
  export type Outbound = LanguageGroupCreateRequest$Outbound;
}

export function languageGroupCreateRequestToJSON(
  languageGroupCreateRequest: LanguageGroupCreateRequest,
): string {
  return JSON.stringify(
    LanguageGroupCreateRequest$outboundSchema.parse(languageGroupCreateRequest),
  );
}

export function languageGroupCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<LanguageGroupCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LanguageGroupCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LanguageGroupCreateRequest' from JSON`,
  );
}
