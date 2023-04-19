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
/** @see {@link https://bungie-net.github.io/#GroupV2.AbdicateFoundership} */
export type AbdicateFoundershipParams = {
  /** The new founder for this group. Must already be a group admin. */
  founderIdNew: string;
  /** The target group id. */
  groupId: string;
  /** Membership type of the provided founderIdNew. */
  membershipType: BungieMembershipType;
}

/**
 * An administrative method to allow the founder of a group or clan to give up
 * their position to another admin permanently.
 * @see {@link https://bungie-net.github.io/#GroupV2.AbdicateFoundership}
*/
export async function abdicateFoundership(this: InstancedImport | AccessTokenObject | void, params: AbdicateFoundershipParams): Promise<BungieNetResponse<boolean>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<boolean>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
