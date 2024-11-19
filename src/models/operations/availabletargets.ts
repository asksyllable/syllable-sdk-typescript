/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AvailableTargetsRequest = {
  page?: number | null | undefined;
  limit?: number | undefined;
  searchFields?: Array<components.AvailableTargetProperties> | undefined;
  searchFieldValues?: Array<string> | undefined;
  orderBy?: components.AvailableTargetProperties | undefined;
  orderByDirection?: components.OrderByDirection | undefined;
  fields?: Array<components.AvailableTargetProperties> | null | undefined;
  startDatetime?: string | null | undefined;
  endDatetime?: string | null | undefined;
};

/** @internal */
export const AvailableTargetsRequest$inboundSchema: z.ZodType<
  AvailableTargetsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  search_fields: z.array(components.AvailableTargetProperties$inboundSchema)
    .optional(),
  search_field_values: z.array(z.string()).optional(),
  order_by: components.AvailableTargetProperties$inboundSchema.optional(),
  order_by_direction: components.OrderByDirection$inboundSchema.optional(),
  fields: z.nullable(
    z.array(components.AvailableTargetProperties$inboundSchema),
  ).optional(),
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
export type AvailableTargetsRequest$Outbound = {
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
export const AvailableTargetsRequest$outboundSchema: z.ZodType<
  AvailableTargetsRequest$Outbound,
  z.ZodTypeDef,
  AvailableTargetsRequest
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  searchFields: z.array(components.AvailableTargetProperties$outboundSchema)
    .optional(),
  searchFieldValues: z.array(z.string()).optional(),
  orderBy: components.AvailableTargetProperties$outboundSchema.optional(),
  orderByDirection: components.OrderByDirection$outboundSchema.optional(),
  fields: z.nullable(
    z.array(components.AvailableTargetProperties$outboundSchema),
  ).optional(),
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
export namespace AvailableTargetsRequest$ {
  /** @deprecated use `AvailableTargetsRequest$inboundSchema` instead. */
  export const inboundSchema = AvailableTargetsRequest$inboundSchema;
  /** @deprecated use `AvailableTargetsRequest$outboundSchema` instead. */
  export const outboundSchema = AvailableTargetsRequest$outboundSchema;
  /** @deprecated use `AvailableTargetsRequest$Outbound` instead. */
  export type Outbound = AvailableTargetsRequest$Outbound;
}

export function availableTargetsRequestToJSON(
  availableTargetsRequest: AvailableTargetsRequest,
): string {
  return JSON.stringify(
    AvailableTargetsRequest$outboundSchema.parse(availableTargetsRequest),
  );
}

export function availableTargetsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AvailableTargetsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AvailableTargetsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AvailableTargetsRequest' from JSON`,
  );
}
