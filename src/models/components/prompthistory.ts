/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PromptHistory = {
  timestamp: Date;
  promptId?: string | null | undefined;
  promptText?: string | null | undefined;
  promptDescription?: string | null | undefined;
  promptName?: string | null | undefined;
  llmConfig?: string | null | undefined;
  comments?: string | null | undefined;
  userEmail?: string | null | undefined;
};

/** @internal */
export const PromptHistory$inboundSchema: z.ZodType<
  PromptHistory,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  prompt_id: z.nullable(z.string()).optional(),
  prompt_text: z.nullable(z.string()).optional(),
  prompt_description: z.nullable(z.string()).optional(),
  prompt_name: z.nullable(z.string()).optional(),
  llm_config: z.nullable(z.string()).optional(),
  comments: z.nullable(z.string()).optional(),
  user_email: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "prompt_id": "promptId",
    "prompt_text": "promptText",
    "prompt_description": "promptDescription",
    "prompt_name": "promptName",
    "llm_config": "llmConfig",
    "user_email": "userEmail",
  });
});

/** @internal */
export type PromptHistory$Outbound = {
  timestamp: string;
  prompt_id?: string | null | undefined;
  prompt_text?: string | null | undefined;
  prompt_description?: string | null | undefined;
  prompt_name?: string | null | undefined;
  llm_config?: string | null | undefined;
  comments?: string | null | undefined;
  user_email?: string | null | undefined;
};

/** @internal */
export const PromptHistory$outboundSchema: z.ZodType<
  PromptHistory$Outbound,
  z.ZodTypeDef,
  PromptHistory
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  promptId: z.nullable(z.string()).optional(),
  promptText: z.nullable(z.string()).optional(),
  promptDescription: z.nullable(z.string()).optional(),
  promptName: z.nullable(z.string()).optional(),
  llmConfig: z.nullable(z.string()).optional(),
  comments: z.nullable(z.string()).optional(),
  userEmail: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    promptId: "prompt_id",
    promptText: "prompt_text",
    promptDescription: "prompt_description",
    promptName: "prompt_name",
    llmConfig: "llm_config",
    userEmail: "user_email",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptHistory$ {
  /** @deprecated use `PromptHistory$inboundSchema` instead. */
  export const inboundSchema = PromptHistory$inboundSchema;
  /** @deprecated use `PromptHistory$outboundSchema` instead. */
  export const outboundSchema = PromptHistory$outboundSchema;
  /** @deprecated use `PromptHistory$Outbound` instead. */
  export type Outbound = PromptHistory$Outbound;
}

export function promptHistoryToJSON(promptHistory: PromptHistory): string {
  return JSON.stringify(PromptHistory$outboundSchema.parse(promptHistory));
}

export function promptHistoryFromJSON(
  jsonString: string,
): SafeParseResult<PromptHistory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PromptHistory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PromptHistory' from JSON`,
  );
}
