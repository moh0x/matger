/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface AudienceFilter {
    /** Send to users only if they are member of the account */
    operator: "MEMBER_OF";
    path: "account_id";
    value: string;
}
