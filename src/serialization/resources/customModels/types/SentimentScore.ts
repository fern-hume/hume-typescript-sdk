/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const SentimentScore: core.serialization.ObjectSchema<
    serializers.customModels.SentimentScore.Raw,
    Hume.customModels.SentimentScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.string(),
});

export declare namespace SentimentScore {
    interface Raw {
        name: string;
        score: string;
    }
}
