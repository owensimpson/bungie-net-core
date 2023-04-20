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
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { FireteamDateRange } from '../../schemas';
import { FireteamPlatform } from '../../schemas';
import { FireteamPublicSearchOption } from '../../schemas';
import { FireteamSlotSearch } from '../../schemas';
import { SearchResultOfFireteamSummary } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams} */
export type GetAvailableClanFireteamsParams = {
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
export async function getAvailableClanFireteams(
  this: AccessTokenObject | void,
  params: GetAvailableClanFireteamsParams
): Promise<BungieNetResponse<SearchResultOfFireteamSummary>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<SearchResultOfFireteamSummary>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
      params: {
        excludeImmediate: params.excludeImmediate,
        langFilter: params.langFilter
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
