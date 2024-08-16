/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const RegistryFileDetail: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.RegistryFileDetail.Raw,
    Hume.expressionMeasurement.RegistryFileDetail
> = core.serialization.object({
    fileId: core.serialization.property("file_id", core.serialization.string()),
    fileUrl: core.serialization.property("file_url", core.serialization.string()),
});

export declare namespace RegistryFileDetail {
    interface Raw {
        file_id: string;
        file_url: string;
    }
}
