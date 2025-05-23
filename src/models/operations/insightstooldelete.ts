/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InsightsToolDeleteRequest = {
  toolId: number;
};

/** @internal */
export const InsightsToolDeleteRequest$inboundSchema: z.ZodType<
  InsightsToolDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tool_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "tool_id": "toolId",
  });
});

/** @internal */
export type InsightsToolDeleteRequest$Outbound = {
  tool_id: number;
};

/** @internal */
export const InsightsToolDeleteRequest$outboundSchema: z.ZodType<
  InsightsToolDeleteRequest$Outbound,
  z.ZodTypeDef,
  InsightsToolDeleteRequest
> = z.object({
  toolId: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    toolId: "tool_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsightsToolDeleteRequest$ {
  /** @deprecated use `InsightsToolDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = InsightsToolDeleteRequest$inboundSchema;
  /** @deprecated use `InsightsToolDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = InsightsToolDeleteRequest$outboundSchema;
  /** @deprecated use `InsightsToolDeleteRequest$Outbound` instead. */
  export type Outbound = InsightsToolDeleteRequest$Outbound;
}

export function insightsToolDeleteRequestToJSON(
  insightsToolDeleteRequest: InsightsToolDeleteRequest,
): string {
  return JSON.stringify(
    InsightsToolDeleteRequest$outboundSchema.parse(insightsToolDeleteRequest),
  );
}

export function insightsToolDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<InsightsToolDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsightsToolDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsightsToolDeleteRequest' from JSON`,
  );
}
