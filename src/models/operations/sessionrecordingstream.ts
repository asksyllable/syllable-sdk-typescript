/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SessionRecordingStreamRequest = {
  token: string;
};

/** @internal */
export const SessionRecordingStreamRequest$inboundSchema: z.ZodType<
  SessionRecordingStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
});

/** @internal */
export type SessionRecordingStreamRequest$Outbound = {
  token: string;
};

/** @internal */
export const SessionRecordingStreamRequest$outboundSchema: z.ZodType<
  SessionRecordingStreamRequest$Outbound,
  z.ZodTypeDef,
  SessionRecordingStreamRequest
> = z.object({
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionRecordingStreamRequest$ {
  /** @deprecated use `SessionRecordingStreamRequest$inboundSchema` instead. */
  export const inboundSchema = SessionRecordingStreamRequest$inboundSchema;
  /** @deprecated use `SessionRecordingStreamRequest$outboundSchema` instead. */
  export const outboundSchema = SessionRecordingStreamRequest$outboundSchema;
  /** @deprecated use `SessionRecordingStreamRequest$Outbound` instead. */
  export type Outbound = SessionRecordingStreamRequest$Outbound;
}

export function sessionRecordingStreamRequestToJSON(
  sessionRecordingStreamRequest: SessionRecordingStreamRequest,
): string {
  return JSON.stringify(
    SessionRecordingStreamRequest$outboundSchema.parse(
      sessionRecordingStreamRequest,
    ),
  );
}

export function sessionRecordingStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<SessionRecordingStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionRecordingStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionRecordingStreamRequest' from JSON`,
  );
}
