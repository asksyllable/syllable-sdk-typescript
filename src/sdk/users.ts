/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersUsersDeleteAccount } from "../funcs/usersUsersDeleteAccount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";

export class Users extends ClientSDK {
  /**
   * Request Removal Of This Account
   */
  async usersDeleteAccount(
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(usersUsersDeleteAccount(
      this,
      options,
    ));
  }
}
