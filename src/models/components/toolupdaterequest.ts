/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolDefinition,
  ToolDefinition$inboundSchema,
  ToolDefinition$Outbound,
  ToolDefinition$outboundSchema,
} from "./tooldefinition.js";

export type ToolUpdateRequest = {
  /**
   * The name of the tool
   */
  name: string;
  /**
   * A tool that can be called from an LLM during the conversation.
   */
  definition: ToolDefinition;
  /**
   * The service to which this tool belongs
   */
  serviceId: number;
  /**
   * The ID of the tool
   */
  id: number;
  /**
   * Update comments
   */
  lastUpdatedComments?: string | null | undefined;
};

/** @internal */
export const ToolUpdateRequest$inboundSchema: z.ZodType<
  ToolUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  definition: ToolDefinition$inboundSchema,
  service_id: z.number().int(),
  id: z.number().int(),
  last_updated_comments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "last_updated_comments": "lastUpdatedComments",
  });
});

/** @internal */
export type ToolUpdateRequest$Outbound = {
  name: string;
  definition: ToolDefinition$Outbound;
  service_id: number;
  id: number;
  last_updated_comments?: string | null | undefined;
};

/** @internal */
export const ToolUpdateRequest$outboundSchema: z.ZodType<
  ToolUpdateRequest$Outbound,
  z.ZodTypeDef,
  ToolUpdateRequest
> = z.object({
  name: z.string(),
  definition: ToolDefinition$outboundSchema,
  serviceId: z.number().int(),
  id: z.number().int(),
  lastUpdatedComments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    lastUpdatedComments: "last_updated_comments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolUpdateRequest$ {
  /** @deprecated use `ToolUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = ToolUpdateRequest$inboundSchema;
  /** @deprecated use `ToolUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = ToolUpdateRequest$outboundSchema;
  /** @deprecated use `ToolUpdateRequest$Outbound` instead. */
  export type Outbound = ToolUpdateRequest$Outbound;
}

export function toolUpdateRequestToJSON(
  toolUpdateRequest: ToolUpdateRequest,
): string {
  return JSON.stringify(
    ToolUpdateRequest$outboundSchema.parse(toolUpdateRequest),
  );
}

export function toolUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<ToolUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolUpdateRequest' from JSON`,
  );
}
