/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A custom voice specifications posted to the server
 */
export interface PostedCustomVoice {
    /** String with the name of the voice to use. Maximum length of 75 characters. Will be converted to all-uppercase. */
    name: string;
    /** The voice the custom voice is based off of. */
    baseVoice: string;
    /** The speech rate multiplier for this custom voice. */
    speechRateMultiplier?: number;
    /** The name of the parameter model used to define which attributes are used by `parameters`. */
    parameterModel: string;
    /** Voice specification for a Config. */
    parameters?: Record<string, number | undefined>;
}
