/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolAuthType,
  ToolAuthType$inboundSchema,
  ToolAuthType$outboundSchema,
} from "./toolauthtype.js";

export type ServiceUpdateRequestAuthValues = {};

/**
 * Request model to update an existing service.
 */
export type ServiceUpdateRequest = {
  /**
   * The name of the service
   */
  name: string;
  /**
   * The description of the service
   */
  description: string;
  /**
   * The type of authentication to use for the service's tools
   */
  authType?: ToolAuthType | null | undefined;
  /**
   * The values to use for the authentication. Should contain "username" and "password" keys if auth type is basic, "token" key if auth type is bearer, or arbitrary header keys if auth type is custom_headers. On an update, leave a value for a given key null and the value in the database will not be updated. (If a key is omitted entirely, any existing value for that key will be removed.)
   */
  authValues?: ServiceUpdateRequestAuthValues | null | undefined;
  /**
   * The internal ID of the service
   */
  id: number;
  /**
   * Free text providing comment about what was updated
   */
  lastUpdatedComments?: string | null | undefined;
};

/** @internal */
export const ServiceUpdateRequestAuthValues$inboundSchema: z.ZodType<
  ServiceUpdateRequestAuthValues,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ServiceUpdateRequestAuthValues$Outbound = {};

/** @internal */
export const ServiceUpdateRequestAuthValues$outboundSchema: z.ZodType<
  ServiceUpdateRequestAuthValues$Outbound,
  z.ZodTypeDef,
  ServiceUpdateRequestAuthValues
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceUpdateRequestAuthValues$ {
  /** @deprecated use `ServiceUpdateRequestAuthValues$inboundSchema` instead. */
  export const inboundSchema = ServiceUpdateRequestAuthValues$inboundSchema;
  /** @deprecated use `ServiceUpdateRequestAuthValues$outboundSchema` instead. */
  export const outboundSchema = ServiceUpdateRequestAuthValues$outboundSchema;
  /** @deprecated use `ServiceUpdateRequestAuthValues$Outbound` instead. */
  export type Outbound = ServiceUpdateRequestAuthValues$Outbound;
}

export function serviceUpdateRequestAuthValuesToJSON(
  serviceUpdateRequestAuthValues: ServiceUpdateRequestAuthValues,
): string {
  return JSON.stringify(
    ServiceUpdateRequestAuthValues$outboundSchema.parse(
      serviceUpdateRequestAuthValues,
    ),
  );
}

export function serviceUpdateRequestAuthValuesFromJSON(
  jsonString: string,
): SafeParseResult<ServiceUpdateRequestAuthValues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ServiceUpdateRequestAuthValues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ServiceUpdateRequestAuthValues' from JSON`,
  );
}

/** @internal */
export const ServiceUpdateRequest$inboundSchema: z.ZodType<
  ServiceUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string(),
  auth_type: z.nullable(ToolAuthType$inboundSchema).optional(),
  auth_values: z.nullable(
    z.lazy(() => ServiceUpdateRequestAuthValues$inboundSchema),
  ).optional(),
  id: z.number().int(),
  last_updated_comments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "auth_type": "authType",
    "auth_values": "authValues",
    "last_updated_comments": "lastUpdatedComments",
  });
});

/** @internal */
export type ServiceUpdateRequest$Outbound = {
  name: string;
  description: string;
  auth_type?: string | null | undefined;
  auth_values?: ServiceUpdateRequestAuthValues$Outbound | null | undefined;
  id: number;
  last_updated_comments?: string | null | undefined;
};

/** @internal */
export const ServiceUpdateRequest$outboundSchema: z.ZodType<
  ServiceUpdateRequest$Outbound,
  z.ZodTypeDef,
  ServiceUpdateRequest
> = z.object({
  name: z.string(),
  description: z.string(),
  authType: z.nullable(ToolAuthType$outboundSchema).optional(),
  authValues: z.nullable(
    z.lazy(() => ServiceUpdateRequestAuthValues$outboundSchema),
  ).optional(),
  id: z.number().int(),
  lastUpdatedComments: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    authType: "auth_type",
    authValues: "auth_values",
    lastUpdatedComments: "last_updated_comments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceUpdateRequest$ {
  /** @deprecated use `ServiceUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = ServiceUpdateRequest$inboundSchema;
  /** @deprecated use `ServiceUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = ServiceUpdateRequest$outboundSchema;
  /** @deprecated use `ServiceUpdateRequest$Outbound` instead. */
  export type Outbound = ServiceUpdateRequest$Outbound;
}

export function serviceUpdateRequestToJSON(
  serviceUpdateRequest: ServiceUpdateRequest,
): string {
  return JSON.stringify(
    ServiceUpdateRequest$outboundSchema.parse(serviceUpdateRequest),
  );
}

export function serviceUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<ServiceUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ServiceUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ServiceUpdateRequest' from JSON`,
  );
}
