/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSessionDataBySessionIdRequest = {
  sessionId: number;
};

/** @internal */
export const GetSessionDataBySessionIdRequest$inboundSchema: z.ZodType<
  GetSessionDataBySessionIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "session_id": "sessionId",
  });
});

/** @internal */
export type GetSessionDataBySessionIdRequest$Outbound = {
  session_id: number;
};

/** @internal */
export const GetSessionDataBySessionIdRequest$outboundSchema: z.ZodType<
  GetSessionDataBySessionIdRequest$Outbound,
  z.ZodTypeDef,
  GetSessionDataBySessionIdRequest
> = z.object({
  sessionId: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionDataBySessionIdRequest$ {
  /** @deprecated use `GetSessionDataBySessionIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetSessionDataBySessionIdRequest$inboundSchema;
  /** @deprecated use `GetSessionDataBySessionIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetSessionDataBySessionIdRequest$outboundSchema;
  /** @deprecated use `GetSessionDataBySessionIdRequest$Outbound` instead. */
  export type Outbound = GetSessionDataBySessionIdRequest$Outbound;
}

export function getSessionDataBySessionIdRequestToJSON(
  getSessionDataBySessionIdRequest: GetSessionDataBySessionIdRequest,
): string {
  return JSON.stringify(
    GetSessionDataBySessionIdRequest$outboundSchema.parse(
      getSessionDataBySessionIdRequest,
    ),
  );
}

export function getSessionDataBySessionIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionDataBySessionIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionDataBySessionIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionDataBySessionIdRequest' from JSON`,
  );
}
