/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Represents a webhook event job to be queued to the webhook delivery service.
 * Internal fields like 'url' and 'is_active' are excluded from serialization.
 */
export interface WebhookBaseEvent {
    eventName: Hume.empathicVoice.WebhookEventType;
    chatGroupId: string;
    chatId: string;
    configId?: string;
}
