/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Information about an agent linked to a tool via a prompt.
 */
export type ToolAgentInfo = {
  /**
   * The internal ID of the agent
   */
  id: number;
  /**
   * The name of the agent
   */
  name: string;
};

/** @internal */
export const ToolAgentInfo$inboundSchema: z.ZodType<
  ToolAgentInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  name: z.string(),
});

/** @internal */
export type ToolAgentInfo$Outbound = {
  id: number;
  name: string;
};

/** @internal */
export const ToolAgentInfo$outboundSchema: z.ZodType<
  ToolAgentInfo$Outbound,
  z.ZodTypeDef,
  ToolAgentInfo
> = z.object({
  id: z.number().int(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolAgentInfo$ {
  /** @deprecated use `ToolAgentInfo$inboundSchema` instead. */
  export const inboundSchema = ToolAgentInfo$inboundSchema;
  /** @deprecated use `ToolAgentInfo$outboundSchema` instead. */
  export const outboundSchema = ToolAgentInfo$outboundSchema;
  /** @deprecated use `ToolAgentInfo$Outbound` instead. */
  export type Outbound = ToolAgentInfo$Outbound;
}

export function toolAgentInfoToJSON(toolAgentInfo: ToolAgentInfo): string {
  return JSON.stringify(ToolAgentInfo$outboundSchema.parse(toolAgentInfo));
}

export function toolAgentInfoFromJSON(
  jsonString: string,
): SafeParseResult<ToolAgentInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolAgentInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolAgentInfo' from JSON`,
  );
}
