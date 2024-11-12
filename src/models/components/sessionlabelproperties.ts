/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const SessionLabelProperties = {
  Timestamp: "timestamp",
  SessionId: "session_id",
  Type: "type",
  Code: "code",
  UserEmail: "user_email",
  IssueCategories: "issue_categories",
  SessionIdList: "session_id_list",
} as const;
export type SessionLabelProperties = ClosedEnum<typeof SessionLabelProperties>;

/** @internal */
export const SessionLabelProperties$inboundSchema: z.ZodNativeEnum<
  typeof SessionLabelProperties
> = z.nativeEnum(SessionLabelProperties);

/** @internal */
export const SessionLabelProperties$outboundSchema: z.ZodNativeEnum<
  typeof SessionLabelProperties
> = SessionLabelProperties$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionLabelProperties$ {
  /** @deprecated use `SessionLabelProperties$inboundSchema` instead. */
  export const inboundSchema = SessionLabelProperties$inboundSchema;
  /** @deprecated use `SessionLabelProperties$outboundSchema` instead. */
  export const outboundSchema = SessionLabelProperties$outboundSchema;
}
