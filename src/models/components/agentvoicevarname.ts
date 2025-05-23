/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The variable name of an agent voice (used when processing messages).
 */
export const AgentVoiceVarName = {
  OpenaiAlloy: "openai:alloy",
  OpenaiAsh: "openai:ash",
  OpenaiCoral: "openai:coral",
  OpenaiEcho: "openai:echo",
  OpenaiFable: "openai:fable",
  OpenaiNova: "openai:nova",
  OpenaiOnyx: "openai:onyx",
  OpenaiSage: "openai:sage",
  OpenaiShimmer: "openai:shimmer",
  ElevenlabsAlice: "elevenlabs:Alice",
  ElevenlabsBill: "elevenlabs:Bill",
  ElevenlabsBrian: "elevenlabs:Brian",
  ElevenlabsCallum: "elevenlabs:Callum",
  ElevenlabsCharlie: "elevenlabs:Charlie",
  ElevenlabsCharlotte: "elevenlabs:Charlotte",
  ElevenlabsChris: "elevenlabs:Chris",
  ElevenlabsDaniel: "elevenlabs:Daniel",
  ElevenlabsEric: "elevenlabs:Eric",
  ElevenlabsGeorge: "elevenlabs:George",
  ElevenlabsJessica: "elevenlabs:Jessica",
  ElevenlabsLaura: "elevenlabs:Laura",
  ElevenlabsLiam: "elevenlabs:Liam",
  ElevenlabsLily: "elevenlabs:Lily",
  ElevenlabsMatilda: "elevenlabs:Matilda",
  ElevenlabsRiver: "elevenlabs:River",
  ElevenlabsRoger: "elevenlabs:Roger",
  ElevenlabsSarah: "elevenlabs:Sarah",
  ElevenlabsWill: "elevenlabs:Will",
  WavenetMaleEsUSNeural2B: "wavenet:male/es-US-Neural2-B",
  WavenetFemaleEnUSNeural2F: "wavenet:female/en-US-Neural2-F",
  WavenetFemaleEsUSNeural2A: "wavenet:female/es-US-Neural2-A",
  WavenetMaleEnUSNeural2D: "wavenet:male/en-US-Neural2-D",
  WavenetFemaleCmnTWWavenetA: "wavenet:female/cmn-TW-Wavenet-A",
  WavenetMaleEnUSNeural2J: "wavenet:male/en-US-Neural2-J",
  WavenetFemaleYueHKStandardC: "wavenet:female/yue-HK-Standard-C",
  WavenetFemaleEnUSStudioO: "wavenet:female/en-US-Studio-O",
  WavenetFemaleKoKRNeural2A: "wavenet:female/ko-KR-Neural2-A",
  WavenetFemaleViVNNeural2A: "wavenet:female/vi-VN-Neural2-A",
} as const;
/**
 * The variable name of an agent voice (used when processing messages).
 */
export type AgentVoiceVarName = ClosedEnum<typeof AgentVoiceVarName>;

/** @internal */
export const AgentVoiceVarName$inboundSchema: z.ZodNativeEnum<
  typeof AgentVoiceVarName
> = z.nativeEnum(AgentVoiceVarName);

/** @internal */
export const AgentVoiceVarName$outboundSchema: z.ZodNativeEnum<
  typeof AgentVoiceVarName
> = AgentVoiceVarName$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentVoiceVarName$ {
  /** @deprecated use `AgentVoiceVarName$inboundSchema` instead. */
  export const inboundSchema = AgentVoiceVarName$inboundSchema;
  /** @deprecated use `AgentVoiceVarName$outboundSchema` instead. */
  export const outboundSchema = AgentVoiceVarName$outboundSchema;
}
