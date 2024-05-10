/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export type StateEmbeddingGeneration =
    | Hume.customModels.StateEmbeddingGeneration.Queued
    | Hume.customModels.StateEmbeddingGeneration.InProgress
    | Hume.customModels.StateEmbeddingGeneration.Completed
    | Hume.customModels.StateEmbeddingGeneration.Failed;

export declare namespace StateEmbeddingGeneration {
    interface Queued extends Hume.customModels.StateEmbeddingGenerationQueued {
        status: "QUEUED";
    }

    interface InProgress extends Hume.customModels.StateEmbeddingGenerationInProgress {
        status: "IN_PROGRESS";
    }

    interface Completed extends Hume.customModels.StateEmbeddingGenerationCompletedEmbeddingGeneration {
        status: "COMPLETED";
    }

    interface Failed extends Hume.customModels.StateEmbeddingGenerationFailed {
        status: "FAILED";
    }
}
