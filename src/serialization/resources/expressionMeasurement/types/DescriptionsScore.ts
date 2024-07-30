/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const DescriptionsScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.DescriptionsScore.Raw,
    Hume.expressionMeasurement.DescriptionsScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.string(),
});

export declare namespace DescriptionsScore {
    interface Raw {
        name: string;
        score: string;
    }
}
