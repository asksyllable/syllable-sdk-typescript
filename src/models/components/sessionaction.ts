/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Information about a given tool invocation as part of a session.
 */
export type SessionAction = {
  /**
   * Timestamp of the tool invocation
   */
  timestamp: Date;
  /**
   * Name of the tool that was invoked
   */
  toolName?: string | null | undefined;
  /**
   * Request sent to the tool API, if applicable
   */
  toolRequest?: string | null | undefined;
  /**
   * Response received from the tool API, if applicable
   */
  toolResult?: string | null | undefined;
};

/** @internal */
export const SessionAction$inboundSchema: z.ZodType<
  SessionAction,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  tool_name: z.nullable(z.string()).optional(),
  tool_request: z.nullable(z.string()).optional(),
  tool_result: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_name": "toolName",
    "tool_request": "toolRequest",
    "tool_result": "toolResult",
  });
});

/** @internal */
export type SessionAction$Outbound = {
  timestamp: string;
  tool_name?: string | null | undefined;
  tool_request?: string | null | undefined;
  tool_result?: string | null | undefined;
};

/** @internal */
export const SessionAction$outboundSchema: z.ZodType<
  SessionAction$Outbound,
  z.ZodTypeDef,
  SessionAction
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  toolName: z.nullable(z.string()).optional(),
  toolRequest: z.nullable(z.string()).optional(),
  toolResult: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    toolName: "tool_name",
    toolRequest: "tool_request",
    toolResult: "tool_result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionAction$ {
  /** @deprecated use `SessionAction$inboundSchema` instead. */
  export const inboundSchema = SessionAction$inboundSchema;
  /** @deprecated use `SessionAction$outboundSchema` instead. */
  export const outboundSchema = SessionAction$outboundSchema;
  /** @deprecated use `SessionAction$Outbound` instead. */
  export type Outbound = SessionAction$Outbound;
}

export function sessionActionToJSON(sessionAction: SessionAction): string {
  return JSON.stringify(SessionAction$outboundSchema.parse(sessionAction));
}

export function sessionActionFromJSON(
  jsonString: string,
): SafeParseResult<SessionAction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionAction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionAction' from JSON`,
  );
}
