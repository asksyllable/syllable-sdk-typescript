/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PromptLlmProvider,
  PromptLlmProvider$inboundSchema,
  PromptLlmProvider$outboundSchema,
} from "./promptllmprovider.js";

/**
 * LLM config option that can be used on a prompt.
 */
export type SupportedLlm = {
  /**
   * LLM API provider.
   */
  provider?: PromptLlmProvider | undefined;
  /**
   * Name of the model. Must match the deployment name in Azure AI Studio.
   */
  model?: string | undefined;
  /**
   * Display name of the model. This is used for display purposes in the Console UI.
   */
  displayName: string;
  /**
   * Model version.
   */
  version?: string | undefined;
  /**
   * Version of the provider's API.
   */
  apiVersion?: string | null | undefined;
  /**
   * Whether the LLM config is deprecated and should not be used.
   */
  deprecated: boolean;
};

/** @internal */
export const SupportedLlm$inboundSchema: z.ZodType<
  SupportedLlm,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: PromptLlmProvider$inboundSchema.optional(),
  model: z.string().default("gpt-4o"),
  display_name: z.string(),
  version: z.string().optional(),
  api_version: z.nullable(z.string()).optional(),
  deprecated: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "display_name": "displayName",
    "api_version": "apiVersion",
  });
});

/** @internal */
export type SupportedLlm$Outbound = {
  provider?: string | undefined;
  model: string;
  display_name: string;
  version?: string | undefined;
  api_version?: string | null | undefined;
  deprecated: boolean;
};

/** @internal */
export const SupportedLlm$outboundSchema: z.ZodType<
  SupportedLlm$Outbound,
  z.ZodTypeDef,
  SupportedLlm
> = z.object({
  provider: PromptLlmProvider$outboundSchema.optional(),
  model: z.string().default("gpt-4o"),
  displayName: z.string(),
  version: z.string().optional(),
  apiVersion: z.nullable(z.string()).optional(),
  deprecated: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    displayName: "display_name",
    apiVersion: "api_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportedLlm$ {
  /** @deprecated use `SupportedLlm$inboundSchema` instead. */
  export const inboundSchema = SupportedLlm$inboundSchema;
  /** @deprecated use `SupportedLlm$outboundSchema` instead. */
  export const outboundSchema = SupportedLlm$outboundSchema;
  /** @deprecated use `SupportedLlm$Outbound` instead. */
  export type Outbound = SupportedLlm$Outbound;
}

export function supportedLlmToJSON(supportedLlm: SupportedLlm): string {
  return JSON.stringify(SupportedLlm$outboundSchema.parse(supportedLlm));
}

export function supportedLlmFromJSON(
  jsonString: string,
): SafeParseResult<SupportedLlm, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportedLlm$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportedLlm' from JSON`,
  );
}
