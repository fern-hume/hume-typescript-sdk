/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface InferenceSourcePredictResult {
    source: Hume.customModels.Source;
    results?: Hume.customModels.InferenceResults;
    /** An error message. */
    error?: string;
}
