/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export declare type InboundBulkMessageV2 = 
/**
 * Describes the content of the message in a way that will
 * work for email, push, chat, or any channel.
 *  */
Courier.InboundBulkTemplateMessage
/**
 * A template for a type of message that can be sent more than once.
 * For example, you might create an "Appointment Reminder" Notification or
 * “Reset Password” Notifications.
 *  */
 | Courier.InboundBulkContentMessage;
