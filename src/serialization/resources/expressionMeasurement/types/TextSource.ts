/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const TextSource: core.serialization.Schema<
  serializers.expressionMeasurement.TextSource.Raw,
  Hume.expressionMeasurement.TextSource
> = core.serialization.record(
  core.serialization.string(),
  core.serialization.unknown(),
);

export declare namespace TextSource {
  type Raw = Record<string, unknown>;
}
