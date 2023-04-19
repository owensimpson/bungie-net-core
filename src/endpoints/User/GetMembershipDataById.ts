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
import { UserMembershipData } from '../../schemas'
/** @see {@link https://bungie-net.github.io/#User.GetMembershipDataById} */
export type GetMembershipDataByIdParams = {
  /** The membership ID of the target user. */
  membershipId: string;
  /** Type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}

/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipDataById}
*/
export async function getMembershipDataById(this: InstancedImport | AccessTokenObject | void, params: GetMembershipDataByIdParams): Promise<BungieNetResponse<UserMembershipData>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<UserMembershipData>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
