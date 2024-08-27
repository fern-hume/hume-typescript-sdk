/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TranscriptionMetadata } from "./TranscriptionMetadata";
import { GroupedPredictionsNerPrediction } from "./GroupedPredictionsNerPrediction";

export const PredictionsOptionalTranscriptionMetadataNerPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.PredictionsOptionalTranscriptionMetadataNerPrediction.Raw,
    Hume.expressionMeasurement.PredictionsOptionalTranscriptionMetadataNerPrediction
> = core.serialization.object({
    metadata: TranscriptionMetadata.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsNerPrediction)
    ),
});

export declare namespace PredictionsOptionalTranscriptionMetadataNerPrediction {
    interface Raw {
        metadata?: TranscriptionMetadata.Raw | null;
        grouped_predictions: GroupedPredictionsNerPrediction.Raw[];
    }
}
