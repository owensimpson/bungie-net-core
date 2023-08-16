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

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanLeaderboards}
 */
export async function getClanLeaderboards(
  params: {
    /** Group ID of the clan whose leaderboards you wish to fetch. */
    groupId: string;
    /**
     * Maximum number of top players to return. Use a large number to get entire
     * leaderboard.
     */
    maxtop?: number;
    /**
     * List of game modes for which to get leaderboards. See the documentation for
     * DestinyActivityModeType for valid values, and pass in string representation,
     * comma delimited.
     */
    modes?: string;
    /** ID of stat to return rather than returning all Leaderboard stats. */
    statid?: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<unknown>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/${params.groupId}/`
  );
  params.maxtop !== undefined &&
    url.searchParams.set('maxtop', String(params.maxtop));
  params.modes !== undefined &&
    url.searchParams.set('modes', String(params.modes));
  params.statid !== undefined &&
    url.searchParams.set('statid', String(params.statid));
  return client.fetch({ method: 'GET', url });
}
