/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DataSourceMetadataResponse,
  DataSourceMetadataResponse$inboundSchema,
  DataSourceMetadataResponse$Outbound,
  DataSourceMetadataResponse$outboundSchema,
} from "./datasourcemetadataresponse.js";

export type ListResponseDataSourceMetadataResponse = {
  /**
   * List of items returned from the query
   */
  items: Array<DataSourceMetadataResponse>;
  /**
   * The page number of the results (0-based)
   */
  page: number;
  /**
   * The number of items returned per page
   */
  pageSize: number;
  /**
   * The total number of pages of results given the indicated page size
   */
  totalPages?: number | null | undefined;
  /**
   * The total number of items returned from the query
   */
  totalCount?: number | null | undefined;
};

/** @internal */
export const ListResponseDataSourceMetadataResponse$inboundSchema: z.ZodType<
  ListResponseDataSourceMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(DataSourceMetadataResponse$inboundSchema),
  page: z.number().int(),
  page_size: z.number().int(),
  total_pages: z.nullable(z.number().int()).optional(),
  total_count: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
    "total_pages": "totalPages",
    "total_count": "totalCount",
  });
});

/** @internal */
export type ListResponseDataSourceMetadataResponse$Outbound = {
  items: Array<DataSourceMetadataResponse$Outbound>;
  page: number;
  page_size: number;
  total_pages?: number | null | undefined;
  total_count?: number | null | undefined;
};

/** @internal */
export const ListResponseDataSourceMetadataResponse$outboundSchema: z.ZodType<
  ListResponseDataSourceMetadataResponse$Outbound,
  z.ZodTypeDef,
  ListResponseDataSourceMetadataResponse
> = z.object({
  items: z.array(DataSourceMetadataResponse$outboundSchema),
  page: z.number().int(),
  pageSize: z.number().int(),
  totalPages: z.nullable(z.number().int()).optional(),
  totalCount: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
    totalPages: "total_pages",
    totalCount: "total_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResponseDataSourceMetadataResponse$ {
  /** @deprecated use `ListResponseDataSourceMetadataResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListResponseDataSourceMetadataResponse$inboundSchema;
  /** @deprecated use `ListResponseDataSourceMetadataResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListResponseDataSourceMetadataResponse$outboundSchema;
  /** @deprecated use `ListResponseDataSourceMetadataResponse$Outbound` instead. */
  export type Outbound = ListResponseDataSourceMetadataResponse$Outbound;
}

export function listResponseDataSourceMetadataResponseToJSON(
  listResponseDataSourceMetadataResponse:
    ListResponseDataSourceMetadataResponse,
): string {
  return JSON.stringify(
    ListResponseDataSourceMetadataResponse$outboundSchema.parse(
      listResponseDataSourceMetadataResponse,
    ),
  );
}

export function listResponseDataSourceMetadataResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListResponseDataSourceMetadataResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListResponseDataSourceMetadataResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResponseDataSourceMetadataResponse' from JSON`,
  );
}
