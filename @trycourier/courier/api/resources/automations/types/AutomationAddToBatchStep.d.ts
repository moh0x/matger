/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Courier from "../../../index";
/**
 * @example
 *     {
 *         action: "add-to-batch",
 *         wait_period: "PT5M",
 *         max_wait_period: "PT1H",
 *         retain: {
 *             type: Courier.AutomationAddToBatchRetainType.Highest,
 *             count: 10,
 *             sort_key: "refs.data.my_custom_scoring"
 *         },
 *         scope: Courier.AutomationAddToBatchScope.User,
 *         category_key: "refs.data.status"
 *     }
 */
export interface AutomationAddToBatchStep extends Courier.AutomationStep {
    action: "add-to-batch";
    /** Defines the period of inactivity before the batch is released. Specified as an [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations) */
    wait_period: string;
    /** Defines the maximum wait time before the batch should be released. Must be less than wait period. Maximum of 60 days. Specified as an [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations) */
    max_wait_period: string;
    /** If specified, the batch will release as soon as this number is reached */
    max_items?: Courier.AutomationAddToBatchMaxItemsType;
    retain: Courier.AutomationAddToBatchRetain;
    /**
     * Determine the scope of the batching. If user, chosen in this order: recipient, profile.user_id, data.user_id, data.userId.
     * If dynamic, then specify where the batch_key or a reference to the batch_key
     */
    scope?: Courier.AutomationAddToBatchScope;
    /** If using scope=dynamic, provide the key or a reference (e.g., refs.data.batch_key) */
    batch_key?: string;
    batch_id?: string;
    /** Defines the field of the data object the batch is set to when complete. Defaults to `batch` */
    category_key?: string;
}
