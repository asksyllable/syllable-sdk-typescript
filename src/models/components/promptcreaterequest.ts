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
 * Request model to create a prompt.
 */
export type PromptCreateRequest = {
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
   * Whether to include the default tools (`summary`, `hangup`) in the list of tools for the prompt. If you disable this during creation, you might want to disable it during updates as well, otherwise the default tools will be added when updating the prompt.
   */
  includeDefaultTools?: boolean | undefined;
};

/** @internal */
export const PromptCreateRequest$inboundSchema: z.ZodType<
  PromptCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llm_config: PromptLlmConfig$inboundSchema,
  include_default_tools: z.boolean().default(true),
}).transform((v) => {
  return remap$(v, {
    "llm_config": "llmConfig",
    "include_default_tools": "includeDefaultTools",
  });
});

/** @internal */
export type PromptCreateRequest$Outbound = {
  name: string;
  description?: string | null | undefined;
  type: string;
  context?: string | null | undefined;
  tools?: Array<string> | undefined;
  llm_config: PromptLlmConfig$Outbound;
  include_default_tools: boolean;
};

/** @internal */
export const PromptCreateRequest$outboundSchema: z.ZodType<
  PromptCreateRequest$Outbound,
  z.ZodTypeDef,
  PromptCreateRequest
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llmConfig: PromptLlmConfig$outboundSchema,
  includeDefaultTools: z.boolean().default(true),
}).transform((v) => {
  return remap$(v, {
    llmConfig: "llm_config",
    includeDefaultTools: "include_default_tools",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptCreateRequest$ {
  /** @deprecated use `PromptCreateRequest$inboundSchema` instead. */
  export const inboundSchema = PromptCreateRequest$inboundSchema;
  /** @deprecated use `PromptCreateRequest$outboundSchema` instead. */
  export const outboundSchema = PromptCreateRequest$outboundSchema;
  /** @deprecated use `PromptCreateRequest$Outbound` instead. */
  export type Outbound = PromptCreateRequest$Outbound;
}

export function promptCreateRequestToJSON(
  promptCreateRequest: PromptCreateRequest,
): string {
  return JSON.stringify(
    PromptCreateRequest$outboundSchema.parse(promptCreateRequest),
  );
}

export function promptCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<PromptCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PromptCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PromptCreateRequest' from JSON`,
  );
}
