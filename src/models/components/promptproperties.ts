/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Names of prompt fields supported for filtering/sorting on list endpoint.
 */
export const PromptProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Description: "description",
  NameDescription: "name_description",
  Context: "context",
  Tools: "tools",
  LlmConfig: "llm_config",
  LastUpdated: "last_updated",
  LastUpdatedBy: "last_updated_by",
  AgentCount: "agent_count",
} as const;
/**
 * Names of prompt fields supported for filtering/sorting on list endpoint.
 */
export type PromptProperties = ClosedEnum<typeof PromptProperties>;

/** @internal */
export const PromptProperties$inboundSchema: z.ZodNativeEnum<
  typeof PromptProperties
> = z.nativeEnum(PromptProperties);

/** @internal */
export const PromptProperties$outboundSchema: z.ZodNativeEnum<
  typeof PromptProperties
> = PromptProperties$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptProperties$ {
  /** @deprecated use `PromptProperties$inboundSchema` instead. */
  export const inboundSchema = PromptProperties$inboundSchema;
  /** @deprecated use `PromptProperties$outboundSchema` instead. */
  export const outboundSchema = PromptProperties$outboundSchema;
}
