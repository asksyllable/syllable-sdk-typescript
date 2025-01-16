/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A session label is associated with a given session and contains an evaluation of quality and
 *
 * @remarks
 * descriptions of issues the user encountered in that session or other details.
 */
export type SessionLabel = {
  /**
   * The internal ID of the session (see Session.session_id)
   */
  sessionId: number;
  /**
   * The type of the label
   */
  type: string;
  /**
   * A code describing the quality of the labeled session
   */
  code: string;
  /**
   * The email of the user who created the label
   */
  userEmail: string;
  /**
   * Comment string describing additional details about the session
   */
  comments?: string | null | undefined;
  /**
   * Descriptions of issues occurring in the labeled call
   */
  issueCategories?: Array<string> | null | undefined;
  /**
   * The internal ID of the label
   */
  id: number;
  /**
   * The timestamp of the label creation
   */
  timestamp: string;
};

/** @internal */
export const SessionLabel$inboundSchema: z.ZodType<
  SessionLabel,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_id: z.number().int(),
  type: z.string(),
  code: z.string(),
  user_email: z.string(),
  comments: z.nullable(z.string()).optional(),
  issue_categories: z.nullable(z.array(z.string())).optional(),
  id: z.number().int(),
  timestamp: z.string(),
}).transform((v) => {
  return remap$(v, {
    "session_id": "sessionId",
    "user_email": "userEmail",
    "issue_categories": "issueCategories",
  });
});

/** @internal */
export type SessionLabel$Outbound = {
  session_id: number;
  type: string;
  code: string;
  user_email: string;
  comments?: string | null | undefined;
  issue_categories?: Array<string> | null | undefined;
  id: number;
  timestamp: string;
};

/** @internal */
export const SessionLabel$outboundSchema: z.ZodType<
  SessionLabel$Outbound,
  z.ZodTypeDef,
  SessionLabel
> = z.object({
  sessionId: z.number().int(),
  type: z.string(),
  code: z.string(),
  userEmail: z.string(),
  comments: z.nullable(z.string()).optional(),
  issueCategories: z.nullable(z.array(z.string())).optional(),
  id: z.number().int(),
  timestamp: z.string(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
    userEmail: "user_email",
    issueCategories: "issue_categories",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionLabel$ {
  /** @deprecated use `SessionLabel$inboundSchema` instead. */
  export const inboundSchema = SessionLabel$inboundSchema;
  /** @deprecated use `SessionLabel$outboundSchema` instead. */
  export const outboundSchema = SessionLabel$outboundSchema;
  /** @deprecated use `SessionLabel$Outbound` instead. */
  export type Outbound = SessionLabel$Outbound;
}

export function sessionLabelToJSON(sessionLabel: SessionLabel): string {
  return JSON.stringify(SessionLabel$outboundSchema.parse(sessionLabel));
}

export function sessionLabelFromJSON(
  jsonString: string,
): SafeParseResult<SessionLabel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionLabel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionLabel' from JSON`,
  );
}
