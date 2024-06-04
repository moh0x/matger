/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * @example
 *     {
 *         cursor: "string",
 *         pattern: "string"
 *     }
 */
export interface GetAllListsRequest {
    /**
     * A unique identifier that allows for fetching the next page of lists.
     */
    cursor?: string;
    /**
     * "A pattern used to filter the list items returned. Pattern types supported: exact match on `list_id` or a pattern of one or more pattern parts. you may replace a part with either: `*` to match all parts in that position, or `**` to signify a wildcard `endsWith` pattern match."
     */
    pattern?: string;
}
