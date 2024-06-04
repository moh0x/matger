/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export interface MessageMetadata {
    /** An arbitrary string to tracks the event that generated this request (e.g. 'signup'). */
    event?: string;
    /** An array of up to 9 tags you wish to associate with this request (and corresponding messages) for later analysis. Individual tags cannot be more than 30 characters in length. */
    tags?: string[];
    /** Identify the campaign that refers traffic to a specific website, and attributes the browser's website session. */
    utm?: Courier.Utm;
    /** A unique ID used to correlate this request to processing on your servers. Note: Courier does not verify the uniqueness of this ID. */
    trace_id?: string;
}
