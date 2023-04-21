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
import { RuntimeGroupMemberType } from '../../schemas';
import { SearchResultOfGroupMember } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetMembersOfGroup} */
export type GetMembersOfGroupParams = {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** The ID of the group. */
  groupId: string;
  /** Filter out other member types. Use None for all members. */
  memberType?: RuntimeGroupMemberType;
  /**
   * The name fragment upon which a search should be executed for members with
   * matching display or unique names.
   */
  nameSearch?: string;
};

/**
 * Get the list of members in a given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetMembersOfGroup}
 */
export async function getMembersOfGroup(
  this: AccessTokenObject | void,
  params: GetMembersOfGroupParams
): Promise<BungieNetResponse<SearchResultOfGroupMember>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<SearchResultOfGroupMember>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/`,
      params: {
        currentpage: params.currentpage,
        memberType: params.memberType,
        nameSearch: params.nameSearch
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
