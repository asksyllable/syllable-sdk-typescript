/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ChannelProperties = {
  Id: "id",
  Name: "name",
  ChannelService: "channel_service",
  SupportedModes: "supported_modes",
} as const;
export type ChannelProperties = ClosedEnum<typeof ChannelProperties>;

/** @internal */
export const ChannelProperties$inboundSchema: z.ZodNativeEnum<
  typeof ChannelProperties
> = z.nativeEnum(ChannelProperties);

/** @internal */
export const ChannelProperties$outboundSchema: z.ZodNativeEnum<
  typeof ChannelProperties
> = ChannelProperties$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelProperties$ {
  /** @deprecated use `ChannelProperties$inboundSchema` instead. */
  export const inboundSchema = ChannelProperties$inboundSchema;
  /** @deprecated use `ChannelProperties$outboundSchema` instead. */
  export const outboundSchema = ChannelProperties$outboundSchema;
}
