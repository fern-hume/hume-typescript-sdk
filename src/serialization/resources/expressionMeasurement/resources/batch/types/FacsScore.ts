/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const FacsScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.FacsScore.Raw,
    Hume.expressionMeasurement.batch.FacsScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace FacsScore {
    interface Raw {
        name: string;
        score: number;
    }
}
