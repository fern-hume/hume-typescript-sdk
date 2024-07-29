/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface EmbeddingGenerationJob {
    /** The ID associated with this job. */
    jobId: string;
    userId: string;
    request: Hume.expressionMeasurement.EmbeddingGenerationBaseRequest;
    state: Hume.expressionMeasurement.StateEmbeddingGeneration;
}
