/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Model for an agent voice.
 */
export const AgentVoiceModel = {
  MultilingualV2: "Multilingual_v2",
  Neural2: "Neural2",
  Standard: "Standard",
  Studio: "Studio",
  WaveNet: "WaveNet",
  Whisper: "Whisper",
} as const;
/**
 * Model for an agent voice.
 */
export type AgentVoiceModel = ClosedEnum<typeof AgentVoiceModel>;

/** @internal */
export const AgentVoiceModel$inboundSchema: z.ZodNativeEnum<
  typeof AgentVoiceModel
> = z.nativeEnum(AgentVoiceModel);

/** @internal */
export const AgentVoiceModel$outboundSchema: z.ZodNativeEnum<
  typeof AgentVoiceModel
> = AgentVoiceModel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentVoiceModel$ {
  /** @deprecated use `AgentVoiceModel$inboundSchema` instead. */
  export const inboundSchema = AgentVoiceModel$inboundSchema;
  /** @deprecated use `AgentVoiceModel$outboundSchema` instead. */
  export const outboundSchema = AgentVoiceModel$outboundSchema;
}
