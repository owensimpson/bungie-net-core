/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { TrendingEntryType } from '../../schemas';
import { TrendingDetail } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Trending.GetTrendingEntryDetail} */
export declare type GetTrendingEntryDetailParams = {
    /** The identifier for the entity to be returned. */
    identifier: string;
    /** The type of entity to be returned. */
    trendingEntryType: TrendingEntryType;
};
/**
 * Returns the detailed results for a specific trending entry. Note that trending
 * entries are uniquely identified by a combination of *both* the TrendingEntryType
 * *and* the identifier: the identifier alone is not guaranteed to be globally
 * unique.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingEntryDetail}
*/
export declare function getTrendingEntryDetail(this: AccessTokenObject | void, params: GetTrendingEntryDetailParams): Promise<BungieNetResponse<TrendingDetail>>;
