/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.1
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
import { PlatformFriendType } from '../../schemas'
import { PlatformFriendResponse } from '../../schemas'
/** @see {@link https://bungie-net.github.io/#Social.GetPlatformFriendList} */
export type GetPlatformFriendListParams = {
  /** The platform friend type. */
  friendPlatform: PlatformFriendType;
  /** The zero based page to return. Page size is 100. */
  page: string;
}

/**
 * Gets the platform friend of the requested type, with additional information if
 * they have Bungie accounts. Must have a recent login session with said platform.
 * @see {@link https://bungie-net.github.io/#Social.GetPlatformFriendList}
*/
export async function getPlatformFriendList(this:  AccessTokenObject | void, params: GetPlatformFriendListParams): Promise<BungieNetResponse<PlatformFriendResponse>> {
const token = (this as AccessTokenObject)?.access_token ?? undefined
  try {
    return await rateLimitedRequest<PlatformFriendResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Social/PlatformFriends/${params.friendPlatform}/${params.page}/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
