/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../index';

export interface AudioConfiguration {
  /** Encoding format of the audio input, such as `linear16`. */
  encoding: Hume.empathicVoice.Encoding;
  /** Number of audio channels. */
  channels: number;
  /** Audio sample rate. Number of samples per second in the audio input, measured in Hertz. */
  sampleRate: number;
}
