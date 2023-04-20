/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { SearchResultOfTrendingEntry } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategory} */
export declare type GetTrendingCategoryParams = {
    /** The ID of the category for whom you want additional results. */
    categoryId: string;
    /** The page # of results to return. */
    pageNumber: number;
};
/**
 * Returns paginated lists of trending items for a category.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategory}
*/
export declare function getTrendingCategory(this: AccessTokenObject | void, params: GetTrendingCategoryParams): Promise<BungieNetResponse<SearchResultOfTrendingEntry>>;
