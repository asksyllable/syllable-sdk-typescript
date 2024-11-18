/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Successful Response
 */
export type GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay = {};

/** @internal */
export const GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$inboundSchema:
  z.ZodType<
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$Outbound =
  {};

/** @internal */
export const GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$outboundSchema:
  z.ZodType<
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$Outbound,
    z.ZodTypeDef,
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$ {
  /** @deprecated use `GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$inboundSchema` instead. */
  export const inboundSchema =
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$inboundSchema;
  /** @deprecated use `GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$outboundSchema` instead. */
  export const outboundSchema =
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$outboundSchema;
  /** @deprecated use `GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$Outbound` instead. */
  export type Outbound =
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$Outbound;
}

export function getMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDayToJSON(
  getMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay:
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay,
): string {
  return JSON.stringify(
    GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$outboundSchema
      .parse(getMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay),
  );
}

export function getMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDayFromJSON(
  jsonString: string,
): SafeParseResult<
  GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetMonthlyCallVolumeByDayResponseGetMonthlyCallVolumeByDay' from JSON`,
  );
}
