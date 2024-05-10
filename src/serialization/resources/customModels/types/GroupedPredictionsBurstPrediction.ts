/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { BurstPrediction } from "./BurstPrediction";

export const GroupedPredictionsBurstPrediction: core.serialization.ObjectSchema<
    serializers.customModels.GroupedPredictionsBurstPrediction.Raw,
    Hume.customModels.GroupedPredictionsBurstPrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(BurstPrediction),
});

export declare namespace GroupedPredictionsBurstPrediction {
    interface Raw {
        id: string;
        predictions: BurstPrediction.Raw[];
    }
}
