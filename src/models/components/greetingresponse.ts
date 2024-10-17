/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GreetingResponse = {
  /**
   * The name of the greeting
   */
  name: string;
  /**
   * The text of the greeting
   */
  text: string;
  /**
   * The ID of the greeting
   */
  id: number;
};

/** @internal */
export const GreetingResponse$inboundSchema: z.ZodType<
  GreetingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  text: z.string(),
  id: z.number().int(),
});

/** @internal */
export type GreetingResponse$Outbound = {
  name: string;
  text: string;
  id: number;
};

/** @internal */
export const GreetingResponse$outboundSchema: z.ZodType<
  GreetingResponse$Outbound,
  z.ZodTypeDef,
  GreetingResponse
> = z.object({
  name: z.string(),
  text: z.string(),
  id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GreetingResponse$ {
  /** @deprecated use `GreetingResponse$inboundSchema` instead. */
  export const inboundSchema = GreetingResponse$inboundSchema;
  /** @deprecated use `GreetingResponse$outboundSchema` instead. */
  export const outboundSchema = GreetingResponse$outboundSchema;
  /** @deprecated use `GreetingResponse$Outbound` instead. */
  export type Outbound = GreetingResponse$Outbound;
}
