/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentLanguage,
  AgentLanguage$inboundSchema,
  AgentLanguage$Outbound,
  AgentLanguage$outboundSchema,
} from "./agentlanguage.js";
import {
  AgentVoiceDisplayName,
  AgentVoiceDisplayName$inboundSchema,
  AgentVoiceDisplayName$outboundSchema,
} from "./agentvoicedisplayname.js";
import {
  AgentVoiceGender,
  AgentVoiceGender$inboundSchema,
  AgentVoiceGender$outboundSchema,
} from "./agentvoicegender.js";
import {
  AgentVoiceModel,
  AgentVoiceModel$inboundSchema,
  AgentVoiceModel$outboundSchema,
} from "./agentvoicemodel.js";
import {
  AgentVoiceVarName,
  AgentVoiceVarName$inboundSchema,
  AgentVoiceVarName$outboundSchema,
} from "./agentvoicevarname.js";
import {
  TtsProvider,
  TtsProvider$inboundSchema,
  TtsProvider$outboundSchema,
} from "./ttsprovider.js";

/**
 * Voice option for an agent.
 */
export type AgentVoice = {
  /**
   * TTS provider for an agent voice.
   */
  provider: TtsProvider;
  /**
   * Display names of voices that Syllable supports.
   */
  displayName: AgentVoiceDisplayName;
  /**
   * The variable name of an agent voice (used when processing messages).
   */
  varName: AgentVoiceVarName;
  /**
   * Gender for an agent voice.
   */
  gender: AgentVoiceGender;
  /**
   * Model for an agent voice.
   */
  model: AgentVoiceModel;
  /**
   * Languages supported by the voice
   */
  supportedLanguages: Array<AgentLanguage>;
  /**
   * Whether the voice is deprecated and should not be used
   */
  deprecated: boolean;
};

/** @internal */
export const AgentVoice$inboundSchema: z.ZodType<
  AgentVoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: TtsProvider$inboundSchema,
  display_name: AgentVoiceDisplayName$inboundSchema,
  var_name: AgentVoiceVarName$inboundSchema,
  gender: AgentVoiceGender$inboundSchema,
  model: AgentVoiceModel$inboundSchema,
  supported_languages: z.array(AgentLanguage$inboundSchema),
  deprecated: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "display_name": "displayName",
    "var_name": "varName",
    "supported_languages": "supportedLanguages",
  });
});

/** @internal */
export type AgentVoice$Outbound = {
  provider: string;
  display_name: string;
  var_name: string;
  gender: string;
  model: string;
  supported_languages: Array<AgentLanguage$Outbound>;
  deprecated: boolean;
};

/** @internal */
export const AgentVoice$outboundSchema: z.ZodType<
  AgentVoice$Outbound,
  z.ZodTypeDef,
  AgentVoice
> = z.object({
  provider: TtsProvider$outboundSchema,
  displayName: AgentVoiceDisplayName$outboundSchema,
  varName: AgentVoiceVarName$outboundSchema,
  gender: AgentVoiceGender$outboundSchema,
  model: AgentVoiceModel$outboundSchema,
  supportedLanguages: z.array(AgentLanguage$outboundSchema),
  deprecated: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    displayName: "display_name",
    varName: "var_name",
    supportedLanguages: "supported_languages",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentVoice$ {
  /** @deprecated use `AgentVoice$inboundSchema` instead. */
  export const inboundSchema = AgentVoice$inboundSchema;
  /** @deprecated use `AgentVoice$outboundSchema` instead. */
  export const outboundSchema = AgentVoice$outboundSchema;
  /** @deprecated use `AgentVoice$Outbound` instead. */
  export type Outbound = AgentVoice$Outbound;
}

export function agentVoiceToJSON(agentVoice: AgentVoice): string {
  return JSON.stringify(AgentVoice$outboundSchema.parse(agentVoice));
}

export function agentVoiceFromJSON(
  jsonString: string,
): SafeParseResult<AgentVoice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentVoice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentVoice' from JSON`,
  );
}
