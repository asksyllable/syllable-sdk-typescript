/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Agents } from "./agents.js";
import { Channels } from "./channels.js";
import { Conversations } from "./conversations.js";
import { CustomMessages } from "./custommessages.js";
import { Dashboards } from "./dashboards.js";
import { DataSources } from "./datasources.js";
import { Events } from "./events.js";
import { Incidents } from "./incidents.js";
import { Insights } from "./insights.js";
import { LanguageGroups } from "./languagegroups.js";
import { Organizations } from "./organizations.js";
import { Outbound } from "./outbound.js";
import { Permissions } from "./permissions.js";
import { Prompts } from "./prompts.js";
import { Roles } from "./roles.js";
import { Services } from "./services.js";
import { SessionDebug } from "./sessiondebug.js";
import { SessionLabels } from "./sessionlabels.js";
import { Sessions } from "./sessions.js";
import { Takeouts } from "./takeouts.js";
import { Tools } from "./tools.js";
import { Users } from "./users.js";
import { V1 } from "./v1.js";

export class SyllableSDK extends ClientSDK {
  private _agents?: Agents;
  get agents(): Agents {
    return (this._agents ??= new Agents(this._options));
  }

  private _channels?: Channels;
  get channels(): Channels {
    return (this._channels ??= new Channels(this._options));
  }

  private _conversations?: Conversations;
  get conversations(): Conversations {
    return (this._conversations ??= new Conversations(this._options));
  }

  private _dataSources?: DataSources;
  get dataSources(): DataSources {
    return (this._dataSources ??= new DataSources(this._options));
  }

  private _events?: Events;
  get events(): Events {
    return (this._events ??= new Events(this._options));
  }

  private _incidents?: Incidents;
  get incidents(): Incidents {
    return (this._incidents ??= new Incidents(this._options));
  }

  private _insights?: Insights;
  get insights(): Insights {
    return (this._insights ??= new Insights(this._options));
  }

  private _customMessages?: CustomMessages;
  get customMessages(): CustomMessages {
    return (this._customMessages ??= new CustomMessages(this._options));
  }

  private _permissions?: Permissions;
  get permissions(): Permissions {
    return (this._permissions ??= new Permissions(this._options));
  }

  private _prompts?: Prompts;
  get prompts(): Prompts {
    return (this._prompts ??= new Prompts(this._options));
  }

  private _roles?: Roles;
  get roles(): Roles {
    return (this._roles ??= new Roles(this._options));
  }

  private _services?: Services;
  get services(): Services {
    return (this._services ??= new Services(this._options));
  }

  private _sessionLabels?: SessionLabels;
  get sessionLabels(): SessionLabels {
    return (this._sessionLabels ??= new SessionLabels(this._options));
  }

  private _sessions?: Sessions;
  get sessions(): Sessions {
    return (this._sessions ??= new Sessions(this._options));
  }

  private _sessionDebug?: SessionDebug;
  get sessionDebug(): SessionDebug {
    return (this._sessionDebug ??= new SessionDebug(this._options));
  }

  private _tools?: Tools;
  get tools(): Tools {
    return (this._tools ??= new Tools(this._options));
  }

  private _dashboards?: Dashboards;
  get dashboards(): Dashboards {
    return (this._dashboards ??= new Dashboards(this._options));
  }

  private _organizations?: Organizations;
  get organizations(): Organizations {
    return (this._organizations ??= new Organizations(this._options));
  }

  private _outbound?: Outbound;
  get outbound(): Outbound {
    return (this._outbound ??= new Outbound(this._options));
  }

  private _languageGroups?: LanguageGroups;
  get languageGroups(): LanguageGroups {
    return (this._languageGroups ??= new LanguageGroups(this._options));
  }

  private _takeouts?: Takeouts;
  get takeouts(): Takeouts {
    return (this._takeouts ??= new Takeouts(this._options));
  }

  private _users?: Users;
  get users(): Users {
    return (this._users ??= new Users(this._options));
  }

  private _v1?: V1;
  get v1(): V1 {
    return (this._v1 ??= new V1(this._options));
  }
}
