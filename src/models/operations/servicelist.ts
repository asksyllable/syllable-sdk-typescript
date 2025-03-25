/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ServiceListRequest = {
  /**
   * The page number from which to start (0-based)
   */
  page?: number | null | undefined;
  /**
   * The maximum number of items to return
   */
  limit?: number | undefined;
  /**
   * String names of fields to search. Correspond by index to search field values
   */
  searchFields?: Array<components.ServiceProperties> | undefined;
  /**
   * Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list
   */
  searchFieldValues?: Array<string> | undefined;
  /**
   * The field whose value should be used to order the results
   */
  orderBy?: components.ServiceProperties | null | undefined;
  /**
   * The direction in which to order the results
   */
  orderByDirection?: components.OrderByDirection | null | undefined;
  /**
   * The fields to include in the response
   */
  fields?: Array<components.ServiceProperties> | null | undefined;
  /**
   * The start datetime for filtering results
   */
  startDatetime?: string | null | undefined;
  /**
   * The end datetime for filtering results
   */
  endDatetime?: string | null | undefined;
};

/** @internal */
export const ServiceListRequest$inboundSchema: z.ZodType<
  ServiceListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  search_fields: z.array(components.ServiceProperties$inboundSchema).optional(),
  search_field_values: z.array(z.string()).optional(),
  order_by: z.nullable(components.ServiceProperties$inboundSchema).optional(),
  order_by_direction: z.nullable(components.OrderByDirection$inboundSchema)
    .optional(),
  fields: z.nullable(z.array(components.ServiceProperties$inboundSchema))
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
export type ServiceListRequest$Outbound = {
  page?: number | null | undefined;
  limit: number;
  search_fields?: Array<string> | undefined;
  search_field_values?: Array<string> | undefined;
  order_by?: string | null | undefined;
  order_by_direction?: string | null | undefined;
  fields?: Array<string> | null | undefined;
  start_datetime?: string | null | undefined;
  end_datetime?: string | null | undefined;
};

/** @internal */
export const ServiceListRequest$outboundSchema: z.ZodType<
  ServiceListRequest$Outbound,
  z.ZodTypeDef,
  ServiceListRequest
> = z.object({
  page: z.nullable(z.number().int()).optional(),
  limit: z.number().int().default(25),
  searchFields: z.array(components.ServiceProperties$outboundSchema).optional(),
  searchFieldValues: z.array(z.string()).optional(),
  orderBy: z.nullable(components.ServiceProperties$outboundSchema).optional(),
  orderByDirection: z.nullable(components.OrderByDirection$outboundSchema)
    .optional(),
  fields: z.nullable(z.array(components.ServiceProperties$outboundSchema))
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
export namespace ServiceListRequest$ {
  /** @deprecated use `ServiceListRequest$inboundSchema` instead. */
  export const inboundSchema = ServiceListRequest$inboundSchema;
  /** @deprecated use `ServiceListRequest$outboundSchema` instead. */
  export const outboundSchema = ServiceListRequest$outboundSchema;
  /** @deprecated use `ServiceListRequest$Outbound` instead. */
  export type Outbound = ServiceListRequest$Outbound;
}

export function serviceListRequestToJSON(
  serviceListRequest: ServiceListRequest,
): string {
  return JSON.stringify(
    ServiceListRequest$outboundSchema.parse(serviceListRequest),
  );
}

export function serviceListRequestFromJSON(
  jsonString: string,
): SafeParseResult<ServiceListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ServiceListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ServiceListRequest' from JSON`,
  );
}
