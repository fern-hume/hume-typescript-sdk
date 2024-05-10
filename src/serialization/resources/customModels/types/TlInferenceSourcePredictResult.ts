/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Source } from "./Source";
import { TlInferenceResults } from "./TlInferenceResults";

export const TlInferenceSourcePredictResult: core.serialization.ObjectSchema<
    serializers.customModels.TlInferenceSourcePredictResult.Raw,
    Hume.customModels.TlInferenceSourcePredictResult
> = core.serialization.object({
    source: Source,
    results: TlInferenceResults.optional(),
    error: core.serialization.string().optional(),
});

export declare namespace TlInferenceSourcePredictResult {
    interface Raw {
        source: Source.Raw;
        results?: TlInferenceResults.Raw | null;
        error?: string | null;
    }
}
