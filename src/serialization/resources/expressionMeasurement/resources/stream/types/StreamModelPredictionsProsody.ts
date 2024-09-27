/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsProsodyPredictionsItem } from "./StreamModelPredictionsProsodyPredictionsItem";

export const StreamModelPredictionsProsody: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsProsody.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsProsody
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsProsodyPredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsProsody {
    interface Raw {
        predictions?: StreamModelPredictionsProsodyPredictionsItem.Raw[] | null;
    }
}
