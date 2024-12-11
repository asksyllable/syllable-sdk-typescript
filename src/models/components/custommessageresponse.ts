/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomMessageResponse = {
  /**
   * The name of the custom message
   */
  name: string;
  /**
   * The text of the custom message
   */
  text: string;
  /**
   * The label of the custom message
   */
  label?: string | null | undefined;
  /**
   * The ID of the custom message
   */
  id: number;
  /**
   * Timestamp of the most recent update to the custom message
   */
  updatedAt: Date;
  type?: string | undefined;
};

/** @internal */
export const CustomMessageResponse$inboundSchema: z.ZodType<
  CustomMessageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  text: z.string(),
  label: z.nullable(z.string()).optional(),
  id: z.number().int(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  type: z.string().default("greeting"),
}).transform((v) => {
  return remap$(v, {
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CustomMessageResponse$Outbound = {
  name: string;
  text: string;
  label?: string | null | undefined;
  id: number;
  updated_at: string;
  type: string;
};

/** @internal */
export const CustomMessageResponse$outboundSchema: z.ZodType<
  CustomMessageResponse$Outbound,
  z.ZodTypeDef,
  CustomMessageResponse
> = z.object({
  name: z.string(),
  text: z.string(),
  label: z.nullable(z.string()).optional(),
  id: z.number().int(),
  updatedAt: z.date().transform(v => v.toISOString()),
  type: z.string().default("greeting"),
}).transform((v) => {
  return remap$(v, {
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomMessageResponse$ {
  /** @deprecated use `CustomMessageResponse$inboundSchema` instead. */
  export const inboundSchema = CustomMessageResponse$inboundSchema;
  /** @deprecated use `CustomMessageResponse$outboundSchema` instead. */
  export const outboundSchema = CustomMessageResponse$outboundSchema;
  /** @deprecated use `CustomMessageResponse$Outbound` instead. */
  export type Outbound = CustomMessageResponse$Outbound;
}

export function customMessageResponseToJSON(
  customMessageResponse: CustomMessageResponse,
): string {
  return JSON.stringify(
    CustomMessageResponse$outboundSchema.parse(customMessageResponse),
  );
}

export function customMessageResponseFromJSON(
  jsonString: string,
): SafeParseResult<CustomMessageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomMessageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomMessageResponse' from JSON`,
  );
}
