/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { outboundCampaignsCreate } from "../funcs/outboundCampaignsCreate.js";
import { outboundCampaignsDelete } from "../funcs/outboundCampaignsDelete.js";
import { outboundCampaignsGetById } from "../funcs/outboundCampaignsGetById.js";
import { outboundCampaignsList } from "../funcs/outboundCampaignsList.js";
import { outboundCampaignsUpdate } from "../funcs/outboundCampaignsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Campaigns extends ClientSDK {
  /**
   * List Outbound Communication Campaigns
   */
  async list(
    request: operations.OutboundCampaignListRequest,
    options?: RequestOptions,
  ): Promise<components.ListResponseOutboundCampaign> {
    return unwrapAsync(outboundCampaignsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Outbound Communication Campaign
   */
  async create(
    request: components.OutboundCampaignInput,
    options?: RequestOptions,
  ): Promise<components.OutboundCampaign> {
    return unwrapAsync(outboundCampaignsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Outbound Communication Campaign
   */
  async getById(
    request: operations.OutboundCampaignGetByIdRequest,
    options?: RequestOptions,
  ): Promise<components.OutboundCampaign> {
    return unwrapAsync(outboundCampaignsGetById(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Outbound Communication Campaign
   */
  async update(
    request: operations.OutboundCampaignUpdateRequest,
    options?: RequestOptions,
  ): Promise<components.OutboundCampaign> {
    return unwrapAsync(outboundCampaignsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Outbound Communication Campaign
   */
  async delete(
    request: operations.OutboundCampaignDeleteRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(outboundCampaignsDelete(
      this,
      request,
      options,
    ));
  }
}
