/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export interface MessageChannelEmailOverride {
    attachments?: Courier.Attachment[];
    bcc?: string;
    brand?: Courier.Brand;
    cc?: string;
    from?: string;
    html?: string;
    reply_to?: string;
    subject?: string;
    text?: string;
    tracking: Courier.TrackingOverride;
}
