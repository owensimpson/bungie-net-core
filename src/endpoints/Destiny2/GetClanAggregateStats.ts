/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
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
import { DestinyClanAggregateStat } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetClanAggregateStats} */
export type GetClanAggregateStatsParams = {
  /** Group ID of the clan whose leaderboards you wish to fetch. */
  groupId: string;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
};

/**
 * Gets aggregated stats for a clan using the same categories as the clan
 * leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough
 * edges. The schema is in final form, but there may be bugs that prevent desirable
 * operation.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanAggregateStats}
 */
export async function getClanAggregateStats(
  this: AccessTokenObject | void,
  params: GetClanAggregateStatsParams
): Promise<BungieNetResponse<DestinyClanAggregateStat[]>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyClanAggregateStat[]>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${params.groupId}/`,
      params: {
        modes: params.modes
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
