/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { TimeInterval } from "./TimeInterval";
import { EmotionScore } from "./EmotionScore";
import { DescriptionsScore } from "./DescriptionsScore";

export const BurstPrediction: core.serialization.ObjectSchema<
    serializers.customModels.BurstPrediction.Raw,
    Hume.customModels.BurstPrediction
> = core.serialization.object({
    time: TimeInterval,
    emotions: core.serialization.list(EmotionScore),
    descriptions: core.serialization.list(DescriptionsScore),
});

export declare namespace BurstPrediction {
    interface Raw {
        time: TimeInterval.Raw;
        emotions: EmotionScore.Raw[];
        descriptions: DescriptionsScore.Raw[];
    }
}
