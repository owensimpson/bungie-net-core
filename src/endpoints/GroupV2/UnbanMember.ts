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

import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { BungieMembershipType } from '../../schemas'
/** @see {@link https://bungie-net.github.io/#GroupV2.UnbanMember} */
export type UnbanMemberParams = {
  groupId: string;
  /** Membership ID of the member to unban from the group */
  membershipId: string;
  /** Membership type of the provided membership ID. */
  membershipType: BungieMembershipType;
}

/**
 * Unbans the requested member, allowing them to re-apply for membership.
 * @see {@link https://bungie-net.github.io/#GroupV2.UnbanMember}
*/
export async function unbanMember(this: InstancedImport | AccessTokenObject | void, params: UnbanMemberParams): Promise<BungieNetResponse<number>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Unban/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
