/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedLanguageModelModelProvider } from "./PostedLanguageModelModelProvider";
import { PostedLanguageModelModelResource } from "./PostedLanguageModelModelResource";

export const PostedLanguageModel: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedLanguageModel.Raw,
    Hume.empathicVoice.PostedLanguageModel
> = core.serialization.object({
    modelProvider: core.serialization.property("model_provider", PostedLanguageModelModelProvider.optional()),
    modelResource: core.serialization.property("model_resource", PostedLanguageModelModelResource.optional()),
    temperature: core.serialization.number().optional(),
});

export declare namespace PostedLanguageModel {
    interface Raw {
        model_provider?: PostedLanguageModelModelProvider.Raw | null;
        model_resource?: PostedLanguageModelModelResource.Raw | null;
        temperature?: number | null;
    }
}
