/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnWebhookEventType } from "./ReturnWebhookEventType";

export const ReturnWebhookSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnWebhookSpec.Raw,
    Hume.empathicVoice.ReturnWebhookSpec
> = core.serialization.object({
    url: core.serialization.string(),
    events: core.serialization.list(ReturnWebhookEventType),
});

export declare namespace ReturnWebhookSpec {
    interface Raw {
        url: string;
        events: ReturnWebhookEventType.Raw[];
    }
}
