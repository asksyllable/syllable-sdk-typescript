/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentResponse,
  AgentResponse$inboundSchema,
  AgentResponse$Outbound,
  AgentResponse$outboundSchema,
} from "./agentresponse.js";

export type ListResponseAgentResponse = {
  /**
   * List of items returned from the query
   */
  items: Array<AgentResponse>;
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
export const ListResponseAgentResponse$inboundSchema: z.ZodType<
  ListResponseAgentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(AgentResponse$inboundSchema),
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
export type ListResponseAgentResponse$Outbound = {
  items: Array<AgentResponse$Outbound>;
  page: number;
  page_size: number;
  total_pages?: number | null | undefined;
  total_count?: number | null | undefined;
};

/** @internal */
export const ListResponseAgentResponse$outboundSchema: z.ZodType<
  ListResponseAgentResponse$Outbound,
  z.ZodTypeDef,
  ListResponseAgentResponse
> = z.object({
  items: z.array(AgentResponse$outboundSchema),
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
export namespace ListResponseAgentResponse$ {
  /** @deprecated use `ListResponseAgentResponse$inboundSchema` instead. */
  export const inboundSchema = ListResponseAgentResponse$inboundSchema;
  /** @deprecated use `ListResponseAgentResponse$outboundSchema` instead. */
  export const outboundSchema = ListResponseAgentResponse$outboundSchema;
  /** @deprecated use `ListResponseAgentResponse$Outbound` instead. */
  export type Outbound = ListResponseAgentResponse$Outbound;
}

export function listResponseAgentResponseToJSON(
  listResponseAgentResponse: ListResponseAgentResponse,
): string {
  return JSON.stringify(
    ListResponseAgentResponse$outboundSchema.parse(listResponseAgentResponse),
  );
}

export function listResponseAgentResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListResponseAgentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListResponseAgentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResponseAgentResponse' from JSON`,
  );
}
