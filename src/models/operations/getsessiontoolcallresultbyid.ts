/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSessionToolCallResultByIdRequest = {
  sessionId: number;
  toolCallId: string;
};

/** @internal */
export const GetSessionToolCallResultByIdRequest$inboundSchema: z.ZodType<
  GetSessionToolCallResultByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_id: z.number().int(),
  tool_call_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "session_id": "sessionId",
    "tool_call_id": "toolCallId",
  });
});

/** @internal */
export type GetSessionToolCallResultByIdRequest$Outbound = {
  session_id: number;
  tool_call_id: string;
};

/** @internal */
export const GetSessionToolCallResultByIdRequest$outboundSchema: z.ZodType<
  GetSessionToolCallResultByIdRequest$Outbound,
  z.ZodTypeDef,
  GetSessionToolCallResultByIdRequest
> = z.object({
  sessionId: z.number().int(),
  toolCallId: z.string(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
    toolCallId: "tool_call_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionToolCallResultByIdRequest$ {
  /** @deprecated use `GetSessionToolCallResultByIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetSessionToolCallResultByIdRequest$inboundSchema;
  /** @deprecated use `GetSessionToolCallResultByIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetSessionToolCallResultByIdRequest$outboundSchema;
  /** @deprecated use `GetSessionToolCallResultByIdRequest$Outbound` instead. */
  export type Outbound = GetSessionToolCallResultByIdRequest$Outbound;
}

export function getSessionToolCallResultByIdRequestToJSON(
  getSessionToolCallResultByIdRequest: GetSessionToolCallResultByIdRequest,
): string {
  return JSON.stringify(
    GetSessionToolCallResultByIdRequest$outboundSchema.parse(
      getSessionToolCallResultByIdRequest,
    ),
  );
}

export function getSessionToolCallResultByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionToolCallResultByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetSessionToolCallResultByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionToolCallResultByIdRequest' from JSON`,
  );
}
