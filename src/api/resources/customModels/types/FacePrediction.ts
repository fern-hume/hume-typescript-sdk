/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface FacePrediction {
    /** Frame number */
    frame: number;
    /** Time in seconds when face detection occurred. */
    time: number;
    /** The predicted probability that a detected face was actually a face. */
    prob: number;
    box: Hume.customModels.BoundingBox;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.customModels.EmotionScore[];
    /** FACS 2.0 features and their scores. */
    facs?: Hume.customModels.FacsScore[];
    /** Modality-specific descriptive features and their scores. */
    descriptions?: Hume.customModels.DescriptionsScore[];
}
