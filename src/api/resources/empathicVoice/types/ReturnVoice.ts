/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A specific voice specification
 */
export interface ReturnVoice {
    /** The provider of the voice to use. Currently, only `HUME_AI` is supported as the voice provider. */
    provider: "HUME_AI";
    /** String with the name of the voice to use. Maximum length of 75 characters. Will be converted to all-uppercase. */
    name?: Hume.empathicVoice.ReturnVoiceName;
}
