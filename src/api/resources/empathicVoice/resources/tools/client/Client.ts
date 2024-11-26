/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Tools {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Tools {
    constructor(protected readonly _options: Tools.Options = {}) {}

    /**
     * Fetches a paginated list of **Tools**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {Hume.empathicVoice.ToolsListToolsRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.listTools({
     *         pageNumber: 0,
     *         pageSize: 2
     *     })
     */
    public async listTools(
        request: Hume.empathicVoice.ToolsListToolsRequest = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnUserDefinedTool | undefined>> {
        const list = async (
            request: Hume.empathicVoice.ToolsListToolsRequest
        ): Promise<Hume.empathicVoice.ReturnPagedUserDefinedTools> => {
            const { pageNumber, pageSize, restrictToMostRecent, name } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (restrictToMostRecent != null) {
                _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
            }
            if (name != null) {
                _queryParams["name"] = name;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    "v0/evi/tools"
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.7",
                    "User-Agent": "hume/0.9.7",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnPagedUserDefinedTools.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.HumeTimeoutError();
                case "unknown":
                    throw new errors.HumeError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<
            Hume.empathicVoice.ReturnPagedUserDefinedTools,
            Hume.empathicVoice.ReturnUserDefinedTool | undefined
        >({
            response: await list(request),
            hasNextPage: (response) => (response?.toolsPage ?? []).length > 0,
            getItems: (response) => response?.toolsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    /**
     * Creates a **Tool** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {Hume.empathicVoice.PostedUserDefinedTool} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.createTool({
     *         name: "get_current_weather",
     *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
     *         versionDescription: "Fetches current weather and uses celsius or fahrenheit based on location of user.",
     *         description: "This tool is for getting the current weather.",
     *         fallbackContent: "Unable to fetch current weather."
     *     })
     */
    public async createTool(
        request: Hume.empathicVoice.PostedUserDefinedTool,
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/tools"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedTool.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.createTool.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a list of a **Tool's** versions.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Hume.empathicVoice.ToolsListToolVersionsRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.listToolVersions("00183a3f-79ba-413d-9f3b-609864268bea")
     */
    public async listToolVersions(
        id: string,
        request: Hume.empathicVoice.ToolsListToolVersionsRequest = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedUserDefinedTools> {
        const { pageNumber, pageSize, restrictToMostRecent } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (restrictToMostRecent != null) {
            _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedUserDefinedTools.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a **Tool** by creating a new version of the **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedUserDefinedToolVersion} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.createToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", {
     *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\", \"kelvin\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
     *         versionDescription: "Fetches current weather and uses celsius, fahrenheit, or kelvin based on location of user.",
     *         fallbackContent: "Unable to fetch current weather.",
     *         description: "This tool is for getting the current weather."
     *     })
     */
    public async createToolVersion(
        id: string,
        request: Hume.empathicVoice.PostedUserDefinedToolVersion,
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedToolVersion.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.createToolVersion.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a **Tool** and its versions.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.deleteTool("00183a3f-79ba-413d-9f3b-609864268bea")
     */
    public async deleteTool(id: string, requestOptions?: Tools.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the name of a **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedUserDefinedToolName} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.updateToolName("00183a3f-79ba-413d-9f3b-609864268bea", {
     *         name: "get_current_temperature"
     *     })
     */
    public async updateToolName(
        id: string,
        request: Hume.empathicVoice.PostedUserDefinedToolName,
        requestOptions?: Tools.RequestOptions
    ): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedToolName.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            responseType: "text",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a specified version of a **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {number} version - Version number for a Tool.
     *
     *                           Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.getToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", 1)
     */
    public async getToolVersion(
        id: string,
        version: number,
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.getToolVersion.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a specified version of a **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {number} version - Version number for a Tool.
     *
     *                           Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.deleteToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", 1)
     */
    public async deleteToolVersion(id: string, version: number, requestOptions?: Tools.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the description of a specified **Tool** version.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {number} version - Version number for a Tool.
     *
     *                           Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     * @param {Hume.empathicVoice.PostedUserDefinedToolVersionDescription} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.updateToolDescription("00183a3f-79ba-413d-9f3b-609864268bea", 1, {
     *         versionDescription: "Fetches current temperature, precipitation, wind speed, AQI, and other weather conditions. Uses Celsius, Fahrenheit, or kelvin depending on user's region."
     *     })
     */
    public async updateToolDescription(
        id: string,
        version: number,
        request: Hume.empathicVoice.PostedUserDefinedToolVersionDescription = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.7",
                "User-Agent": "hume/0.9.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedToolVersionDescription.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.updateToolDescription.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}
