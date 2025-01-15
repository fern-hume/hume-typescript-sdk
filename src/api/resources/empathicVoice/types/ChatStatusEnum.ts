/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ChatStatusEnum =
    | "ACTIVE"
    | "USER_ENDED"
    | "USER_TIMEOUT"
    | "INACTIVITY_TIMEOUT"
    | "MAX_DURATION_TIMEOUT"
    | "ERROR";

export const ChatStatusEnum = {
    Active: "ACTIVE",
    UserEnded: "USER_ENDED",
    UserTimeout: "USER_TIMEOUT",
    InactivityTimeout: "INACTIVITY_TIMEOUT",
    MaxDurationTimeout: "MAX_DURATION_TIMEOUT",
    Error: "ERROR",
} as const;
