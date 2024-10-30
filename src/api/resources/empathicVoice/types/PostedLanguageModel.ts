/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A LanguageModel to be posted to the server
 */
export interface PostedLanguageModel {
    /** The provider of the supplemental language model. */
    modelProvider?: Hume.empathicVoice.PostedLanguageModelModelProvider;
    /** String that specifies the language model to use with `model_provider`. */
    modelResource?: Hume.empathicVoice.PostedLanguageModelModelResource;
    /**
     * The model temperature, with values between 0 to 1 (inclusive).
     *
     * Controls the randomness of the LLM’s output, with values closer to 0 yielding focused, deterministic responses and values closer to 1 producing more creative, diverse responses.
     */
    temperature?: number;
}
