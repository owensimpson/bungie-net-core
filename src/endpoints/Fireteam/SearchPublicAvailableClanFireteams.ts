/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { FireteamDateRange } from '../../enums/Fireteam/FireteamDateRange';
import { FireteamPlatform } from '../../enums/Fireteam/FireteamPlatform';
import { FireteamSlotSearch } from '../../enums/Fireteam/FireteamSlotSearch';
import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { SearchResultOfFireteamSummary } from '../../models/SearchResultOfFireteamSummary';

/**
 * Gets a listing of all public fireteams starting now with open slots. Caller is
 * not checked for join criteria so caching is maximized.
 * @see {@link https://bungie-net.github.io/#Fireteam.SearchPublicAvailableClanFireteams}
 */
export async function searchPublicAvailableClanFireteams(
  params: {
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
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfFireteamSummary>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Fireteam/Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`
  );
  params.excludeImmediate !== undefined &&
    url.searchParams.set('excludeImmediate', String(params.excludeImmediate));
  params.langFilter !== undefined &&
    url.searchParams.set('langFilter', String(params.langFilter));
  return client.fetch({ method: 'GET', url });
}
