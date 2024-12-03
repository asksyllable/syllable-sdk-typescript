/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DirectoryMemberGetByIdRequest = {
  memberId: number;
};

/** @internal */
export const DirectoryMemberGetByIdRequest$inboundSchema: z.ZodType<
  DirectoryMemberGetByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  member_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "member_id": "memberId",
  });
});

/** @internal */
export type DirectoryMemberGetByIdRequest$Outbound = {
  member_id: number;
};

/** @internal */
export const DirectoryMemberGetByIdRequest$outboundSchema: z.ZodType<
  DirectoryMemberGetByIdRequest$Outbound,
  z.ZodTypeDef,
  DirectoryMemberGetByIdRequest
> = z.object({
  memberId: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    memberId: "member_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectoryMemberGetByIdRequest$ {
  /** @deprecated use `DirectoryMemberGetByIdRequest$inboundSchema` instead. */
  export const inboundSchema = DirectoryMemberGetByIdRequest$inboundSchema;
  /** @deprecated use `DirectoryMemberGetByIdRequest$outboundSchema` instead. */
  export const outboundSchema = DirectoryMemberGetByIdRequest$outboundSchema;
  /** @deprecated use `DirectoryMemberGetByIdRequest$Outbound` instead. */
  export type Outbound = DirectoryMemberGetByIdRequest$Outbound;
}

export function directoryMemberGetByIdRequestToJSON(
  directoryMemberGetByIdRequest: DirectoryMemberGetByIdRequest,
): string {
  return JSON.stringify(
    DirectoryMemberGetByIdRequest$outboundSchema.parse(
      directoryMemberGetByIdRequest,
    ),
  );
}

export function directoryMemberGetByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<DirectoryMemberGetByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectoryMemberGetByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectoryMemberGetByIdRequest' from JSON`,
  );
}
