/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InternalTool,
  InternalTool$inboundSchema,
  InternalTool$Outbound,
  InternalTool$outboundSchema,
} from "./internaltool.js";
import {
  StaticToolParameter,
  StaticToolParameter$inboundSchema,
  StaticToolParameter$Outbound,
  StaticToolParameter$outboundSchema,
} from "./statictoolparameter.js";
import {
  ToolHttpEndpoint,
  ToolHttpEndpoint$inboundSchema,
  ToolHttpEndpoint$Outbound,
  ToolHttpEndpoint$outboundSchema,
} from "./toolhttpendpoint.js";
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

/**
 * The default values for the parameters of the function/tool call.
 */
export type Defaults = any | { [k: string]: ToolParameterDefault };

/**
 * A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools.
 */
export type ToolDefinition = {
  /**
   * The action to take when the LLM calls the tool.
   */
  type?: Type | null | undefined;
  /**
   * A tool definition to be used by the OpenAI API.
   */
  tool: InternalTool;
  /**
   * The configuration for an HTTP API call.
   */
  endpoint?: ToolHttpEndpoint | null | undefined;
  /**
   * The default values for the parameters of the function/tool call.
   */
  defaults?: any | { [k: string]: ToolParameterDefault } | null | undefined;
  /**
   * Parameters for the tool whose values should be set at config time (i.e., not provided by the LLM).
   */
  staticParameters?: Array<StaticToolParameter> | null | undefined;
  /**
   * The optional result of the tool call. Only used for `context` tools.
   */
  result?: any | null | undefined;
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
export const Defaults$inboundSchema: z.ZodType<
  Defaults,
  z.ZodTypeDef,
  unknown
> = z.union([z.any(), z.record(ToolParameterDefault$inboundSchema)]);

/** @internal */
export type Defaults$Outbound = any | {
  [k: string]: ToolParameterDefault$Outbound;
};

/** @internal */
export const Defaults$outboundSchema: z.ZodType<
  Defaults$Outbound,
  z.ZodTypeDef,
  Defaults
> = z.union([z.any(), z.record(ToolParameterDefault$outboundSchema)]);

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
export const ToolDefinition$inboundSchema: z.ZodType<
  ToolDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.nullable(Type$inboundSchema).optional(),
  tool: InternalTool$inboundSchema,
  endpoint: z.nullable(ToolHttpEndpoint$inboundSchema).optional(),
  defaults: z.nullable(
    z.union([z.any(), z.record(ToolParameterDefault$inboundSchema)]),
  ).optional(),
  static_parameters: z.nullable(z.array(StaticToolParameter$inboundSchema))
    .optional(),
  result: z.nullable(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "static_parameters": "staticParameters",
  });
});

/** @internal */
export type ToolDefinition$Outbound = {
  type?: string | null | undefined;
  tool: InternalTool$Outbound;
  endpoint?: ToolHttpEndpoint$Outbound | null | undefined;
  defaults?:
    | any
    | { [k: string]: ToolParameterDefault$Outbound }
    | null
    | undefined;
  static_parameters?: Array<StaticToolParameter$Outbound> | null | undefined;
  result?: any | null | undefined;
};

/** @internal */
export const ToolDefinition$outboundSchema: z.ZodType<
  ToolDefinition$Outbound,
  z.ZodTypeDef,
  ToolDefinition
> = z.object({
  type: z.nullable(Type$outboundSchema).optional(),
  tool: InternalTool$outboundSchema,
  endpoint: z.nullable(ToolHttpEndpoint$outboundSchema).optional(),
  defaults: z.nullable(
    z.union([z.any(), z.record(ToolParameterDefault$outboundSchema)]),
  ).optional(),
  staticParameters: z.nullable(z.array(StaticToolParameter$outboundSchema))
    .optional(),
  result: z.nullable(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    staticParameters: "static_parameters",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolDefinition$ {
  /** @deprecated use `ToolDefinition$inboundSchema` instead. */
  export const inboundSchema = ToolDefinition$inboundSchema;
  /** @deprecated use `ToolDefinition$outboundSchema` instead. */
  export const outboundSchema = ToolDefinition$outboundSchema;
  /** @deprecated use `ToolDefinition$Outbound` instead. */
  export type Outbound = ToolDefinition$Outbound;
}

export function toolDefinitionToJSON(toolDefinition: ToolDefinition): string {
  return JSON.stringify(ToolDefinition$outboundSchema.parse(toolDefinition));
}

export function toolDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<ToolDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolDefinition' from JSON`,
  );
}
