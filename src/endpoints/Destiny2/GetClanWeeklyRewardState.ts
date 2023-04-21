/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
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
import { DestinyMilestone } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetClanWeeklyRewardState} */
export type GetClanWeeklyRewardStateParams = {
  /** A valid group id of clan. */
  groupId: string;
};

/**
 * Returns information on the weekly clan rewards and if the clan has earned them
 * or not. Note that this will always report rewards as not redeemed.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanWeeklyRewardState}
 */
export async function getClanWeeklyRewardState(
  this: AccessTokenObject | void,
  params: GetClanWeeklyRewardStateParams
): Promise<BungieNetResponse<DestinyMilestone>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyMilestone>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/Clan/${params.groupId}/WeeklyRewardState/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
