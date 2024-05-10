/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Source } from "./Source";
import { InferenceResults } from "./InferenceResults";

export const InferenceSourcePredictResult: core.serialization.ObjectSchema<
    serializers.customModels.InferenceSourcePredictResult.Raw,
    Hume.customModels.InferenceSourcePredictResult
> = core.serialization.object({
    source: Source,
    results: InferenceResults.optional(),
    error: core.serialization.string().optional(),
});

export declare namespace InferenceSourcePredictResult {
    interface Raw {
        source: Source.Raw;
        results?: InferenceResults.Raw | null;
        error?: string | null;
    }
}
