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

import { BungieMembershipType } from '../../enums/BungieMembershipType';
import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { GroupApplicationResponse } from '../../models/GroupsV2/GroupApplicationResponse';

/**
 * Cancels a pending invitation to join a group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel}
 */
export async function individualGroupInviteCancel(
  params: {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being cancelled. */
    membershipId: string;
    /** MembershipType of the account being cancelled. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupApplicationResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`
  );

  return client.fetch({ method: 'POST', url });
}
