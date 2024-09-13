/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedConfigPromptSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedConfigPromptSpec.Raw,
    Hume.empathicVoice.PostedConfigPromptSpec
> = core.serialization.object({
    id: core.serialization.string().optional(),
    version: core.serialization.number().optional(),
    text: core.serialization.string().optional(),
});

export declare namespace PostedConfigPromptSpec {
    interface Raw {
        id?: string | null;
        version?: number | null;
        text?: string | null;
    }
}
