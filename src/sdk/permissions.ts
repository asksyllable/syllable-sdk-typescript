/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { permissionsList } from "../funcs/permissionsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Permissions extends ClientSDK {
  /**
   * List Permissions
   *
   * @remarks
   * Get all available permissions in the system.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.PermissionGroupResponse>> {
    return unwrapAsync(permissionsList(
      this,
      options,
    ));
  }
}
