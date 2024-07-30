/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TimeRange } from "../../../types/TimeRange";
import { EmotionEmbedding } from "../../../types/EmotionEmbedding";
import { EmotionEmbeddingItem } from "../../../types/EmotionEmbeddingItem";

export const StreamBurstProsodyPredictionsItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.StreamBurstProsodyPredictionsItem.Raw,
    Hume.expressionMeasurement.StreamBurstProsodyPredictionsItem
> = core.serialization.object({
    time: TimeRange.optional(),
    emotions: EmotionEmbedding.optional(),
});

export declare namespace StreamBurstProsodyPredictionsItem {
    interface Raw {
        time?: TimeRange.Raw | null;
        emotions?: EmotionEmbedding.Raw | null;
    }
}
