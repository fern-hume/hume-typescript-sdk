/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific tool version returned from the server
 */
export interface ReturnUserDefinedTool {
    /** Type of Tool. Values from the ToolType enum. */
    toolType: string;
    /** Identifier for a Tool. Formatted as a UUID. */
    id: string;
    /** Version number for a Tool. Version numbers should be integers. The combination of configId and version number is unique. */
    version: number;
    /** Indicates whether this tool is using a fixed version number or auto-updating to the latest version. Values from the VersionType enum. */
    versionType: string;
    /** Description that is appended to a specific version of a Tool. */
    versionDescription?: string;
    /** Name applied to all versions of a particular Tool. */
    name: string;
    /** The timestamp when the first version of this tool was created. */
    createdOn: number;
    /** The timestamp when this version of the tool was created. */
    modifiedOn: number;
    /** Text to use if the tool fails to generate content. */
    fallbackContent?: string;
    /** Text describing what the tool does. */
    description?: string;
    /** Stringified JSON defining the parameters used by this version of the Tool. */
    parameters: string;
}
