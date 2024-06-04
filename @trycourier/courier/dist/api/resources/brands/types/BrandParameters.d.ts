/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export interface BrandParameters {
    id?: string;
    /** The name of the brand. */
    name: string;
    settings: Courier.BrandSettings;
    snippets?: Courier.BrandSnippets;
}
