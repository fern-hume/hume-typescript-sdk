/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from '../../../../../../environments';
import * as core from '../../../../../../core';
import * as Hume from '../../../../../index';
import urlJoin from 'url-join';
import * as serializers from '../../../../../../serialization/index';
import * as errors from '../../../../../../errors/index';

export declare namespace Prompts {
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

export class Prompts {
  constructor(protected readonly _options: Prompts.Options = {}) {}

  /**
   * @param {Hume.empathicVoice.PromptsListPromptsRequest} request
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.listPrompts()
   */
  public async listPrompts(
    request: Hume.empathicVoice.PromptsListPromptsRequest = {},
    requestOptions?: Prompts.RequestOptions,
  ): Promise<Hume.empathicVoice.ReturnPagedPrompts> {
    const { pageNumber, pageSize, restrictToMostRecent, name } = request;
    const _queryParams: Record<string, string | string[] | object | object[]> =
      {};
    if (pageNumber != null) {
      _queryParams['page_number'] = pageNumber.toString();
    }

    if (pageSize != null) {
      _queryParams['page_size'] = pageSize.toString();
    }

    if (restrictToMostRecent != null) {
      _queryParams['restrict_to_most_recent'] = restrictToMostRecent.toString();
    }

    if (name != null) {
      _queryParams['name'] = name;
    }

    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        'v0/evi/prompts',
      ),
      method: 'GET',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      queryParameters: _queryParams,
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return serializers.empathicVoice.ReturnPagedPrompts.parseOrThrow(
        _response.body,
        {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        },
      );
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {Hume.empathicVoice.PostedPrompt} request
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.createPrompt({
   *         name: "name",
   *         text: "text"
   *     })
   */
  public async createPrompt(
    request: Hume.empathicVoice.PostedPrompt,
    requestOptions?: Prompts.RequestOptions,
  ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        'v0/evi/prompts',
      ),
      method: 'POST',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      body: serializers.empathicVoice.PostedPrompt.jsonOrThrow(request, {
        unrecognizedObjectKeys: 'strip',
      }),
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return serializers.empathicVoice.prompts.createPrompt.Response.parseOrThrow(
        _response.body,
        {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        },
      );
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {Hume.empathicVoice.PromptsListPromptVersionsRequest} request
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.listPromptVersions("id")
   */
  public async listPromptVersions(
    id: string,
    request: Hume.empathicVoice.PromptsListPromptVersionsRequest = {},
    requestOptions?: Prompts.RequestOptions,
  ): Promise<Hume.empathicVoice.ReturnPagedPrompts> {
    const { pageNumber, pageSize, restrictToMostRecent } = request;
    const _queryParams: Record<string, string | string[] | object | object[]> =
      {};
    if (pageNumber != null) {
      _queryParams['page_number'] = pageNumber.toString();
    }

    if (pageSize != null) {
      _queryParams['page_size'] = pageSize.toString();
    }

    if (restrictToMostRecent != null) {
      _queryParams['restrict_to_most_recent'] = restrictToMostRecent.toString();
    }

    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}`,
      ),
      method: 'GET',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      queryParameters: _queryParams,
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return serializers.empathicVoice.ReturnPagedPrompts.parseOrThrow(
        _response.body,
        {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        },
      );
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {Hume.empathicVoice.PostedPromptVersion} request
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.createPromptVerison("id", {
   *         text: "text"
   *     })
   */
  public async createPromptVerison(
    id: string,
    request: Hume.empathicVoice.PostedPromptVersion,
    requestOptions?: Prompts.RequestOptions,
  ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}`,
      ),
      method: 'POST',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      body: serializers.empathicVoice.PostedPromptVersion.jsonOrThrow(request, {
        unrecognizedObjectKeys: 'strip',
      }),
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return serializers.empathicVoice.prompts.createPromptVerison.Response.parseOrThrow(
        _response.body,
        {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        },
      );
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.deletePrompt("id")
   */
  public async deletePrompt(
    id: string,
    requestOptions?: Prompts.RequestOptions,
  ): Promise<void> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}`,
      ),
      method: 'DELETE',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return;
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {Hume.empathicVoice.PostedPromptName} request
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.updatePromptName("string", {
   *         name: "string"
   *     })
   */
  public async updatePromptName(
    id: string,
    request: Hume.empathicVoice.PostedPromptName,
    requestOptions?: Prompts.RequestOptions,
  ): Promise<string> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}`,
      ),
      method: 'PATCH',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      body: serializers.empathicVoice.PostedPromptName.jsonOrThrow(request, {
        unrecognizedObjectKeys: 'strip',
      }),
      responseType: 'text',
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return _response.body as string;
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {number} version - Version number for a Prompt.
   *
   *                           Prompts, as well as Configs and Tools, are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
   *
   *                           Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.getPromptVersion("id", 1)
   */
  public async getPromptVersion(
    id: string,
    version: number,
    requestOptions?: Prompts.RequestOptions,
  ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`,
      ),
      method: 'GET',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return serializers.empathicVoice.prompts.getPromptVersion.Response.parseOrThrow(
        _response.body,
        {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        },
      );
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {number} version - Version number for a Prompt.
   *
   *                           Prompts, as well as Configs and Tools, are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
   *
   *                           Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.deletePromptVersion("id", 1)
   */
  public async deletePromptVersion(
    id: string,
    version: number,
    requestOptions?: Prompts.RequestOptions,
  ): Promise<void> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`,
      ),
      method: 'DELETE',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return;
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  /**
   * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
   * @param {number} version - Version number for a Prompt.
   *
   *                           Prompts, as well as Configs and Tools, are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
   *
   *                           Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
   * @param {Hume.empathicVoice.PostedPromptVersionDescription} request
   * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.empathicVoice.prompts.updatePromptDescription("id", 1)
   */
  public async updatePromptDescription(
    id: string,
    version: number,
    request: Hume.empathicVoice.PostedPromptVersionDescription = {},
    requestOptions?: Prompts.RequestOptions,
  ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
    const _response = await (this._options.fetcher ?? core.fetcher)({
      url: urlJoin(
        (await core.Supplier.get(this._options.environment)) ??
          environments.HumeEnvironment.Production,
        `v0/evi/prompts/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`,
      ),
      method: 'PATCH',
      headers: {
        'X-Fern-Language': 'JavaScript',
        'X-Fern-SDK-Name': 'hume',
        'X-Fern-SDK-Version': '0.8.5',
        'X-Fern-Runtime': core.RUNTIME.type,
        'X-Fern-Runtime-Version': core.RUNTIME.version,
        ...(await this._getCustomAuthorizationHeaders()),
      },
      contentType: 'application/json',
      body: serializers.empathicVoice.PostedPromptVersionDescription.jsonOrThrow(
        request,
        {
          unrecognizedObjectKeys: 'strip',
        },
      ),
      timeoutMs:
        requestOptions?.timeoutInSeconds != null
          ? requestOptions.timeoutInSeconds * 1000
          : 60000,
      maxRetries: requestOptions?.maxRetries,
      abortSignal: requestOptions?.abortSignal,
    });
    if (_response.ok) {
      return serializers.empathicVoice.prompts.updatePromptDescription.Response.parseOrThrow(
        _response.body,
        {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        },
      );
    }

    if (_response.error.reason === 'status-code') {
      throw new errors.HumeError({
        statusCode: _response.error.statusCode,
        body: _response.error.body,
      });
    }

    switch (_response.error.reason) {
      case 'non-json':
        throw new errors.HumeError({
          statusCode: _response.error.statusCode,
          body: _response.error.rawBody,
        });
      case 'timeout':
        throw new errors.HumeTimeoutError();
      case 'unknown':
        throw new errors.HumeError({
          message: _response.error.errorMessage,
        });
    }
  }

  protected async _getCustomAuthorizationHeaders() {
    const apiKeyValue = await core.Supplier.get(this._options.apiKey);
    return { 'X-Hume-Api-Key': apiKeyValue };
  }
}
