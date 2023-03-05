/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { FireteamDateRange } from '../../schemas';
import { FireteamPlatform } from '../../schemas';
import { FireteamPublicSearchOption } from '../../schemas';
import { FireteamSlotSearch } from '../../schemas';
import { SearchResultOfFireteamSummary } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams} */
export declare type GetAvailableClanFireteamsParams = {
    /** The activity type to filter by. */
    activityType: number;
    /** The date range to grab available fireteams. */
    dateRange: FireteamDateRange;
    /**
     * If you wish the result to exclude immediate fireteams, set this to true.
     * Immediate-only can be forced using the dateRange enum.
     */
    excludeImmediate?: boolean;
    /** The group id of the clan. */
    groupId: string;
    /** An optional language filter. */
    langFilter?: string;
    /** Zero based page */
    page: number;
    /** The platform filter. */
    platform: FireteamPlatform;
    /** Determines public/private filtering. */
    publicOnly: FireteamPublicSearchOption;
    /** Filters based on available slots */
    slotFilter: FireteamSlotSearch;
};
/**
 * Gets a listing of all of this clan's fireteams that are have available slots.
 * Caller is not checked for join criteria so caching is maximized.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams}
 */
export declare function getAvailableClanFireteams(
    this: InstancedImport | AccessTokenObject | void,
    params: GetAvailableClanFireteamsParams
): Promise<BungieNetResponse<SearchResultOfFireteamSummary>>;
