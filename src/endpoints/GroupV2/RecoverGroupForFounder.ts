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
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { GroupType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { GroupMembershipSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder} */
export type RecoverGroupForFounderParams = {
  /** Type of group the supplied member founded. */
  groupType: GroupType;
  /** Membership ID to for which to find founded groups. */
  membershipId: string;
  /** Membership type of the supplied membership ID. */
  membershipType: BungieMembershipType;
};

/**
 * Allows a founder to manually recover a group they can see in game but not on
 * bungie.net
 * @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder}
 */
export async function recoverGroupForFounder(
  this: AccessTokenObject | void,
  params: RecoverGroupForFounderParams
): Promise<BungieNetResponse<GroupMembershipSearchResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<GroupMembershipSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/GroupV2/Recover/${params.membershipType}/${params.membershipId}/${params.groupType}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
