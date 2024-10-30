/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatAudioReconstructionStatus } from "./ReturnChatAudioReconstructionStatus";

export const ReturnChatAudioReconstruction: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatAudioReconstruction.Raw,
    Hume.empathicVoice.ReturnChatAudioReconstruction
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    status: ReturnChatAudioReconstructionStatus,
    filename: core.serialization.string().optional(),
    modifiedAt: core.serialization.property("modified_at", core.serialization.number().optional()),
    signedAudioUrl: core.serialization.property("signed_audio_url", core.serialization.string().optional()),
    signedUrlExpirationTimestampMillis: core.serialization.property(
        "signed_url_expiration_timestamp_millis",
        core.serialization.number().optional()
    ),
});

export declare namespace ReturnChatAudioReconstruction {
    interface Raw {
        id: string;
        user_id: string;
        status: ReturnChatAudioReconstructionStatus.Raw;
        filename?: string | null;
        modified_at?: number | null;
        signed_audio_url?: string | null;
        signed_url_expiration_timestamp_millis?: number | null;
    }
}
