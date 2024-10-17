/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Greeting
 */
export type Greeting = {
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
export const Greeting$inboundSchema: z.ZodType<
  Greeting,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  text: z.string(),
  id: z.number().int(),
});

/** @internal */
export type Greeting$Outbound = {
  name: string;
  text: string;
  id: number;
};

/** @internal */
export const Greeting$outboundSchema: z.ZodType<
  Greeting$Outbound,
  z.ZodTypeDef,
  Greeting
> = z.object({
  name: z.string(),
  text: z.string(),
  id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Greeting$ {
  /** @deprecated use `Greeting$inboundSchema` instead. */
  export const inboundSchema = Greeting$inboundSchema;
  /** @deprecated use `Greeting$outboundSchema` instead. */
  export const outboundSchema = Greeting$outboundSchema;
  /** @deprecated use `Greeting$Outbound` instead. */
  export type Outbound = Greeting$Outbound;
}
