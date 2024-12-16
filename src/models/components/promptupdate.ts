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

export type PromptUpdate = {
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
  llmConfig: LlmConfig;
  /**
   * The Prompt ID
   */
  id: number;
  /**
   * The comments for the last edit
   */
  editComments?: string | null | undefined;
};

/** @internal */
export const PromptUpdate$inboundSchema: z.ZodType<
  PromptUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llm_config: LlmConfig$inboundSchema,
  id: z.number().int(),
  edit_comments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "llm_config": "llmConfig",
    "edit_comments": "editComments",
  });
});

/** @internal */
export type PromptUpdate$Outbound = {
  name: string;
  description?: string | null | undefined;
  type: string;
  context?: string | null | undefined;
  tools?: Array<string> | undefined;
  llm_config: LlmConfig$Outbound;
  id: number;
  edit_comments?: string | null | undefined;
};

/** @internal */
export const PromptUpdate$outboundSchema: z.ZodType<
  PromptUpdate$Outbound,
  z.ZodTypeDef,
  PromptUpdate
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llmConfig: LlmConfig$outboundSchema,
  id: z.number().int(),
  editComments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    llmConfig: "llm_config",
    editComments: "edit_comments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptUpdate$ {
  /** @deprecated use `PromptUpdate$inboundSchema` instead. */
  export const inboundSchema = PromptUpdate$inboundSchema;
  /** @deprecated use `PromptUpdate$outboundSchema` instead. */
  export const outboundSchema = PromptUpdate$outboundSchema;
  /** @deprecated use `PromptUpdate$Outbound` instead. */
  export type Outbound = PromptUpdate$Outbound;
}

export function promptUpdateToJSON(promptUpdate: PromptUpdate): string {
  return JSON.stringify(PromptUpdate$outboundSchema.parse(promptUpdate));
}

export function promptUpdateFromJSON(
  jsonString: string,
): SafeParseResult<PromptUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PromptUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PromptUpdate' from JSON`,
  );
}
