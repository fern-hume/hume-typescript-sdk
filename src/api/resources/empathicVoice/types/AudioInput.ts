/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the input is audio.
 */
export interface AudioInput {
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** Base64 encoded audio input. */
    data: string;
    /** The type of message sent through the socket; for an Audio Input message, this must be 'audio_input'. */
    type: "audio_input";
}
