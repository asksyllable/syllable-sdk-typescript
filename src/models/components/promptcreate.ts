/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LlmConfig,
  LlmConfig$inboundSchema,
  LlmConfig$Outbound,
  LlmConfig$outboundSchema,
} from "./llmconfig.js";

export type PromptCreate = {
  /**
   * The Prompt name
   */
  name: string;
  /**
   * The description of the prompt
   */
  description?: string | null | undefined;
  /**
   * The type of the prompt
   */
  type: string;
  /**
   * The prompt text
   */
  context?: string | null | undefined;
  /**
   * The tools for the prompt
   */
  tools?: Array<string> | undefined;
  /**
   * The configuration for the language model used by the Cortex API.
   */
  llmConfig: LlmConfig;
};

/** @internal */
export const PromptCreate$inboundSchema: z.ZodType<
  PromptCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llm_config: LlmConfig$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "llm_config": "llmConfig",
  });
});

/** @internal */
export type PromptCreate$Outbound = {
  name: string;
  description?: string | null | undefined;
  type: string;
  context?: string | null | undefined;
  tools?: Array<string> | undefined;
  llm_config: LlmConfig$Outbound;
};

/** @internal */
export const PromptCreate$outboundSchema: z.ZodType<
  PromptCreate$Outbound,
  z.ZodTypeDef,
  PromptCreate
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llmConfig: LlmConfig$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    llmConfig: "llm_config",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptCreate$ {
  /** @deprecated use `PromptCreate$inboundSchema` instead. */
  export const inboundSchema = PromptCreate$inboundSchema;
  /** @deprecated use `PromptCreate$outboundSchema` instead. */
  export const outboundSchema = PromptCreate$outboundSchema;
  /** @deprecated use `PromptCreate$Outbound` instead. */
  export type Outbound = PromptCreate$Outbound;
}

export function promptCreateToJSON(promptCreate: PromptCreate): string {
  return JSON.stringify(PromptCreate$outboundSchema.parse(promptCreate));
}

export function promptCreateFromJSON(
  jsonString: string,
): SafeParseResult<PromptCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PromptCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PromptCreate' from JSON`,
  );
}
