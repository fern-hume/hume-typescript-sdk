/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatGroupPagedAudioReconstructionsPaginationDirection } from "./ReturnChatGroupPagedAudioReconstructionsPaginationDirection";
import { ReturnChatAudioReconstruction } from "./ReturnChatAudioReconstruction";

export const ReturnChatGroupPagedAudioReconstructions: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatGroupPagedAudioReconstructions.Raw,
    Hume.empathicVoice.ReturnChatGroupPagedAudioReconstructions
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    numChats: core.serialization.property("num_chats", core.serialization.number()),
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    paginationDirection: core.serialization.property(
        "pagination_direction",
        ReturnChatGroupPagedAudioReconstructionsPaginationDirection
    ),
    audioReconstructionsPage: core.serialization.property(
        "audio_reconstructions_page",
        core.serialization.list(ReturnChatAudioReconstruction)
    ),
});

export declare namespace ReturnChatGroupPagedAudioReconstructions {
    interface Raw {
        id: string;
        user_id: string;
        num_chats: number;
        page_number: number;
        page_size: number;
        total_pages: number;
        pagination_direction: ReturnChatGroupPagedAudioReconstructionsPaginationDirection.Raw;
        audio_reconstructions_page: ReturnChatAudioReconstruction.Raw[];
    }
}
