/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionsSummaryGetById } from "../funcs/sessionsSummaryGetById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Summary extends ClientSDK {
  /**
   * Get Session Summary By Id
   */
  async getById(
    request: operations.SessionSummaryGetByIdRequest,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(sessionsSummaryGetById(
      this,
      request,
      options,
    ));
  }
}
