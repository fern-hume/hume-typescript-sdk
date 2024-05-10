/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const UserInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.UserInput.Raw,
    Hume.empathicVoice.UserInput
> = core.serialization.object({
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    text: core.serialization.string(),
    type: core.serialization.stringLiteral("user_input"),
});

export declare namespace UserInput {
    interface Raw {
        custom_session_id?: string | null;
        text: string;
        type: "user_input";
    }
}
