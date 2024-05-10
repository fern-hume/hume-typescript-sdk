/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const BoundingBox: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.BoundingBox.Raw,
    Hume.expressionMeasurement.BoundingBox
> = core.serialization.object({
    x: core.serialization.number().optional(),
    y: core.serialization.number().optional(),
    w: core.serialization.number().optional(),
    h: core.serialization.number().optional(),
});

export declare namespace BoundingBox {
    interface Raw {
        x?: number | null;
        y?: number | null;
        w?: number | null;
        h?: number | null;
    }
}
