/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const DatasetVersionId: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.DatasetVersionId.Raw,
    Hume.expressionMeasurement.batch.DatasetVersionId
> = core.serialization.object({
    versionId: core.serialization.property("version_id", core.serialization.string()),
});

export declare namespace DatasetVersionId {
    interface Raw {
        version_id: string;
    }
}
