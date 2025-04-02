/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { v1Create } from "../funcs/v1Create.js";
import { v1List } from "../funcs/v1List.js";
import { v1OutboundCampaignCreat } from "../funcs/v1OutboundCampaignCreat.js";
import { v1OutboundCampaignLis } from "../funcs/v1OutboundCampaignLis.js";
import { v1PostGetDashboard } from "../funcs/v1PostGetDashboard.js";
import { v1PostListDashboard } from "../funcs/v1PostListDashboard.js";
import { v1PostSessionEventsDashboard } from "../funcs/v1PostSessionEventsDashboard.js";
import { v1PostSessionsDashboard } from "../funcs/v1PostSessionsDashboard.js";
import { v1PostSessionSummaryDashboard } from "../funcs/v1PostSessionSummaryDashboard.js";
import { v1PostSessionTransfersDashboard } from "../funcs/v1PostSessionTransfersDashboard.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class V1 extends ClientSDK {
  /**
   * Post List Dashboards
   *
   * @remarks
   * METHOD: POST
   * URL: /dashboard/list
   * ARGUMENTS: None
   * RETURNS: List of dashboards
   */
  async postListDashboard(
    request: operations.PostListDashboardRequest,
    options?: RequestOptions,
  ): Promise<components.ListResponseDashboardResponse> {
    return unwrapAsync(v1PostListDashboard(
      this,
      request,
      options,
    ));
  }

  /**
   * Post Fetch Info
   *
   * @remarks
   * METHOD: POST
   * URL: /dashboard/fetch_info
   * ARGUMENTS: None
   * RETURNS: Dashboard info for embedding
   */
  async postGetDashboard(
    request: operations.PostGetDashboardRequest,
    options?: RequestOptions,
  ): Promise<components.DashboardTokenResponse> {
    return unwrapAsync(v1PostGetDashboard(
      this,
      request,
      options,
    ));
  }

  /**
   * Post Session Events
   *
   * @remarks
   * METHOD: POST
   * URL: /dashboard/session_events
   * ARGUMENTS: None
   * RETURNS: Dashboard info for embedding
   * DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async postSessionEventsDashboard(
    options?: RequestOptions,
  ): Promise<components.Dashboard> {
    return unwrapAsync(v1PostSessionEventsDashboard(
      this,
      options,
    ));
  }

  /**
   * Post Session Summary
   *
   * @remarks
   * METHOD: POST
   * URL: /dashboard/session_summary
   * ARGUMENTS: None
   * RETURNS: Dashboard info for embedding
   * DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async postSessionSummaryDashboard(
    options?: RequestOptions,
  ): Promise<components.Dashboard> {
    return unwrapAsync(v1PostSessionSummaryDashboard(
      this,
      options,
    ));
  }

  /**
   * Post Session Transfers
   *
   * @remarks
   * METHOD: POST
   * URL: /dashboard/session_transfers
   * ARGUMENTS: None
   * RETURNS: Dashboard info for embedding
   * DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async postSessionTransfersDashboard(
    options?: RequestOptions,
  ): Promise<components.Dashboard> {
    return unwrapAsync(v1PostSessionTransfersDashboard(
      this,
      options,
    ));
  }

  /**
   * Post Sessions
   *
   * @remarks
   * METHOD: POST
   * URL: /dashboard/sessions
   * ARGUMENTS: None
   * RETURNS: Dashboard info for embedding
   * DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async postSessionsDashboard(
    options?: RequestOptions,
  ): Promise<components.Dashboard> {
    return unwrapAsync(v1PostSessionsDashboard(
      this,
      options,
    ));
  }

  /**
   * List Outbound Communication Batches
   */
  async list(
    request: operations.OutboundBatchListRequest,
    options?: RequestOptions,
  ): Promise<Array<components.CommunicationBatch>> {
    return unwrapAsync(v1List(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Outbound Communication Batch
   */
  async create(
    request: components.CommunicationBatchInput,
    options?: RequestOptions,
  ): Promise<components.CommunicationBatch> {
    return unwrapAsync(v1Create(
      this,
      request,
      options,
    ));
  }

  /**
   * List Outbound Communication Campaigns
   */
  async outboundCampaignLis(
    request: operations.OutboundCampaignLisRequest,
    options?: RequestOptions,
  ): Promise<Array<components.OutboundCampaign>> {
    return unwrapAsync(v1OutboundCampaignLis(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Outbound Communication Campaign
   */
  async outboundCampaignCreat(
    request: components.OutboundCampaignInput,
    options?: RequestOptions,
  ): Promise<components.OutboundCampaign> {
    return unwrapAsync(v1OutboundCampaignCreat(
      this,
      request,
      options,
    ));
  }
}
