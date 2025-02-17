/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  StaticToolParameterType,
  StaticToolParameterType$inboundSchema,
  StaticToolParameterType$outboundSchema,
} from "./statictoolparametertype.js";

/**
 * A parameter for the tool whose value should be set at config time.
 */
export type StaticToolParameter = {
  /**
   * The name of the parameter - must be unique within the tool.
   */
  name: string;
  /**
   * The description of the parameter.
   */
  description?: string | null | undefined;
  /**
   * Whether the parameter is required to have a value assigned.
   */
  required: boolean;
  /**
   * The expected type for a static tool parameter.
   */
  type: StaticToolParameterType;
  /**
   * The default value for the parameter. If `type` is string, must be a string. If `type` is int, must be an int. If `type` is boolean, must be a boolean. If `type` is data_source_list, must be a list of strings (data source names).
   */
  default?: any | null | undefined;
};

/** @internal */
export const StaticToolParameter$inboundSchema: z.ZodType<
  StaticToolParameter,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  required: z.boolean(),
  type: StaticToolParameterType$inboundSchema,
  default: z.nullable(z.any()).optional(),
});

/** @internal */
export type StaticToolParameter$Outbound = {
  name: string;
  description?: string | null | undefined;
  required: boolean;
  type: string;
  default?: any | null | undefined;
};

/** @internal */
export const StaticToolParameter$outboundSchema: z.ZodType<
  StaticToolParameter$Outbound,
  z.ZodTypeDef,
  StaticToolParameter
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  required: z.boolean(),
  type: StaticToolParameterType$outboundSchema,
  default: z.nullable(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StaticToolParameter$ {
  /** @deprecated use `StaticToolParameter$inboundSchema` instead. */
  export const inboundSchema = StaticToolParameter$inboundSchema;
  /** @deprecated use `StaticToolParameter$outboundSchema` instead. */
  export const outboundSchema = StaticToolParameter$outboundSchema;
  /** @deprecated use `StaticToolParameter$Outbound` instead. */
  export type Outbound = StaticToolParameter$Outbound;
}

export function staticToolParameterToJSON(
  staticToolParameter: StaticToolParameter,
): string {
  return JSON.stringify(
    StaticToolParameter$outboundSchema.parse(staticToolParameter),
  );
}

export function staticToolParameterFromJSON(
  jsonString: string,
): SafeParseResult<StaticToolParameter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StaticToolParameter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StaticToolParameter' from JSON`,
  );
}
