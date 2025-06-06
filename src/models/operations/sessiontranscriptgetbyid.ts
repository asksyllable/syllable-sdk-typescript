/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SessionTranscriptGetByIdRequest = {
  sessionId: string;
};

/** @internal */
export const SessionTranscriptGetByIdRequest$inboundSchema: z.ZodType<
  SessionTranscriptGetByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "session_id": "sessionId",
  });
});

/** @internal */
export type SessionTranscriptGetByIdRequest$Outbound = {
  session_id: string;
};

/** @internal */
export const SessionTranscriptGetByIdRequest$outboundSchema: z.ZodType<
  SessionTranscriptGetByIdRequest$Outbound,
  z.ZodTypeDef,
  SessionTranscriptGetByIdRequest
> = z.object({
  sessionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionTranscriptGetByIdRequest$ {
  /** @deprecated use `SessionTranscriptGetByIdRequest$inboundSchema` instead. */
  export const inboundSchema = SessionTranscriptGetByIdRequest$inboundSchema;
  /** @deprecated use `SessionTranscriptGetByIdRequest$outboundSchema` instead. */
  export const outboundSchema = SessionTranscriptGetByIdRequest$outboundSchema;
  /** @deprecated use `SessionTranscriptGetByIdRequest$Outbound` instead. */
  export type Outbound = SessionTranscriptGetByIdRequest$Outbound;
}

export function sessionTranscriptGetByIdRequestToJSON(
  sessionTranscriptGetByIdRequest: SessionTranscriptGetByIdRequest,
): string {
  return JSON.stringify(
    SessionTranscriptGetByIdRequest$outboundSchema.parse(
      sessionTranscriptGetByIdRequest,
    ),
  );
}

export function sessionTranscriptGetByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<SessionTranscriptGetByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionTranscriptGetByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionTranscriptGetByIdRequest' from JSON`,
  );
}
