/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const ReturnEventMessageSpec: core.serialization.ObjectSchema<
  serializers.empathicVoice.ReturnEventMessageSpec.Raw,
  Hume.empathicVoice.ReturnEventMessageSpec
> = core.serialization.object({
  enabled: core.serialization.boolean(),
  text: core.serialization.string().optional(),
});

export declare namespace ReturnEventMessageSpec {
  interface Raw {
    enabled: boolean;
    text?: string | null;
  }
}
