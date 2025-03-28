/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomMessagesDeleteRequest = {
  customMessageId: number;
  reason: string;
};

/** @internal */
export const CustomMessagesDeleteRequest$inboundSchema: z.ZodType<
  CustomMessagesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom_message_id: z.number().int(),
  reason: z.string(),
}).transform((v) => {
  return remap$(v, {
    "custom_message_id": "customMessageId",
  });
});

/** @internal */
export type CustomMessagesDeleteRequest$Outbound = {
  custom_message_id: number;
  reason: string;
};

/** @internal */
export const CustomMessagesDeleteRequest$outboundSchema: z.ZodType<
  CustomMessagesDeleteRequest$Outbound,
  z.ZodTypeDef,
  CustomMessagesDeleteRequest
> = z.object({
  customMessageId: z.number().int(),
  reason: z.string(),
}).transform((v) => {
  return remap$(v, {
    customMessageId: "custom_message_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomMessagesDeleteRequest$ {
  /** @deprecated use `CustomMessagesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = CustomMessagesDeleteRequest$inboundSchema;
  /** @deprecated use `CustomMessagesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = CustomMessagesDeleteRequest$outboundSchema;
  /** @deprecated use `CustomMessagesDeleteRequest$Outbound` instead. */
  export type Outbound = CustomMessagesDeleteRequest$Outbound;
}

export function customMessagesDeleteRequestToJSON(
  customMessagesDeleteRequest: CustomMessagesDeleteRequest,
): string {
  return JSON.stringify(
    CustomMessagesDeleteRequest$outboundSchema.parse(
      customMessagesDeleteRequest,
    ),
  );
}

export function customMessagesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomMessagesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomMessagesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomMessagesDeleteRequest' from JSON`,
  );
}
