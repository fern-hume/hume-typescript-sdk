/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { AssistantEnd } from "./AssistantEnd";
import { AssistantMessage } from "./AssistantMessage";
import { ChatMetadata } from "./ChatMetadata";
import { WebSocketError } from "./WebSocketError";
import { UserInterruption } from "./UserInterruption";
import { UserMessage } from "./UserMessage";
import { ToolCallMessage } from "./ToolCallMessage";
import { ToolResponseMessage } from "./ToolResponseMessage";
import { ToolErrorMessage } from "./ToolErrorMessage";

export const JsonMessage: core.serialization.Schema<
    serializers.empathicVoice.JsonMessage.Raw,
    Hume.empathicVoice.JsonMessage
> = core.serialization.undiscriminatedUnion([
    AssistantEnd,
    AssistantMessage,
    ChatMetadata,
    WebSocketError,
    UserInterruption,
    UserMessage,
    ToolCallMessage,
    ToolResponseMessage,
    ToolErrorMessage,
]);

export declare namespace JsonMessage {
    type Raw =
        | AssistantEnd.Raw
        | AssistantMessage.Raw
        | ChatMetadata.Raw
        | WebSocketError.Raw
        | UserInterruption.Raw
        | UserMessage.Raw
        | ToolCallMessage.Raw
        | ToolResponseMessage.Raw
        | ToolErrorMessage.Raw;
}
