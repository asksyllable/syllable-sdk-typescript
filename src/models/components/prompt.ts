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

export type Prompt = {
  /**
   * The Prompt name
   */
  name: string;
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
  /**
   * The Prompt ID
   */
  id: number;
  /**
   * The last updated date of the prompt
   */
  lastUpdated: string | null;
  /**
   * The last updated user who last updated of the prompt
   */
  lastUpdatedBy?: string | null | undefined;
  /**
   * The comments for the last edit
   */
  editComments?: string | null | undefined;
};

/** @internal */
export const Prompt$inboundSchema: z.ZodType<Prompt, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string(),
    type: z.string(),
    context: z.nullable(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    llm_config: LlmConfig$inboundSchema,
    id: z.number().int(),
    last_updated: z.nullable(z.string()),
    last_updated_by: z.nullable(z.string()).optional(),
    edit_comments: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "llm_config": "llmConfig",
      "last_updated": "lastUpdated",
      "last_updated_by": "lastUpdatedBy",
      "edit_comments": "editComments",
    });
  });

/** @internal */
export type Prompt$Outbound = {
  name: string;
  type: string;
  context?: string | null | undefined;
  tools?: Array<string> | undefined;
  llm_config: LlmConfig$Outbound;
  id: number;
  last_updated: string | null;
  last_updated_by?: string | null | undefined;
  edit_comments?: string | null | undefined;
};

/** @internal */
export const Prompt$outboundSchema: z.ZodType<
  Prompt$Outbound,
  z.ZodTypeDef,
  Prompt
> = z.object({
  name: z.string(),
  type: z.string(),
  context: z.nullable(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  llmConfig: LlmConfig$outboundSchema,
  id: z.number().int(),
  lastUpdated: z.nullable(z.string()),
  lastUpdatedBy: z.nullable(z.string()).optional(),
  editComments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    llmConfig: "llm_config",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
    editComments: "edit_comments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Prompt$ {
  /** @deprecated use `Prompt$inboundSchema` instead. */
  export const inboundSchema = Prompt$inboundSchema;
  /** @deprecated use `Prompt$outboundSchema` instead. */
  export const outboundSchema = Prompt$outboundSchema;
  /** @deprecated use `Prompt$Outbound` instead. */
  export type Outbound = Prompt$Outbound;
}

export function promptToJSON(prompt: Prompt): string {
  return JSON.stringify(Prompt$outboundSchema.parse(prompt));
}

export function promptFromJSON(
  jsonString: string,
): SafeParseResult<Prompt, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Prompt$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Prompt' from JSON`,
  );
}
