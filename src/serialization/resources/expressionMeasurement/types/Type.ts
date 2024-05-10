/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const Type: core.serialization.Schema<
    serializers.expressionMeasurement.Type.Raw,
    Hume.expressionMeasurement.Type
> = core.serialization.enum_(["EMBEDDING_GENERATION", "INFERENCE", "TL_INFERENCE", "TRAINING"]);

export declare namespace Type {
    type Raw = "EMBEDDING_GENERATION" | "INFERENCE" | "TL_INFERENCE" | "TRAINING";
}
