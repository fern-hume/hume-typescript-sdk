/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The list of files submitted for analysis.
 */
export interface File_ {
  /** The name of the file. */
  filename?: string;
  /** The content type of the file. */
  contentType?: string;
  /** The MD5 checksum of the file. */
  md5Sum: string;
}
