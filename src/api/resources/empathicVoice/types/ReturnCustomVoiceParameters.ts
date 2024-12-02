/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The specified attributes of a Custom Voice. If a parameter's value is `0` (default), it will not be included in the response.
 */
export interface ReturnCustomVoiceParameters {
    /**
     * The perceived tonality of the voice, reflecting characteristics typically associated with masculinity and femininity.
     *
     * The default value is `0`, with a minimum of `-100` (more masculine) and a maximum of `100` (more feminine). A value of `0` leaves this parameter unchanged from the base voice.
     */
    gender?: number;
    /**
     * The perceived firmness of the voice, ranging between whiny and bold.
     *
     * The default value is `0`, with a minimum of `-100` (whiny) and a maximum of `100` (bold). A value of `0` leaves this parameter unchanged from the base voice.
     */
    assertiveness?: number;
    /**
     * The perceived density of the voice, ranging between deflated and buoyant.
     *
     * The default value is `0`, with a minimum of `-100` (deflated) and a maximum of `100` (buoyant). A value of `0` leaves this parameter unchanged from the base voice.
     */
    buoyancy?: number;
    /**
     * The perceived assuredness of the voice, ranging between shy and confident.
     *
     * The default value is `0`, with a minimum of `-100` (shy) and a maximum of `100` (confident). A value of `0` leaves this parameter unchanged from the base voice.
     */
    confidence?: number;
    /**
     * The perceived excitement within the voice, ranging between calm and enthusiastic.
     *
     * The default value is `0`, with a minimum of `-100` (calm) and a maximum of `100` (enthusiastic). A value of `0` leaves this parameter unchanged from the base voice.
     */
    enthusiasm?: number;
    /**
     * The perceived openness of the voice, ranging between clear and nasal.
     *
     * The default value is `0`, with a minimum of `-100` (clear) and a maximum of `100` (nasal). A value of `0` leaves this parameter unchanged from the base voice.
     */
    nasality?: number;
    /**
     * The perceived stress within the voice, ranging between tense and relaxed.
     *
     * The default value is `0`, with a minimum of `-100` (tense) and a maximum of `100` (relaxed). A value of `0` leaves this parameter unchanged from the base voice.
     */
    relaxedness?: number;
    /**
     * The perceived texture of the voice, ranging between smooth and staccato.
     *
     * The default value is `0`, with a minimum of `-100` (smooth) and a maximum of `100` (staccato). A value of `0` leaves this parameter unchanged from the base voice.
     */
    smoothness?: number;
    /**
     * The perceived liveliness behind the voice, ranging between tepid and vigorous.
     *
     * The default value is `0`, with a minimum of `-100` (tepid) and a maximum of `100` (vigorous). A value of `0` leaves this parameter unchanged from the base voice.
     */
    tepidity?: number;
    /**
     * The perceived containment of the voice, ranging between tight and breathy.
     *
     * The default value is `0`, with a minimum of `-100` (tight) and a maximum of `100` (breathy). A value of `0` leaves this parameter unchanged from the base voice.
     */
    tightness?: number;
}
