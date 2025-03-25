/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolAgentInfo,
  ToolAgentInfo$inboundSchema,
  ToolAgentInfo$Outbound,
  ToolAgentInfo$outboundSchema,
} from "./toolagentinfo.js";
import {
  ToolDefinition,
  ToolDefinition$inboundSchema,
  ToolDefinition$Outbound,
  ToolDefinition$outboundSchema,
} from "./tooldefinition.js";
import {
  ToolPromptInfo,
  ToolPromptInfo$inboundSchema,
  ToolPromptInfo$Outbound,
  ToolPromptInfo$outboundSchema,
} from "./toolpromptinfo.js";

/**
 * Response model for tool operations.
 *
 * @remarks
 * A tool is a function that an agent can call to perform actions like accessing databases,
 * making API calls, or processing data. For an agent to have access to a tool, the prompt
 * associated with that agent should be linked to the tool and include instructions to use it.
 * For more information, see [Console docs](https://docs.syllable.ai/Resources/Tools).
 */
export type ToolResponse = {
  /**
   * The name of the tool
   */
  name: string;
  /**
   * A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools.
   */
  definition: ToolDefinition;
  /**
   * Internal ID of the service to which the tool belongs
   */
  serviceId: number;
  /**
   * The internal ID of the tool
   */
  id: number;
  /**
   * Comments for the most recent edit to the tool.
   */
  lastUpdatedComments?: string | null | undefined;
  /**
   * The name of the service to which the tool belongs
   */
  serviceName?: string | null | undefined;
  /**
   * IDs and names of the prompts linked to the tool
   */
  promptsInfo?: Array<ToolPromptInfo> | null | undefined;
  /**
   * IDs and names of the agents linked to the tool via a prompt
   */
  agentsInfo?: Array<ToolAgentInfo> | null | undefined;
  /**
   * The timestamp of the most recent update to the service
   */
  lastUpdated: Date;
  /**
   * The email of the user who last updated the tool
   */
  lastUpdatedBy: string;
};

/** @internal */
export const ToolResponse$inboundSchema: z.ZodType<
  ToolResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  definition: ToolDefinition$inboundSchema,
  service_id: z.number().int(),
  id: z.number().int(),
  last_updated_comments: z.nullable(z.string()).optional(),
  service_name: z.nullable(z.string()).optional(),
  prompts_info: z.nullable(z.array(ToolPromptInfo$inboundSchema)).optional(),
  agents_info: z.nullable(z.array(ToolAgentInfo$inboundSchema)).optional(),
  last_updated: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  last_updated_by: z.string(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "last_updated_comments": "lastUpdatedComments",
    "service_name": "serviceName",
    "prompts_info": "promptsInfo",
    "agents_info": "agentsInfo",
    "last_updated": "lastUpdated",
    "last_updated_by": "lastUpdatedBy",
  });
});

/** @internal */
export type ToolResponse$Outbound = {
  name: string;
  definition: ToolDefinition$Outbound;
  service_id: number;
  id: number;
  last_updated_comments?: string | null | undefined;
  service_name?: string | null | undefined;
  prompts_info?: Array<ToolPromptInfo$Outbound> | null | undefined;
  agents_info?: Array<ToolAgentInfo$Outbound> | null | undefined;
  last_updated: string;
  last_updated_by: string;
};

/** @internal */
export const ToolResponse$outboundSchema: z.ZodType<
  ToolResponse$Outbound,
  z.ZodTypeDef,
  ToolResponse
> = z.object({
  name: z.string(),
  definition: ToolDefinition$outboundSchema,
  serviceId: z.number().int(),
  id: z.number().int(),
  lastUpdatedComments: z.nullable(z.string()).optional(),
  serviceName: z.nullable(z.string()).optional(),
  promptsInfo: z.nullable(z.array(ToolPromptInfo$outboundSchema)).optional(),
  agentsInfo: z.nullable(z.array(ToolAgentInfo$outboundSchema)).optional(),
  lastUpdated: z.date().transform(v => v.toISOString()),
  lastUpdatedBy: z.string(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    lastUpdatedComments: "last_updated_comments",
    serviceName: "service_name",
    promptsInfo: "prompts_info",
    agentsInfo: "agents_info",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolResponse$ {
  /** @deprecated use `ToolResponse$inboundSchema` instead. */
  export const inboundSchema = ToolResponse$inboundSchema;
  /** @deprecated use `ToolResponse$outboundSchema` instead. */
  export const outboundSchema = ToolResponse$outboundSchema;
  /** @deprecated use `ToolResponse$Outbound` instead. */
  export type Outbound = ToolResponse$Outbound;
}

export function toolResponseToJSON(toolResponse: ToolResponse): string {
  return JSON.stringify(ToolResponse$outboundSchema.parse(toolResponse));
}

export function toolResponseFromJSON(
  jsonString: string,
): SafeParseResult<ToolResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolResponse' from JSON`,
  );
}
