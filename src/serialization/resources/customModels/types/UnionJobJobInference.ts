/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { JobInference } from "./JobInference";

export const UnionJobJobInference: core.serialization.ObjectSchema<
    serializers.customModels.UnionJobJobInference.Raw,
    Hume.customModels.UnionJobJobInference
> = core.serialization.object({}).extend(JobInference);

export declare namespace UnionJobJobInference {
    interface Raw extends JobInference.Raw {}
}
