/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const AgentProperties = {
  Id: "id",
  Name: "name",
  Type: "type",
  Timezone: "timezone",
  PromptId: "prompt_id",
  PromptIdList: "prompt_id_list",
  CustomMessageId: "custom_message_id",
  Languages: "languages",
  Variables: "variables",
  PromptToolDefaults: "prompt_tool_defaults",
  ToolHeaders: "tool_headers",
  UpdatedAt: "updated_at",
} as const;
export type AgentProperties = ClosedEnum<typeof AgentProperties>;

/** @internal */
export const AgentProperties$inboundSchema: z.ZodNativeEnum<
  typeof AgentProperties
> = z.nativeEnum(AgentProperties);

/** @internal */
export const AgentProperties$outboundSchema: z.ZodNativeEnum<
  typeof AgentProperties
> = AgentProperties$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentProperties$ {
  /** @deprecated use `AgentProperties$inboundSchema` instead. */
  export const inboundSchema = AgentProperties$inboundSchema;
  /** @deprecated use `AgentProperties$outboundSchema` instead. */
  export const outboundSchema = AgentProperties$outboundSchema;
}
