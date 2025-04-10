/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SessionLabelGetByIdRequest = {
  sessionLabelId: number;
};

/** @internal */
export const SessionLabelGetByIdRequest$inboundSchema: z.ZodType<
  SessionLabelGetByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_label_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "session_label_id": "sessionLabelId",
  });
});

/** @internal */
export type SessionLabelGetByIdRequest$Outbound = {
  session_label_id: number;
};

/** @internal */
export const SessionLabelGetByIdRequest$outboundSchema: z.ZodType<
  SessionLabelGetByIdRequest$Outbound,
  z.ZodTypeDef,
  SessionLabelGetByIdRequest
> = z.object({
  sessionLabelId: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    sessionLabelId: "session_label_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionLabelGetByIdRequest$ {
  /** @deprecated use `SessionLabelGetByIdRequest$inboundSchema` instead. */
  export const inboundSchema = SessionLabelGetByIdRequest$inboundSchema;
  /** @deprecated use `SessionLabelGetByIdRequest$outboundSchema` instead. */
  export const outboundSchema = SessionLabelGetByIdRequest$outboundSchema;
  /** @deprecated use `SessionLabelGetByIdRequest$Outbound` instead. */
  export type Outbound = SessionLabelGetByIdRequest$Outbound;
}

export function sessionLabelGetByIdRequestToJSON(
  sessionLabelGetByIdRequest: SessionLabelGetByIdRequest,
): string {
  return JSON.stringify(
    SessionLabelGetByIdRequest$outboundSchema.parse(sessionLabelGetByIdRequest),
  );
}

export function sessionLabelGetByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<SessionLabelGetByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionLabelGetByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionLabelGetByIdRequest' from JSON`,
  );
}
