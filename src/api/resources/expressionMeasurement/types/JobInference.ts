/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../index';

export interface JobInference {
  /** The ID associated with this job. */
  jobId: string;
  /** The unique identifier for the user who initiated the job. */
  userId: string;
  /** The request that initiated the job. */
  request: Hume.expressionMeasurement.InferenceRequest;
  /** The current state of the job. */
  state: Hume.expressionMeasurement.StateInference;
}
