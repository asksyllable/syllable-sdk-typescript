/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { agentsCreate } from "../funcs/agentsCreate.js";
import { agentsDelete } from "../funcs/agentsDelete.js";
import { agentsGetById } from "../funcs/agentsGetById.js";
import { agentsList } from "../funcs/agentsList.js";
import { agentsUpdate } from "../funcs/agentsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Test } from "./test.js";

export class Agents extends ClientSDK {
  private _test?: Test;
  get test(): Test {
    return (this._test ??= new Test(this._options));
  }

  /**
   * Agent List
   *
   * @remarks
   * List the existing agents
   */
  async list(
    request: operations.AgentListRequest,
    options?: RequestOptions,
  ): Promise<components.ListResponseAgent> {
    return unwrapAsync(agentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Agent
   *
   * @remarks
   * Create a new agent
   */
  async create(
    request: components.AgentCreate,
    options?: RequestOptions,
  ): Promise<components.Agent> {
    return unwrapAsync(agentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Agent
   *
   * @remarks
   * Update an existing agent
   */
  async update(
    request: components.Agent,
    options?: RequestOptions,
  ): Promise<components.Agent> {
    return unwrapAsync(agentsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Agent By Id
   *
   * @remarks
   * Get an agent by ID.
   */
  async getById(
    request: operations.AgentGetByIdRequest,
    options?: RequestOptions,
  ): Promise<components.Agent> {
    return unwrapAsync(agentsGetById(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Agent
   */
  async delete(
    request: operations.AgentDeleteRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(agentsDelete(
      this,
      request,
      options,
    ));
  }
}
