/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsDelete } from "../funcs/channelsDelete.js";
import { channelsList } from "../funcs/channelsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Targets } from "./targets.js";

export class Channels extends ClientSDK {
  private _targets?: Targets;
  get targets(): Targets {
    return (this._targets ??= new Targets(this._options));
  }

  /**
   * Get Channels
   */
  async list(
    request: operations.ChannelsListRequest,
    options?: RequestOptions,
  ): Promise<components.ChannelListResponse> {
    return unwrapAsync(channelsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Channel
   *
   * @remarks
   * Delete channel by ID
   */
  async delete(
    request: operations.ChannelsDeleteRequest,
    options?: RequestOptions,
  ): Promise<components.ChannelTarget> {
    return unwrapAsync(channelsDelete(
      this,
      request,
      options,
    ));
  }
}
