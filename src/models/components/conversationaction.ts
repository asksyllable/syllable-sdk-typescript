/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ConversationAction = {
  timestamp: Date;
  toolName?: string | null | undefined;
  toolRequest?: string | null | undefined;
  toolResult?: string | null | undefined;
};

/** @internal */
export const ConversationAction$inboundSchema: z.ZodType<
  ConversationAction,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  tool_name: z.nullable(z.string()).optional(),
  tool_request: z.nullable(z.string()).optional(),
  tool_result: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_name": "toolName",
    "tool_request": "toolRequest",
    "tool_result": "toolResult",
  });
});

/** @internal */
export type ConversationAction$Outbound = {
  timestamp: string;
  tool_name?: string | null | undefined;
  tool_request?: string | null | undefined;
  tool_result?: string | null | undefined;
};

/** @internal */
export const ConversationAction$outboundSchema: z.ZodType<
  ConversationAction$Outbound,
  z.ZodTypeDef,
  ConversationAction
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  toolName: z.nullable(z.string()).optional(),
  toolRequest: z.nullable(z.string()).optional(),
  toolResult: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    toolName: "tool_name",
    toolRequest: "tool_request",
    toolResult: "tool_result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationAction$ {
  /** @deprecated use `ConversationAction$inboundSchema` instead. */
  export const inboundSchema = ConversationAction$inboundSchema;
  /** @deprecated use `ConversationAction$outboundSchema` instead. */
  export const outboundSchema = ConversationAction$outboundSchema;
  /** @deprecated use `ConversationAction$Outbound` instead. */
  export type Outbound = ConversationAction$Outbound;
}
