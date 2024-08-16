/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Name of the built-in tool to use. Hume supports the following built-in tools:
 *
 * - **web_search:** enables EVI to search the web for up-to-date information when applicable.
 * - **hang_up:** closes the WebSocket connection when appropriate (e.g., after detecting a farewell in the conversation).
 *
 * For more information, see our guide on [using built-in tools](/docs/empathic-voice-interface-evi/tool-use#using-built-in-tools).
 */
export type PostedBuiltinToolName = "web_search" | "hang_up";

export const PostedBuiltinToolName = {
    WebSearch: "web_search",
    HangUp: "hang_up",
} as const;
