/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Display names of voices that Syllable supports.
 */
export const AgentVoiceDisplayName = {
  Alejandro: "Alejandro",
  Alice: "Alice",
  Alloy: "Alloy",
  Ash: "Ash",
  Bill: "Bill",
  Brian: "Brian",
  Callum: "Callum",
  Charlie: "Charlie",
  Charlotte: "Charlotte",
  Chris: "Chris",
  Clara: "Clara",
  Coral: "Coral",
  Daniel: "Daniel",
  Echo: "Echo",
  Eric: "Eric",
  Fable: "Fable",
  George: "George",
  Isabella: "Isabella",
  Jerry: "Jerry",
  Jessica: "Jessica",
  Laura: "Laura",
  Liam: "Liam",
  Lily: "Lily",
  Lina: "Lina",
  Mark: "Mark",
  Matilda: "Matilda",
  Melanie: "Melanie",
  Mila: "Mila",
  Nova: "Nova",
  Onyx: "Onyx",
  River: "River",
  Roger: "Roger",
  Sarah: "Sarah",
  Sage: "Sage",
  Shimmer: "Shimmer",
  Sienna: "Sienna",
  Tara: "Tara",
  Will: "Will",
} as const;
/**
 * Display names of voices that Syllable supports.
 */
export type AgentVoiceDisplayName = ClosedEnum<typeof AgentVoiceDisplayName>;

/** @internal */
export const AgentVoiceDisplayName$inboundSchema: z.ZodNativeEnum<
  typeof AgentVoiceDisplayName
> = z.nativeEnum(AgentVoiceDisplayName);

/** @internal */
export const AgentVoiceDisplayName$outboundSchema: z.ZodNativeEnum<
  typeof AgentVoiceDisplayName
> = AgentVoiceDisplayName$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentVoiceDisplayName$ {
  /** @deprecated use `AgentVoiceDisplayName$inboundSchema` instead. */
  export const inboundSchema = AgentVoiceDisplayName$inboundSchema;
  /** @deprecated use `AgentVoiceDisplayName$outboundSchema` instead. */
  export const outboundSchema = AgentVoiceDisplayName$outboundSchema;
}
