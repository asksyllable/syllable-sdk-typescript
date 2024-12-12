/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DayOfWeek,
  DayOfWeek$inboundSchema,
  DayOfWeek$outboundSchema,
} from "./dayofweek.js";

export type DaoCustomMessageRule = {
  /**
   * The description of the rule
   */
  description: string;
  /**
   * The start of the time range for the rule in 24-hour format hh:mm (should be null for "all day" cases)
   */
  timeRangeStart?: string | null | undefined;
  /**
   * The end of the time range for the rule in 24-hour format hh:mm (should be null for "all day" cases)
   */
  timeRangeEnd?: string | null | undefined;
  /**
   * The date for the rule in YYYY-MM-DD format
   */
  date?: string | null | undefined;
  /**
   * The days of the week for the rule
   */
  daysOfWeek?: Array<DayOfWeek> | null | undefined;
  /**
   * Whether the rule logic should be inverted (i.e. "not")
   */
  invert: boolean;
  /**
   * Message text associated with the rule
   */
  text: string;
};

/** @internal */
export const DaoCustomMessageRule$inboundSchema: z.ZodType<
  DaoCustomMessageRule,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string(),
  time_range_start: z.nullable(z.string()).optional(),
  time_range_end: z.nullable(z.string()).optional(),
  date: z.nullable(z.string()).optional(),
  days_of_week: z.nullable(z.array(DayOfWeek$inboundSchema)).optional(),
  invert: z.boolean(),
  text: z.string(),
}).transform((v) => {
  return remap$(v, {
    "time_range_start": "timeRangeStart",
    "time_range_end": "timeRangeEnd",
    "days_of_week": "daysOfWeek",
  });
});

/** @internal */
export type DaoCustomMessageRule$Outbound = {
  description: string;
  time_range_start?: string | null | undefined;
  time_range_end?: string | null | undefined;
  date?: string | null | undefined;
  days_of_week?: Array<string> | null | undefined;
  invert: boolean;
  text: string;
};

/** @internal */
export const DaoCustomMessageRule$outboundSchema: z.ZodType<
  DaoCustomMessageRule$Outbound,
  z.ZodTypeDef,
  DaoCustomMessageRule
> = z.object({
  description: z.string(),
  timeRangeStart: z.nullable(z.string()).optional(),
  timeRangeEnd: z.nullable(z.string()).optional(),
  date: z.nullable(z.string()).optional(),
  daysOfWeek: z.nullable(z.array(DayOfWeek$outboundSchema)).optional(),
  invert: z.boolean(),
  text: z.string(),
}).transform((v) => {
  return remap$(v, {
    timeRangeStart: "time_range_start",
    timeRangeEnd: "time_range_end",
    daysOfWeek: "days_of_week",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DaoCustomMessageRule$ {
  /** @deprecated use `DaoCustomMessageRule$inboundSchema` instead. */
  export const inboundSchema = DaoCustomMessageRule$inboundSchema;
  /** @deprecated use `DaoCustomMessageRule$outboundSchema` instead. */
  export const outboundSchema = DaoCustomMessageRule$outboundSchema;
  /** @deprecated use `DaoCustomMessageRule$Outbound` instead. */
  export type Outbound = DaoCustomMessageRule$Outbound;
}

export function daoCustomMessageRuleToJSON(
  daoCustomMessageRule: DaoCustomMessageRule,
): string {
  return JSON.stringify(
    DaoCustomMessageRule$outboundSchema.parse(daoCustomMessageRule),
  );
}

export function daoCustomMessageRuleFromJSON(
  jsonString: string,
): SafeParseResult<DaoCustomMessageRule, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DaoCustomMessageRule$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DaoCustomMessageRule' from JSON`,
  );
}
