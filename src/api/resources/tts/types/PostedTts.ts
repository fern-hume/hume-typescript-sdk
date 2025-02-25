/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface PostedTts {
    /** Utterances to use as context for generating consistent speech style and prosody across multiple requests. These will not be converted to speech output. */
    context?: Hume.tts.PostedContext;
    /** Specifies the output audio file format. */
    format?: Hume.tts.Format;
    /** Number of generations of the audio to produce. */
    numGenerations?: number;
    /** Utterances to be converted to speech output. */
    utterances: Hume.tts.PostedUtterance[];
}
