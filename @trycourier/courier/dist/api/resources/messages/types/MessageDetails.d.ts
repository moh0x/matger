/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export interface MessageDetails {
    /** A unique identifier associated with the message you wish to retrieve (results from a send). */
    id: string;
    /** The current status of the message. */
    status: Courier.MessageStatus;
    /** A UTC timestamp at which Courier received the message request. Stored as a millisecond representation of the Unix epoch. */
    enqueued: number;
    /** A UTC timestamp at which Courier passed the message to the Integration provider. Stored as a millisecond representation of the Unix epoch. */
    sent: number;
    /** A UTC timestamp at which the Integration provider delivered the message. Stored as a millisecond representation of the Unix epoch. */
    delivered: number;
    /** A UTC timestamp at which the recipient opened a message for the first time. Stored as a millisecond representation of the Unix epoch. */
    opened: number;
    /** A UTC timestamp at which the recipient clicked on a tracked link for the first time. Stored as a millisecond representation of the Unix epoch. */
    clicked: number;
    /** A unique identifier associated with the recipient of the delivered message. */
    recipient: string;
    /** A unique identifier associated with the event of the delivered message. */
    event: string;
    /** A unique identifier associated with the notification of the delivered message. */
    notification: string;
    /** A message describing the error that occurred. */
    error?: string;
    /** The reason for the current status of the message. */
    reason?: Courier.Reason;
}
