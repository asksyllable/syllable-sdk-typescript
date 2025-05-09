/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PromptsDeleteRequest = {
  promptId: number;
  reason: string;
};

/** @internal */
export const PromptsDeleteRequest$inboundSchema: z.ZodType<
  PromptsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt_id: z.number().int(),
  reason: z.string(),
}).transform((v) => {
  return remap$(v, {
    "prompt_id": "promptId",
  });
});

/** @internal */
export type PromptsDeleteRequest$Outbound = {
  prompt_id: number;
  reason: string;
};

/** @internal */
export const PromptsDeleteRequest$outboundSchema: z.ZodType<
  PromptsDeleteRequest$Outbound,
  z.ZodTypeDef,
  PromptsDeleteRequest
> = z.object({
  promptId: z.number().int(),
  reason: z.string(),
}).transform((v) => {
  return remap$(v, {
    promptId: "prompt_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptsDeleteRequest$ {
  /** @deprecated use `PromptsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = PromptsDeleteRequest$inboundSchema;
  /** @deprecated use `PromptsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = PromptsDeleteRequest$outboundSchema;
  /** @deprecated use `PromptsDeleteRequest$Outbound` instead. */
  export type Outbound = PromptsDeleteRequest$Outbound;
}

export function promptsDeleteRequestToJSON(
  promptsDeleteRequest: PromptsDeleteRequest,
): string {
  return JSON.stringify(
    PromptsDeleteRequest$outboundSchema.parse(promptsDeleteRequest),
  );
}

export function promptsDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<PromptsDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PromptsDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PromptsDeleteRequest' from JSON`,
  );
}
