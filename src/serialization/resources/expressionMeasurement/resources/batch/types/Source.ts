/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SourceUrl } from "./SourceUrl";
import { SourceFile } from "./SourceFile";
import { SourceTextSource } from "./SourceTextSource";

export const Source: core.serialization.Schema<
    serializers.expressionMeasurement.Source.Raw,
    Hume.expressionMeasurement.Source
> = core.serialization
    .union("type", {
        url: SourceUrl,
        file: SourceFile,
        text: SourceTextSource,
    })
    .transform<Hume.expressionMeasurement.Source>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Source {
    type Raw = Source.Url | Source.File | Source.Text;

    interface Url extends SourceUrl.Raw {
        type: "url";
    }

    interface File extends SourceFile.Raw {
        type: "file";
    }

    interface Text extends SourceTextSource.Raw {
        type: "text";
    }
}
