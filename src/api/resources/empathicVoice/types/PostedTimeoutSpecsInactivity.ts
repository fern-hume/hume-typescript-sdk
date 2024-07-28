/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the duration of user inactivity (in seconds) after which the EVI WebSocket connection will be automatically disconnected. Default is 600 seconds (10 minutes).
 *
 * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
 */
export interface PostedTimeoutSpecsInactivity {
  /**
   * Boolean indicating if this timeout is enabled.
   *
   * If set to false, EVI will not timeout due to a specified duration of user inactivity being reached. However, the conversation will eventually disconnect after 1,800 seconds (30 minutes), which is the maximum WebSocket duration limit for EVI.
   */
  enabled: boolean;
  /** Duration in seconds for the timeout (e.g. 600 seconds represents 10 minutes). */
  durationSecs?: number;
}
