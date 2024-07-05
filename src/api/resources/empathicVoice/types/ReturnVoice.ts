/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific voice specification
 */
export interface ReturnVoice {
    /** The provider of the voice to use. Based on the enum VoiceProvider. */
    provider: string;
    /** String with the name of the voice to use. Maximum length of 75 characters. Will be converted to all-uppercase. */
    name?: string;
}
