/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Agents } from "./agents.js";
import { Channels } from "./channels.js";
import { Conversations } from "./conversations.js";
import { CustomMessages } from "./custommessages.js";
import { Dashboards } from "./dashboards.js";
import { Events } from "./events.js";
import { Organizations } from "./organizations.js";
import { Prompts } from "./prompts.js";
import { Sessions } from "./sessions.js";
import { Tools } from "./tools.js";

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

  private _dashboards?: Dashboards;
  get dashboards(): Dashboards {
    return (this._dashboards ??= new Dashboards(this._options));
  }

  private _events?: Events;
  get events(): Events {
    return (this._events ??= new Events(this._options));
  }

  private _customMessages?: CustomMessages;
  get customMessages(): CustomMessages {
    return (this._customMessages ??= new CustomMessages(this._options));
  }

  private _prompts?: Prompts;
  get prompts(): Prompts {
    return (this._prompts ??= new Prompts(this._options));
  }

  private _sessions?: Sessions;
  get sessions(): Sessions {
    return (this._sessions ??= new Sessions(this._options));
  }

  private _tools?: Tools;
  get tools(): Tools {
    return (this._tools ??= new Tools(this._options));
  }

  private _organizations?: Organizations;
  get organizations(): Organizations {
    return (this._organizations ??= new Organizations(this._options));
  }
}
