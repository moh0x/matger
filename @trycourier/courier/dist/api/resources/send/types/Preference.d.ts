/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
export interface Preference {
    status: Courier.PreferenceStatus;
    rules?: Courier.Rule[];
    channel_preferences?: Courier.ChannelPreference[];
    source?: Courier.ChannelSource;
}
