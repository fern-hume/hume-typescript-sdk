/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { JobTraining } from "./JobTraining";

export const UnionJobJobTraining: core.serialization.ObjectSchema<
    serializers.customModels.UnionJobJobTraining.Raw,
    Hume.customModels.UnionJobJobTraining
> = core.serialization.object({}).extend(JobTraining);

export declare namespace UnionJobJobTraining {
    interface Raw extends JobTraining.Raw {}
}
