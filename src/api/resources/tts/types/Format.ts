/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Specifies the output audio file format.
 */
export type Format = Hume.tts.Format.Mp3 | Hume.tts.Format.Pcm | Hume.tts.Format.Wav;

export declare namespace Format {
    interface Mp3 extends Hume.tts.FormatMp3 {
        type: "mp3";
    }

    interface Pcm extends Hume.tts.FormatPcm {
        type: "pcm";
    }

    interface Wav extends Hume.tts.FormatWav {
        type: "wav";
    }
}
