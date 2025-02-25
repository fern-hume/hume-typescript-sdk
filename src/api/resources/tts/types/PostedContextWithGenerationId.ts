/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PostedContextWithGenerationId {
    /** The ID of a prior TTS generation to use as context for generating consistent speech style and prosody across multiple requests. Including context may increase audio generation times. */
    generationId: string;
}
