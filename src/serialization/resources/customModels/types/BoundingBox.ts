/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const BoundingBox: core.serialization.ObjectSchema<
    serializers.customModels.BoundingBox.Raw,
    Hume.customModels.BoundingBox
> = core.serialization.object({
    x: core.serialization.number(),
    y: core.serialization.number(),
    w: core.serialization.number(),
    h: core.serialization.number(),
});

export declare namespace BoundingBox {
    interface Raw {
        x: number;
        y: number;
        w: number;
        h: number;
    }
}
