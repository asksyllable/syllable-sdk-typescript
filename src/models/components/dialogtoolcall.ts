/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DialogToolCallToolArguments = {};

export type DialogToolCall = {
  tollCallId: string;
  toolName: string;
  toolArguments: DialogToolCallToolArguments;
  timestamp: Date;
};

/** @internal */
export const DialogToolCallToolArguments$inboundSchema: z.ZodType<
  DialogToolCallToolArguments,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DialogToolCallToolArguments$Outbound = {};

/** @internal */
export const DialogToolCallToolArguments$outboundSchema: z.ZodType<
  DialogToolCallToolArguments$Outbound,
  z.ZodTypeDef,
  DialogToolCallToolArguments
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DialogToolCallToolArguments$ {
  /** @deprecated use `DialogToolCallToolArguments$inboundSchema` instead. */
  export const inboundSchema = DialogToolCallToolArguments$inboundSchema;
  /** @deprecated use `DialogToolCallToolArguments$outboundSchema` instead. */
  export const outboundSchema = DialogToolCallToolArguments$outboundSchema;
  /** @deprecated use `DialogToolCallToolArguments$Outbound` instead. */
  export type Outbound = DialogToolCallToolArguments$Outbound;
}

export function dialogToolCallToolArgumentsToJSON(
  dialogToolCallToolArguments: DialogToolCallToolArguments,
): string {
  return JSON.stringify(
    DialogToolCallToolArguments$outboundSchema.parse(
      dialogToolCallToolArguments,
    ),
  );
}

export function dialogToolCallToolArgumentsFromJSON(
  jsonString: string,
): SafeParseResult<DialogToolCallToolArguments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DialogToolCallToolArguments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DialogToolCallToolArguments' from JSON`,
  );
}

/** @internal */
export const DialogToolCall$inboundSchema: z.ZodType<
  DialogToolCall,
  z.ZodTypeDef,
  unknown
> = z.object({
  toll_call_id: z.string(),
  tool_name: z.string(),
  tool_arguments: z.lazy(() => DialogToolCallToolArguments$inboundSchema),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "toll_call_id": "tollCallId",
    "tool_name": "toolName",
    "tool_arguments": "toolArguments",
  });
});

/** @internal */
export type DialogToolCall$Outbound = {
  toll_call_id: string;
  tool_name: string;
  tool_arguments: DialogToolCallToolArguments$Outbound;
  timestamp: string;
};

/** @internal */
export const DialogToolCall$outboundSchema: z.ZodType<
  DialogToolCall$Outbound,
  z.ZodTypeDef,
  DialogToolCall
> = z.object({
  tollCallId: z.string(),
  toolName: z.string(),
  toolArguments: z.lazy(() => DialogToolCallToolArguments$outboundSchema),
  timestamp: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    tollCallId: "toll_call_id",
    toolName: "tool_name",
    toolArguments: "tool_arguments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DialogToolCall$ {
  /** @deprecated use `DialogToolCall$inboundSchema` instead. */
  export const inboundSchema = DialogToolCall$inboundSchema;
  /** @deprecated use `DialogToolCall$outboundSchema` instead. */
  export const outboundSchema = DialogToolCall$outboundSchema;
  /** @deprecated use `DialogToolCall$Outbound` instead. */
  export type Outbound = DialogToolCall$Outbound;
}

export function dialogToolCallToJSON(dialogToolCall: DialogToolCall): string {
  return JSON.stringify(DialogToolCall$outboundSchema.parse(dialogToolCall));
}

export function dialogToolCallFromJSON(
  jsonString: string,
): SafeParseResult<DialogToolCall, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DialogToolCall$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DialogToolCall' from JSON`,
  );
}
