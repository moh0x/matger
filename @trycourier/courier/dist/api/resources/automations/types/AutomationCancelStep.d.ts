/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export interface AutomationCancelStep extends Courier.AutomationStep {
    action: "cancel";
    cancelation_token?: string;
}
