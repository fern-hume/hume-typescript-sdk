/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Tools } from "../resources/tools/client/Client";
import { Prompts } from "../resources/prompts/client/Client";
import { Configs } from "../resources/configs/client/Client";
import { Chats } from "../resources/chats/client/Client";

export declare namespace EmpathicVoice {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        accountToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class EmpathicVoice {
    constructor(protected readonly _options: EmpathicVoice.Options = {}) {}

    protected _tools: Tools | undefined;

    public get tools(): Tools {
        return (this._tools ??= new Tools(this._options));
    }

    protected _prompts: Prompts | undefined;

    public get prompts(): Prompts {
        return (this._prompts ??= new Prompts(this._options));
    }

    protected _configs: Configs | undefined;

    public get configs(): Configs {
        return (this._configs ??= new Configs(this._options));
    }

    protected _chats: Chats | undefined;

    public get chats(): Chats {
        return (this._chats ??= new Chats(this._options));
    }
}
