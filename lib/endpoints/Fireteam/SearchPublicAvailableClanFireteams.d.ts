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
import { FireteamDateRange } from '../../schemas/index.js';
import { FireteamPlatform } from '../../schemas/index.js';
import { FireteamSlotSearch } from '../../schemas/index.js';
import { SearchResultOfFireteamSummary } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Fireteam.SearchPublicAvailableClanFireteams} */
export declare type SearchPublicAvailableClanFireteamsParams = {
    /** The activity type to filter by. */
    activityType: number;
    /** The date range to grab available fireteams. */
    dateRange: FireteamDateRange;
    /**
     * If you wish the result to exclude immediate fireteams, set this to true.
     * Immediate-only can be forced using the dateRange enum.
    */
    excludeImmediate?: boolean;
    /** An optional language filter. */
    langFilter?: string;
    /** Zero based page */
    page: number;
    /** The platform filter. */
    platform: FireteamPlatform;
    /** Filters based on available slots */
    slotFilter: FireteamSlotSearch;
};
/**
 * Gets a listing of all public fireteams starting now with open slots. Caller is
 * not checked for join criteria so caching is maximized.
 * @see {@link https://bungie-net.github.io/#Fireteam.SearchPublicAvailableClanFireteams}
*/
export declare function searchPublicAvailableClanFireteams(this: InstancedImport | AccessTokenObject | void, params: SearchPublicAvailableClanFireteamsParams): Promise<BungieNetResponse<SearchResultOfFireteamSummary>>;
