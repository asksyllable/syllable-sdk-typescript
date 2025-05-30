/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionsTranscriptGetById } from "../funcs/sessionsTranscriptGetById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Transcript extends ClientSDK {
  /**
   * Get Session Transcript By Id
   */
  async getById(
    request: operations.SessionTranscriptGetByIdRequest,
    options?: RequestOptions,
  ): Promise<components.SessionTranscriptionResponse> {
    return unwrapAsync(sessionsTranscriptGetById(
      this,
      request,
      options,
    ));
  }
}
