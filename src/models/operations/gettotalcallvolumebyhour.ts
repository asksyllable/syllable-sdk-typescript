/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Successful Response
 */
export type GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour = {};

/** @internal */
export const GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$inboundSchema:
  z.ZodType<
    GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$Outbound =
  {};

/** @internal */
export const GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$outboundSchema:
  z.ZodType<
    GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$Outbound,
    z.ZodTypeDef,
    GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$ {
  /** @deprecated use `GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$inboundSchema` instead. */
  export const inboundSchema =
    GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$inboundSchema;
  /** @deprecated use `GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$outboundSchema` instead. */
  export const outboundSchema =
    GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$outboundSchema;
  /** @deprecated use `GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$Outbound` instead. */
  export type Outbound =
    GetTotalCallVolumeByHourResponseGetTotalCallVolumeByHour$Outbound;
}
