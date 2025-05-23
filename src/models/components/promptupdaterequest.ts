/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PromptLlmConfig,
  PromptLlmConfig$inboundSchema,
  PromptLlmConfig$Outbound,
  PromptLlmConfig$outboundSchema,
} from "./promptllmconfig.js";

/**
 * Request model to update an existing prompt.
 */
export type PromptUpdateRequest = {
  /**
   * The prompt name
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
   * The prompt text that will be sent to the LLM at the beginning of the conversation
   */
  context?: string | null | undefined;
  /**
   * Names of tools to which the prompt has access
   */
  tools?: Array<string> | undefined;
  /**
   * LLM configuration for a prompt.
   */
  llmConfig: PromptLlmConfig;
  /**
   * The internal ID of the prompt
   */
  id: number;
  /**
   * The comments for the most recent edit to the prompt
   */
  editComments?: string | null | undefined;
  /**
   * Whether to include the default tools (`hangup`) in the list of tools for the prompt. If you remove one of the default tools from your prompt, you might want to disable this option so that the tool is not added again when updated.
   */
  includeDefaultTools?: boolean | undefined;
};

/** @internal */
export const PromptUpdateRequest$inboundSchema: z.ZodType<
  PromptUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llm_config: PromptLlmConfig$inboundSchema,
  id: z.number().int(),
  edit_comments: z.nullable(z.string()).optional(),
  include_default_tools: z.boolean().default(true),
}).transform((v) => {
  return remap$(v, {
    "llm_config": "llmConfig",
    "edit_comments": "editComments",
    "include_default_tools": "includeDefaultTools",
  });
});

/** @internal */
export type PromptUpdateRequest$Outbound = {
  name: string;
  description?: string | null | undefined;
  type: string;
  context?: string | null | undefined;
  tools?: Array<string> | undefined;
  llm_config: PromptLlmConfig$Outbound;
  id: number;
  edit_comments?: string | null | undefined;
  include_default_tools: boolean;
};

/** @internal */
export const PromptUpdateRequest$outboundSchema: z.ZodType<
  PromptUpdateRequest$Outbound,
  z.ZodTypeDef,
  PromptUpdateRequest
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llmConfig: PromptLlmConfig$outboundSchema,
  id: z.number().int(),
  editComments: z.nullable(z.string()).optional(),
  includeDefaultTools: z.boolean().default(true),
}).transform((v) => {
  return remap$(v, {
    llmConfig: "llm_config",
    editComments: "edit_comments",
    includeDefaultTools: "include_default_tools",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptUpdateRequest$ {
  /** @deprecated use `PromptUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = PromptUpdateRequest$inboundSchema;
  /** @deprecated use `PromptUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = PromptUpdateRequest$outboundSchema;
  /** @deprecated use `PromptUpdateRequest$Outbound` instead. */
  export type Outbound = PromptUpdateRequest$Outbound;
}

export function promptUpdateRequestToJSON(
  promptUpdateRequest: PromptUpdateRequest,
): string {
  return JSON.stringify(
    PromptUpdateRequest$outboundSchema.parse(promptUpdateRequest),
  );
}

export function promptUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<PromptUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PromptUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PromptUpdateRequest' from JSON`,
  );
}
