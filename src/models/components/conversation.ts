/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A conversation is a record of messages between a user and an agent, and is composed of one or
 *
 * @remarks
 * more sessions.
 */
export type Conversation = {
  /**
   * Timestamp of the conversation
   */
  timestamp: Date;
  /**
   * ID of the conversation
   */
  conversationId: string;
  /**
   * ID of the agent with which the conversation occurred
   */
  agentId?: string | null | undefined;
  /**
   * Name of the agent with which the conversation occurred
   */
  agentName?: string | null | undefined;
  /**
   * Value of the "type" field of the agent with which the conversation occurred
   */
  agentType?: string | null | undefined;
  /**
   * ID of the prompt used in the conversation
   */
  promptId?: string | null | undefined;
  /**
   * Name of the prompt used in the conversation
   */
  promptName?: string | null | undefined;
  /**
   * Version of the prompt used in the conversation
   */
  promptVersion?: string | null | undefined;
  /**
   * Provider for the LLM used in the conversation (see PromptResponse.llm_config.provider)
   */
  llmProvider?: string | null | undefined;
  /**
   * Model for the LLM used in the conversation (see PromptResponse.llm_config.model)
   */
  llmModel?: string | null | undefined;
  /**
   * Version for the LLM used in the conversation (see PromptResponse.llm_config.version)
   */
  llmVersion?: string | null | undefined;
  /**
   * Whether the conversation occurred on the legacy Syllable system
   */
  isLegacy?: boolean | null | undefined;
};

/** @internal */
export const Conversation$inboundSchema: z.ZodType<
  Conversation,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  conversation_id: z.string(),
  agent_id: z.nullable(z.string()).optional(),
  agent_name: z.nullable(z.string()).optional(),
  agent_type: z.nullable(z.string()).optional(),
  prompt_id: z.nullable(z.string()).optional(),
  prompt_name: z.nullable(z.string()).optional(),
  prompt_version: z.nullable(z.string()).optional(),
  llm_provider: z.nullable(z.string()).optional(),
  llm_model: z.nullable(z.string()).optional(),
  llm_version: z.nullable(z.string()).optional(),
  is_legacy: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "conversation_id": "conversationId",
    "agent_id": "agentId",
    "agent_name": "agentName",
    "agent_type": "agentType",
    "prompt_id": "promptId",
    "prompt_name": "promptName",
    "prompt_version": "promptVersion",
    "llm_provider": "llmProvider",
    "llm_model": "llmModel",
    "llm_version": "llmVersion",
    "is_legacy": "isLegacy",
  });
});

/** @internal */
export type Conversation$Outbound = {
  timestamp: string;
  conversation_id: string;
  agent_id?: string | null | undefined;
  agent_name?: string | null | undefined;
  agent_type?: string | null | undefined;
  prompt_id?: string | null | undefined;
  prompt_name?: string | null | undefined;
  prompt_version?: string | null | undefined;
  llm_provider?: string | null | undefined;
  llm_model?: string | null | undefined;
  llm_version?: string | null | undefined;
  is_legacy?: boolean | null | undefined;
};

/** @internal */
export const Conversation$outboundSchema: z.ZodType<
  Conversation$Outbound,
  z.ZodTypeDef,
  Conversation
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  conversationId: z.string(),
  agentId: z.nullable(z.string()).optional(),
  agentName: z.nullable(z.string()).optional(),
  agentType: z.nullable(z.string()).optional(),
  promptId: z.nullable(z.string()).optional(),
  promptName: z.nullable(z.string()).optional(),
  promptVersion: z.nullable(z.string()).optional(),
  llmProvider: z.nullable(z.string()).optional(),
  llmModel: z.nullable(z.string()).optional(),
  llmVersion: z.nullable(z.string()).optional(),
  isLegacy: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    conversationId: "conversation_id",
    agentId: "agent_id",
    agentName: "agent_name",
    agentType: "agent_type",
    promptId: "prompt_id",
    promptName: "prompt_name",
    promptVersion: "prompt_version",
    llmProvider: "llm_provider",
    llmModel: "llm_model",
    llmVersion: "llm_version",
    isLegacy: "is_legacy",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Conversation$ {
  /** @deprecated use `Conversation$inboundSchema` instead. */
  export const inboundSchema = Conversation$inboundSchema;
  /** @deprecated use `Conversation$outboundSchema` instead. */
  export const outboundSchema = Conversation$outboundSchema;
  /** @deprecated use `Conversation$Outbound` instead. */
  export type Outbound = Conversation$Outbound;
}

export function conversationToJSON(conversation: Conversation): string {
  return JSON.stringify(Conversation$outboundSchema.parse(conversation));
}

export function conversationFromJSON(
  jsonString: string,
): SafeParseResult<Conversation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Conversation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Conversation' from JSON`,
  );
}
