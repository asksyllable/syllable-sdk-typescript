/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomMessage = {
  /**
   * The name of the custom message
   */
  name: string;
  /**
   * The text of the custom message
   */
  text: string;
  /**
   * The ID of the custom message
   */
  id: number;
};

/** @internal */
export const CustomMessage$inboundSchema: z.ZodType<
  CustomMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  text: z.string(),
  id: z.number().int(),
});

/** @internal */
export type CustomMessage$Outbound = {
  name: string;
  text: string;
  id: number;
};

/** @internal */
export const CustomMessage$outboundSchema: z.ZodType<
  CustomMessage$Outbound,
  z.ZodTypeDef,
  CustomMessage
> = z.object({
  name: z.string(),
  text: z.string(),
  id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomMessage$ {
  /** @deprecated use `CustomMessage$inboundSchema` instead. */
  export const inboundSchema = CustomMessage$inboundSchema;
  /** @deprecated use `CustomMessage$outboundSchema` instead. */
  export const outboundSchema = CustomMessage$outboundSchema;
  /** @deprecated use `CustomMessage$Outbound` instead. */
  export type Outbound = CustomMessage$Outbound;
}

export function customMessageToJSON(customMessage: CustomMessage): string {
  return JSON.stringify(CustomMessage$outboundSchema.parse(customMessage));
}

export function customMessageFromJSON(
  jsonString: string,
): SafeParseResult<CustomMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomMessage' from JSON`,
  );
}
