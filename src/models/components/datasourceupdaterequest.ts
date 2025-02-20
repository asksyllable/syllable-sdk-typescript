/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DataSourceUpdateRequest = {
  /**
   * The data source name. Must be unique within suborg.
   */
  name: string;
  /**
   * The description of the data source.
   */
  description?: string | null | undefined;
  /**
   * Searchable labels for the data source. Can be included in agent.prompt_tool_defaults for a given tool to give the agent access to data sources with those labels when calling that tool.
   */
  labels?: Array<string> | undefined;
  /**
   * Whether the content should be split into smaller chunks. This can improve agent performance when searching a large data source but risks some relevant information being left off search results if chunk_delimiter is not set up properly.
   */
  chunk: boolean;
  /**
   * String that should be treated as delimiter between intended chunks if chunk == True. This string will not be included in any chunks. Defaults to a blank line ('\n\n').
   */
  chunkDelimiter?: string | undefined;
  /**
   * The data source ID.
   */
  id: number;
  /**
   * The comments for the most recent edit to the data source
   */
  editComments?: string | null | undefined;
  /**
   * Information that the data source will provide to the agent accessing it.
   */
  text: string;
};

/** @internal */
export const DataSourceUpdateRequest$inboundSchema: z.ZodType<
  DataSourceUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  labels: z.array(z.string()).optional(),
  chunk: z.boolean(),
  chunk_delimiter: z.string().default("\n\n"),
  id: z.number().int(),
  edit_comments: z.nullable(z.string()).optional(),
  text: z.string(),
}).transform((v) => {
  return remap$(v, {
    "chunk_delimiter": "chunkDelimiter",
    "edit_comments": "editComments",
  });
});

/** @internal */
export type DataSourceUpdateRequest$Outbound = {
  name: string;
  description?: string | null | undefined;
  labels?: Array<string> | undefined;
  chunk: boolean;
  chunk_delimiter: string;
  id: number;
  edit_comments?: string | null | undefined;
  text: string;
};

/** @internal */
export const DataSourceUpdateRequest$outboundSchema: z.ZodType<
  DataSourceUpdateRequest$Outbound,
  z.ZodTypeDef,
  DataSourceUpdateRequest
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  labels: z.array(z.string()).optional(),
  chunk: z.boolean(),
  chunkDelimiter: z.string().default("\n\n"),
  id: z.number().int(),
  editComments: z.nullable(z.string()).optional(),
  text: z.string(),
}).transform((v) => {
  return remap$(v, {
    chunkDelimiter: "chunk_delimiter",
    editComments: "edit_comments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSourceUpdateRequest$ {
  /** @deprecated use `DataSourceUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = DataSourceUpdateRequest$inboundSchema;
  /** @deprecated use `DataSourceUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = DataSourceUpdateRequest$outboundSchema;
  /** @deprecated use `DataSourceUpdateRequest$Outbound` instead. */
  export type Outbound = DataSourceUpdateRequest$Outbound;
}

export function dataSourceUpdateRequestToJSON(
  dataSourceUpdateRequest: DataSourceUpdateRequest,
): string {
  return JSON.stringify(
    DataSourceUpdateRequest$outboundSchema.parse(dataSourceUpdateRequest),
  );
}

export function dataSourceUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<DataSourceUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataSourceUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataSourceUpdateRequest' from JSON`,
  );
}
