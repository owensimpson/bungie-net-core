/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
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

/** @see {@link https://bungie-net.github.io/#Social.RemoveFriendRequest} */
export type RemoveFriendRequestParams = {
  /** The membership id of the user you wish to remove. */
  membershipId: string;
};

/**
 * Remove a friend relationship with the target user. The user must be on your
 * outgoing request friend list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.RemoveFriendRequest}
 */
export async function removeFriendRequest(
  this: AccessTokenObject | void,
  params: RemoveFriendRequestParams
): Promise<BungieNetResponse<boolean>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<boolean>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/Social/Friends/Requests/Remove/${params.membershipId}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
