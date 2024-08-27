/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsLanguagePredictionsItem } from "./StreamModelPredictionsLanguagePredictionsItem";

export const StreamModelPredictionsLanguage: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.StreamModelPredictionsLanguage.Raw,
    Hume.expressionMeasurement.StreamModelPredictionsLanguage
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsLanguagePredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsLanguage {
    interface Raw {
        predictions?: StreamModelPredictionsLanguagePredictionsItem.Raw[] | null;
    }
}
