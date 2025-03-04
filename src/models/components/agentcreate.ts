/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentSttProvider,
  AgentSttProvider$inboundSchema,
  AgentSttProvider$outboundSchema,
} from "./agentsttprovider.js";
import {
  AgentToolDefaults,
  AgentToolDefaults$inboundSchema,
  AgentToolDefaults$Outbound,
  AgentToolDefaults$outboundSchema,
} from "./agenttooldefaults.js";
import {
  AgentWaitSound,
  AgentWaitSound$inboundSchema,
  AgentWaitSound$outboundSchema,
} from "./agentwaitsound.js";

export type AgentCreate = {
  /**
   * The agent name
   */
  name: string;
  /**
   * The agent description
   */
  description?: string | null | undefined;
  /**
   * The agent label
   */
  label?: string | null | undefined;
  /**
   * The agent type. Can be an arbitrary string
   */
  type: string;
  /**
   * ID of the prompt associated with the agent
   */
  promptId: number;
  /**
   * ID of the custom message that should be delivered at the beginning of a conversation with the agent
   */
  customMessageId: number;
  /**
   * ID of the language group associated with the agent
   */
  languageGroupId?: number | null | undefined;
  /**
   * The time zone in which the agent operates
   */
  timezone: string;
  /**
   * User-configured parameter values for the agent's tools
   */
  promptToolDefaults?: Array<AgentToolDefaults> | undefined;
  /**
   * BCP 47 codes of languages the agent supports
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  languages?: Array<string> | undefined;
  /**
   * Custom context variables for the conversation session. Keys should be prefixed with "vars.".
   */
  variables: { [k: string]: string };
  /**
   * Optional headers to include in tool calls for agent.
   */
  toolHeaders: { [k: string]: string } | null;
  /**
   * Whether the agent initiates conversation with a user after the custom message is delivered
   */
  agentInitiated?: boolean | undefined;
  /**
   * Speech-to-text provider for the agent.
   */
  sttProvider?: AgentSttProvider | null | undefined;
  /**
   * Sound to play while waiting for a response from the LLM.
   */
  waitSound?: AgentWaitSound | null | undefined;
};

/** @internal */
export const AgentCreate$inboundSchema: z.ZodType<
  AgentCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  label: z.nullable(z.string()).optional(),
  type: z.string(),
  prompt_id: z.number().int(),
  custom_message_id: z.number().int(),
  language_group_id: z.nullable(z.number().int()).optional(),
  timezone: z.string(),
  prompt_tool_defaults: z.array(AgentToolDefaults$inboundSchema).optional(),
  languages: z.array(z.string()).optional(),
  variables: z.record(z.string()),
  tool_headers: z.nullable(z.record(z.string())),
  agent_initiated: z.boolean().default(false),
  stt_provider: z.nullable(AgentSttProvider$inboundSchema).optional(),
  wait_sound: z.nullable(AgentWaitSound$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "prompt_id": "promptId",
    "custom_message_id": "customMessageId",
    "language_group_id": "languageGroupId",
    "prompt_tool_defaults": "promptToolDefaults",
    "tool_headers": "toolHeaders",
    "agent_initiated": "agentInitiated",
    "stt_provider": "sttProvider",
    "wait_sound": "waitSound",
  });
});

/** @internal */
export type AgentCreate$Outbound = {
  name: string;
  description?: string | null | undefined;
  label?: string | null | undefined;
  type: string;
  prompt_id: number;
  custom_message_id: number;
  language_group_id?: number | null | undefined;
  timezone: string;
  prompt_tool_defaults?: Array<AgentToolDefaults$Outbound> | undefined;
  languages?: Array<string> | undefined;
  variables: { [k: string]: string };
  tool_headers: { [k: string]: string } | null;
  agent_initiated: boolean;
  stt_provider?: string | null | undefined;
  wait_sound?: string | null | undefined;
};

/** @internal */
export const AgentCreate$outboundSchema: z.ZodType<
  AgentCreate$Outbound,
  z.ZodTypeDef,
  AgentCreate
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  label: z.nullable(z.string()).optional(),
  type: z.string(),
  promptId: z.number().int(),
  customMessageId: z.number().int(),
  languageGroupId: z.nullable(z.number().int()).optional(),
  timezone: z.string(),
  promptToolDefaults: z.array(AgentToolDefaults$outboundSchema).optional(),
  languages: z.array(z.string()).optional(),
  variables: z.record(z.string()),
  toolHeaders: z.nullable(z.record(z.string())),
  agentInitiated: z.boolean().default(false),
  sttProvider: z.nullable(AgentSttProvider$outboundSchema).optional(),
  waitSound: z.nullable(AgentWaitSound$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    promptId: "prompt_id",
    customMessageId: "custom_message_id",
    languageGroupId: "language_group_id",
    promptToolDefaults: "prompt_tool_defaults",
    toolHeaders: "tool_headers",
    agentInitiated: "agent_initiated",
    sttProvider: "stt_provider",
    waitSound: "wait_sound",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentCreate$ {
  /** @deprecated use `AgentCreate$inboundSchema` instead. */
  export const inboundSchema = AgentCreate$inboundSchema;
  /** @deprecated use `AgentCreate$outboundSchema` instead. */
  export const outboundSchema = AgentCreate$outboundSchema;
  /** @deprecated use `AgentCreate$Outbound` instead. */
  export type Outbound = AgentCreate$Outbound;
}

export function agentCreateToJSON(agentCreate: AgentCreate): string {
  return JSON.stringify(AgentCreate$outboundSchema.parse(agentCreate));
}

export function agentCreateFromJSON(
  jsonString: string,
): SafeParseResult<AgentCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentCreate' from JSON`,
  );
}
