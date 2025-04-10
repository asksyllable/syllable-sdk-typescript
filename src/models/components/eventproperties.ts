/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const EventProperties = {
  Timestamp: "timestamp",
  SessionId: "session_id",
  ConversationId: "conversation_id",
  Source: "source",
  SourceId: "source_id",
  Category: "category",
  Type: "type",
  UserId: "user_id",
  Description: "description",
  Attributes: "attributes",
} as const;
export type EventProperties = ClosedEnum<typeof EventProperties>;

/** @internal */
export const EventProperties$inboundSchema: z.ZodNativeEnum<
  typeof EventProperties
> = z.nativeEnum(EventProperties);

/** @internal */
export const EventProperties$outboundSchema: z.ZodNativeEnum<
  typeof EventProperties
> = EventProperties$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventProperties$ {
  /** @deprecated use `EventProperties$inboundSchema` instead. */
  export const inboundSchema = EventProperties$inboundSchema;
  /** @deprecated use `EventProperties$outboundSchema` instead. */
  export const outboundSchema = EventProperties$outboundSchema;
}
