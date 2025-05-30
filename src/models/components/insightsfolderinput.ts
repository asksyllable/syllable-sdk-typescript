/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Request model to create/update an insight upload folder.
 */
export type InsightsFolderInput = {
  /**
   * Human-readable name of insight folder
   */
  name: string;
  /**
   * optional label assigned to insight folder
   */
  label?: string | null | undefined;
  /**
   * Text description of insight upload folder
   */
  description?: string | null | undefined;
};

/** @internal */
export const InsightsFolderInput$inboundSchema: z.ZodType<
  InsightsFolderInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  label: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
});

/** @internal */
export type InsightsFolderInput$Outbound = {
  name: string;
  label?: string | null | undefined;
  description?: string | null | undefined;
};

/** @internal */
export const InsightsFolderInput$outboundSchema: z.ZodType<
  InsightsFolderInput$Outbound,
  z.ZodTypeDef,
  InsightsFolderInput
> = z.object({
  name: z.string(),
  label: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsightsFolderInput$ {
  /** @deprecated use `InsightsFolderInput$inboundSchema` instead. */
  export const inboundSchema = InsightsFolderInput$inboundSchema;
  /** @deprecated use `InsightsFolderInput$outboundSchema` instead. */
  export const outboundSchema = InsightsFolderInput$outboundSchema;
  /** @deprecated use `InsightsFolderInput$Outbound` instead. */
  export type Outbound = InsightsFolderInput$Outbound;
}

export function insightsFolderInputToJSON(
  insightsFolderInput: InsightsFolderInput,
): string {
  return JSON.stringify(
    InsightsFolderInput$outboundSchema.parse(insightsFolderInput),
  );
}

export function insightsFolderInputFromJSON(
  jsonString: string,
): SafeParseResult<InsightsFolderInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsightsFolderInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsightsFolderInput' from JSON`,
  );
}
