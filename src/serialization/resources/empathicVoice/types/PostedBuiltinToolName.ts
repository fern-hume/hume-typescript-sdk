/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedBuiltinToolName: core.serialization.Schema<
    serializers.empathicVoice.PostedBuiltinToolName.Raw,
    Hume.empathicVoice.PostedBuiltinToolName
> = core.serialization.enum_(["web_search", "hang_up"]);

export declare namespace PostedBuiltinToolName {
    type Raw = "web_search" | "hang_up";
}
