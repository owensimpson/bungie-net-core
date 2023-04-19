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
import { GroupApplicationResponse } from '../../schemas'
/** @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel} */
export type IndividualGroupInviteCancelParams = {
  /** ID of the group you would like to join. */
  groupId: string;
  /** Membership id of the account being cancelled. */
  membershipId: string;
  /** MembershipType of the account being cancelled. */
  membershipType: BungieMembershipType;
}

/**
 * Cancels a pending invitation to join a group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel}
*/
export async function individualGroupInviteCancel(this: InstancedImport | AccessTokenObject | void, params: IndividualGroupInviteCancelParams): Promise<BungieNetResponse<GroupApplicationResponse>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<GroupApplicationResponse>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
