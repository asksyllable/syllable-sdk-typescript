/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const SessionsListQueryParamOrderBy = {
  Timestamp: "timestamp",
  SessionId: "session_id",
  ConversationId: "conversation_id",
  ChannelManagerService: "channel_manager_service",
  ChannelManagerType: "channel_manager_type",
  ChannelManagerSid: "channel_manager_sid",
  AgentType: "agent_type",
  AgentId: "agent_id",
  AgentName: "agent_name",
  PromptId: "prompt_id",
  PromptName: "prompt_name",
  Source: "source",
  Target: "target",
  Duration: "duration",
  IsLegacy: "is_legacy",
  IsTest: "is_test",
} as const;
export type SessionsListQueryParamOrderBy = ClosedEnum<
  typeof SessionsListQueryParamOrderBy
>;

export const SessionsListQueryParamOrderByDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type SessionsListQueryParamOrderByDirection = ClosedEnum<
  typeof SessionsListQueryParamOrderByDirection
>;

export type SessionsListRequest = {
  page?: number | null | undefined;
  limit?: number | undefined;
  searchFields?: Array<components.SessionProperties> | undefined;
  searchFieldValues?: Array<string> | undefined;
  orderBy?: SessionsListQueryParamOrderBy | undefined;
  orderByDirection?: SessionsListQueryParamOrderByDirection | undefined;
  fields?: Array<components.SessionProperties> | null | undefined;
  startDatetime?: string | null | undefined;
  endDatetime?: string | null | undefined;
};

/** @internal */
export const SessionsListQueryParamOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof SessionsListQueryParamOrderBy
> = z.nativeEnum(SessionsListQueryParamOrderBy);

/** @internal */
export const SessionsListQueryParamOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof SessionsListQueryParamOrderBy
> = SessionsListQueryParamOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionsListQueryParamOrderBy$ {
  /** @deprecated use `SessionsListQueryParamOrderBy$inboundSchema` instead. */
  export const inboundSchema = SessionsListQueryParamOrderBy$inboundSchema;
  /** @deprecated use `SessionsListQueryParamOrderBy$outboundSchema` instead. */
  export const outboundSchema = SessionsListQueryParamOrderBy$outboundSchema;
}

/** @internal */
export const SessionsListQueryParamOrderByDirection$inboundSchema:
  z.ZodNativeEnum<typeof SessionsListQueryParamOrderByDirection> = z.nativeEnum(
    SessionsListQueryParamOrderByDirection,
  );

/** @internal */
export const SessionsListQueryParamOrderByDirection$outboundSchema:
  z.ZodNativeEnum<typeof SessionsListQueryParamOrderByDirection> =
    SessionsListQueryParamOrderByDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionsListQueryParamOrderByDirection$ {
  /** @deprecated use `SessionsListQueryParamOrderByDirection$inboundSchema` instead. */
  export const inboundSchema =
    SessionsListQueryParamOrderByDirection$inboundSchema;
  /** @deprecated use `SessionsListQueryParamOrderByDirection$outboundSchema` instead. */
  export const outboundSchema =
    SessionsListQueryParamOrderByDirection$outboundSchema;
}

/** @internal */
export const SessionsListRequest$inboundSchema: z.ZodType<
  SessionsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  search_fields: z.array(components.SessionProperties$inboundSchema).optional(),
  search_field_values: z.array(z.string()).optional(),
  order_by: SessionsListQueryParamOrderBy$inboundSchema.optional(),
  order_by_direction: SessionsListQueryParamOrderByDirection$inboundSchema
    .optional(),
  fields: z.nullable(z.array(components.SessionProperties$inboundSchema))
    .optional(),
  start_datetime: z.nullable(z.string()).optional(),
  end_datetime: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "search_fields": "searchFields",
    "search_field_values": "searchFieldValues",
    "order_by": "orderBy",
    "order_by_direction": "orderByDirection",
    "start_datetime": "startDatetime",
    "end_datetime": "endDatetime",
  });
});

/** @internal */
export type SessionsListRequest$Outbound = {
  page?: number | null | undefined;
  limit: number;
  search_fields?: Array<string> | undefined;
  search_field_values?: Array<string> | undefined;
  order_by?: string | undefined;
  order_by_direction?: string | undefined;
  fields?: Array<string> | null | undefined;
  start_datetime?: string | null | undefined;
  end_datetime?: string | null | undefined;
};

/** @internal */
export const SessionsListRequest$outboundSchema: z.ZodType<
  SessionsListRequest$Outbound,
  z.ZodTypeDef,
  SessionsListRequest
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  searchFields: z.array(components.SessionProperties$outboundSchema).optional(),
  searchFieldValues: z.array(z.string()).optional(),
  orderBy: SessionsListQueryParamOrderBy$outboundSchema.optional(),
  orderByDirection: SessionsListQueryParamOrderByDirection$outboundSchema
    .optional(),
  fields: z.nullable(z.array(components.SessionProperties$outboundSchema))
    .optional(),
  startDatetime: z.nullable(z.string()).optional(),
  endDatetime: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    searchFields: "search_fields",
    searchFieldValues: "search_field_values",
    orderBy: "order_by",
    orderByDirection: "order_by_direction",
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionsListRequest$ {
  /** @deprecated use `SessionsListRequest$inboundSchema` instead. */
  export const inboundSchema = SessionsListRequest$inboundSchema;
  /** @deprecated use `SessionsListRequest$outboundSchema` instead. */
  export const outboundSchema = SessionsListRequest$outboundSchema;
  /** @deprecated use `SessionsListRequest$Outbound` instead. */
  export type Outbound = SessionsListRequest$Outbound;
}

export function sessionsListRequestToJSON(
  sessionsListRequest: SessionsListRequest,
): string {
  return JSON.stringify(
    SessionsListRequest$outboundSchema.parse(sessionsListRequest),
  );
}

export function sessionsListRequestFromJSON(
  jsonString: string,
): SafeParseResult<SessionsListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionsListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionsListRequest' from JSON`,
  );
}
