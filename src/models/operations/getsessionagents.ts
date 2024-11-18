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
export type GetSessionAgentsResponseGetSessionAgents = {};

/** @internal */
export const GetSessionAgentsResponseGetSessionAgents$inboundSchema: z.ZodType<
  GetSessionAgentsResponseGetSessionAgents,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type GetSessionAgentsResponseGetSessionAgents$Outbound = {};

/** @internal */
export const GetSessionAgentsResponseGetSessionAgents$outboundSchema: z.ZodType<
  GetSessionAgentsResponseGetSessionAgents$Outbound,
  z.ZodTypeDef,
  GetSessionAgentsResponseGetSessionAgents
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionAgentsResponseGetSessionAgents$ {
  /** @deprecated use `GetSessionAgentsResponseGetSessionAgents$inboundSchema` instead. */
  export const inboundSchema =
    GetSessionAgentsResponseGetSessionAgents$inboundSchema;
  /** @deprecated use `GetSessionAgentsResponseGetSessionAgents$outboundSchema` instead. */
  export const outboundSchema =
    GetSessionAgentsResponseGetSessionAgents$outboundSchema;
  /** @deprecated use `GetSessionAgentsResponseGetSessionAgents$Outbound` instead. */
  export type Outbound = GetSessionAgentsResponseGetSessionAgents$Outbound;
}

export function getSessionAgentsResponseGetSessionAgentsToJSON(
  getSessionAgentsResponseGetSessionAgents:
    GetSessionAgentsResponseGetSessionAgents,
): string {
  return JSON.stringify(
    GetSessionAgentsResponseGetSessionAgents$outboundSchema.parse(
      getSessionAgentsResponseGetSessionAgents,
    ),
  );
}

export function getSessionAgentsResponseGetSessionAgentsFromJSON(
  jsonString: string,
): SafeParseResult<
  GetSessionAgentsResponseGetSessionAgents,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetSessionAgentsResponseGetSessionAgents$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetSessionAgentsResponseGetSessionAgents' from JSON`,
  );
}
