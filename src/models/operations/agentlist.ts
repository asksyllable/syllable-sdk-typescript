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

export const OrderBy = {
  Id: "id",
  Name: "name",
  Type: "type",
  Timezone: "timezone",
  PromptId: "prompt_id",
  CustomMessageId: "custom_message_id",
  Languages: "languages",
  Variables: "variables",
  PromptToolDefaults: "prompt_tool_defaults",
  ToolHeaders: "tool_headers",
} as const;
export type OrderBy = ClosedEnum<typeof OrderBy>;

export const OrderByDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type OrderByDirection = ClosedEnum<typeof OrderByDirection>;

export type AgentListRequest = {
  page?: number | null | undefined;
  limit?: number | undefined;
  searchFields?: Array<components.AgentProperties> | undefined;
  searchFieldValues?: Array<string> | undefined;
  orderBy?: OrderBy | undefined;
  orderByDirection?: OrderByDirection | undefined;
  fields?: Array<components.AgentProperties> | null | undefined;
  startDatetime?: string | null | undefined;
  endDatetime?: string | null | undefined;
};

/** @internal */
export const OrderBy$inboundSchema: z.ZodNativeEnum<typeof OrderBy> = z
  .nativeEnum(OrderBy);

/** @internal */
export const OrderBy$outboundSchema: z.ZodNativeEnum<typeof OrderBy> =
  OrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderBy$ {
  /** @deprecated use `OrderBy$inboundSchema` instead. */
  export const inboundSchema = OrderBy$inboundSchema;
  /** @deprecated use `OrderBy$outboundSchema` instead. */
  export const outboundSchema = OrderBy$outboundSchema;
}

/** @internal */
export const OrderByDirection$inboundSchema: z.ZodNativeEnum<
  typeof OrderByDirection
> = z.nativeEnum(OrderByDirection);

/** @internal */
export const OrderByDirection$outboundSchema: z.ZodNativeEnum<
  typeof OrderByDirection
> = OrderByDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderByDirection$ {
  /** @deprecated use `OrderByDirection$inboundSchema` instead. */
  export const inboundSchema = OrderByDirection$inboundSchema;
  /** @deprecated use `OrderByDirection$outboundSchema` instead. */
  export const outboundSchema = OrderByDirection$outboundSchema;
}

/** @internal */
export const AgentListRequest$inboundSchema: z.ZodType<
  AgentListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  search_fields: z.array(components.AgentProperties$inboundSchema).optional(),
  search_field_values: z.array(z.string()).optional(),
  order_by: OrderBy$inboundSchema.optional(),
  order_by_direction: OrderByDirection$inboundSchema.optional(),
  fields: z.nullable(z.array(components.AgentProperties$inboundSchema))
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
export type AgentListRequest$Outbound = {
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
export const AgentListRequest$outboundSchema: z.ZodType<
  AgentListRequest$Outbound,
  z.ZodTypeDef,
  AgentListRequest
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  searchFields: z.array(components.AgentProperties$outboundSchema).optional(),
  searchFieldValues: z.array(z.string()).optional(),
  orderBy: OrderBy$outboundSchema.optional(),
  orderByDirection: OrderByDirection$outboundSchema.optional(),
  fields: z.nullable(z.array(components.AgentProperties$outboundSchema))
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
export namespace AgentListRequest$ {
  /** @deprecated use `AgentListRequest$inboundSchema` instead. */
  export const inboundSchema = AgentListRequest$inboundSchema;
  /** @deprecated use `AgentListRequest$outboundSchema` instead. */
  export const outboundSchema = AgentListRequest$outboundSchema;
  /** @deprecated use `AgentListRequest$Outbound` instead. */
  export type Outbound = AgentListRequest$Outbound;
}

export function agentListRequestToJSON(
  agentListRequest: AgentListRequest,
): string {
  return JSON.stringify(
    AgentListRequest$outboundSchema.parse(agentListRequest),
  );
}

export function agentListRequestFromJSON(
  jsonString: string,
): SafeParseResult<AgentListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentListRequest' from JSON`,
  );
}
