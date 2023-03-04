/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { ForumTopicsCategoryFiltersEnum } from '../../schemas/index.js';
import { ForumTopicsQuickDateEnum } from '../../schemas/index.js';
import { ForumTopicsSortEnum } from '../../schemas/index.js';
import { PostSearchResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Forum.GetCoreTopicsPaged} */
export declare type GetCoreTopicsPagedParams = {
    /** The category filter. */
    categoryFilter: ForumTopicsCategoryFiltersEnum;
    /**
     * Comma seperated list of locales posts must match to return in the result list.
     * Default 'en'
     */
    locales?: string;
    /** Zero base page */
    page: number;
    /** The date filter. */
    quickDate: ForumTopicsQuickDateEnum;
    /** The sort mode. */
    sort: ForumTopicsSortEnum;
};
/**
 * Gets a listing of all topics marked as part of the core group.
 * @see {@link https://bungie-net.github.io/#Forum.GetCoreTopicsPaged}
 */
export declare function getCoreTopicsPaged(
    this: InstancedImport | AccessTokenObject | void,
    params: GetCoreTopicsPagedParams
): Promise<BungieNetResponse<PostSearchResponse>>;
