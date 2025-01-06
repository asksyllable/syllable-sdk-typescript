/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HttpEndpoint,
  HttpEndpoint$inboundSchema,
  HttpEndpoint$Outbound,
  HttpEndpoint$outboundSchema,
} from "./httpendpoint.js";
import {
  SDKInternalTool,
  SDKInternalTool$inboundSchema,
  SDKInternalTool$Outbound,
  SDKInternalTool$outboundSchema,
} from "./sdkinternaltool.js";
import {
  ToolParameterDefault,
  ToolParameterDefault$inboundSchema,
  ToolParameterDefault$Outbound,
  ToolParameterDefault$outboundSchema,
} from "./toolparameterdefault.js";

export const Type = {
  Action: "action",
  Endpoint: "endpoint",
  Context: "context",
  Log: "log",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type One = {};

/**
 * The default values for the parameters of the function/tool call.
 */
export type Defaults = One | { [k: string]: ToolParameterDefault };

export type Result = {};

export type SDKToolDefinition = {
  /**
   * The action to take when GPT calls the tool.
   */
  type?: Type | null | undefined;
  /**
   * A tool definition to be used by the OpenAI API.
   */
  tool: SDKInternalTool;
  /**
   * The configuration for an HTTP API call.
   */
  endpoint?: HttpEndpoint | null | undefined;
  /**
   * The default values for the parameters of the function/tool call.
   */
  defaults?: One | { [k: string]: ToolParameterDefault } | null | undefined;
  /**
   * The optional result of the tool call. Only used for `context` tools.
   */
  result?: Result | null | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const One$inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type One$Outbound = {};

/** @internal */
export const One$outboundSchema: z.ZodType<One$Outbound, z.ZodTypeDef, One> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
  /** @deprecated use `One$inboundSchema` instead. */
  export const inboundSchema = One$inboundSchema;
  /** @deprecated use `One$outboundSchema` instead. */
  export const outboundSchema = One$outboundSchema;
  /** @deprecated use `One$Outbound` instead. */
  export type Outbound = One$Outbound;
}

export function oneToJSON(one: One): string {
  return JSON.stringify(One$outboundSchema.parse(one));
}

export function oneFromJSON(
  jsonString: string,
): SafeParseResult<One, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => One$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'One' from JSON`,
  );
}

/** @internal */
export const Defaults$inboundSchema: z.ZodType<
  Defaults,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => One$inboundSchema),
  z.record(ToolParameterDefault$inboundSchema),
]);

/** @internal */
export type Defaults$Outbound = One$Outbound | {
  [k: string]: ToolParameterDefault$Outbound;
};

/** @internal */
export const Defaults$outboundSchema: z.ZodType<
  Defaults$Outbound,
  z.ZodTypeDef,
  Defaults
> = z.union([
  z.lazy(() => One$outboundSchema),
  z.record(ToolParameterDefault$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Defaults$ {
  /** @deprecated use `Defaults$inboundSchema` instead. */
  export const inboundSchema = Defaults$inboundSchema;
  /** @deprecated use `Defaults$outboundSchema` instead. */
  export const outboundSchema = Defaults$outboundSchema;
  /** @deprecated use `Defaults$Outbound` instead. */
  export type Outbound = Defaults$Outbound;
}

export function defaultsToJSON(defaults: Defaults): string {
  return JSON.stringify(Defaults$outboundSchema.parse(defaults));
}

export function defaultsFromJSON(
  jsonString: string,
): SafeParseResult<Defaults, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Defaults$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Defaults' from JSON`,
  );
}

/** @internal */
export const Result$inboundSchema: z.ZodType<Result, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Result$Outbound = {};

/** @internal */
export const Result$outboundSchema: z.ZodType<
  Result$Outbound,
  z.ZodTypeDef,
  Result
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Result$ {
  /** @deprecated use `Result$inboundSchema` instead. */
  export const inboundSchema = Result$inboundSchema;
  /** @deprecated use `Result$outboundSchema` instead. */
  export const outboundSchema = Result$outboundSchema;
  /** @deprecated use `Result$Outbound` instead. */
  export type Outbound = Result$Outbound;
}

export function resultToJSON(result: Result): string {
  return JSON.stringify(Result$outboundSchema.parse(result));
}

export function resultFromJSON(
  jsonString: string,
): SafeParseResult<Result, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Result$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Result' from JSON`,
  );
}

/** @internal */
export const SDKToolDefinition$inboundSchema: z.ZodType<
  SDKToolDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.nullable(Type$inboundSchema).optional(),
  tool: SDKInternalTool$inboundSchema,
  endpoint: z.nullable(HttpEndpoint$inboundSchema).optional(),
  defaults: z.nullable(
    z.union([
      z.lazy(() => One$inboundSchema),
      z.record(ToolParameterDefault$inboundSchema),
    ]),
  ).optional(),
  result: z.nullable(z.lazy(() => Result$inboundSchema)).optional(),
});

/** @internal */
export type SDKToolDefinition$Outbound = {
  type?: string | null | undefined;
  tool: SDKInternalTool$Outbound;
  endpoint?: HttpEndpoint$Outbound | null | undefined;
  defaults?:
    | One$Outbound
    | { [k: string]: ToolParameterDefault$Outbound }
    | null
    | undefined;
  result?: Result$Outbound | null | undefined;
};

/** @internal */
export const SDKToolDefinition$outboundSchema: z.ZodType<
  SDKToolDefinition$Outbound,
  z.ZodTypeDef,
  SDKToolDefinition
> = z.object({
  type: z.nullable(Type$outboundSchema).optional(),
  tool: SDKInternalTool$outboundSchema,
  endpoint: z.nullable(HttpEndpoint$outboundSchema).optional(),
  defaults: z.nullable(
    z.union([
      z.lazy(() => One$outboundSchema),
      z.record(ToolParameterDefault$outboundSchema),
    ]),
  ).optional(),
  result: z.nullable(z.lazy(() => Result$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDKToolDefinition$ {
  /** @deprecated use `SDKToolDefinition$inboundSchema` instead. */
  export const inboundSchema = SDKToolDefinition$inboundSchema;
  /** @deprecated use `SDKToolDefinition$outboundSchema` instead. */
  export const outboundSchema = SDKToolDefinition$outboundSchema;
  /** @deprecated use `SDKToolDefinition$Outbound` instead. */
  export type Outbound = SDKToolDefinition$Outbound;
}

export function sdkToolDefinitionToJSON(
  sdkToolDefinition: SDKToolDefinition,
): string {
  return JSON.stringify(
    SDKToolDefinition$outboundSchema.parse(sdkToolDefinition),
  );
}

export function sdkToolDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<SDKToolDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SDKToolDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SDKToolDefinition' from JSON`,
  );
}
