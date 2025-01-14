/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomMessageRule,
  CustomMessageRule$inboundSchema,
  CustomMessageRule$Outbound,
  CustomMessageRule$outboundSchema,
} from "./custommessagerule.js";

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
   * Rules for time-specific message variants
   */
  rules?: Array<CustomMessageRule> | undefined;
  /**
   * The ID of the custom message
   */
  id: number;
  /**
   * Timestamp of the most recent update to the custom message
   */
  updatedAt: Date;
  /**
   * The number of agents using the custom message
   */
  agentCount?: number | null | undefined;
  /**
   * The email address of the user who most recently updated the custom message
   */
  lastUpdatedBy: string;
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
  rules: z.array(CustomMessageRule$inboundSchema).optional(),
  id: z.number().int(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  agent_count: z.nullable(z.number().int()).optional(),
  last_updated_by: z.string(),
  type: z.string().default("greeting"),
}).transform((v) => {
  return remap$(v, {
    "updated_at": "updatedAt",
    "agent_count": "agentCount",
    "last_updated_by": "lastUpdatedBy",
  });
});

/** @internal */
export type CustomMessageResponse$Outbound = {
  name: string;
  text: string;
  label?: string | null | undefined;
  rules?: Array<CustomMessageRule$Outbound> | undefined;
  id: number;
  updated_at: string;
  agent_count?: number | null | undefined;
  last_updated_by: string;
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
  rules: z.array(CustomMessageRule$outboundSchema).optional(),
  id: z.number().int(),
  updatedAt: z.date().transform(v => v.toISOString()),
  agentCount: z.nullable(z.number().int()).optional(),
  lastUpdatedBy: z.string(),
  type: z.string().default("greeting"),
}).transform((v) => {
  return remap$(v, {
    updatedAt: "updated_at",
    agentCount: "agent_count",
    lastUpdatedBy: "last_updated_by",
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
