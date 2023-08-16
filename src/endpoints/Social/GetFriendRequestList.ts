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

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { BungieFriendRequestListResponse } from '../../models/Social/Friends/BungieFriendRequestListResponse';

/**
 * Returns your friend request queue.
 * @see {@link https://bungie-net.github.io/#Social.GetFriendRequestList}
 */
export async function getFriendRequestList(
  client: BungieClientProtocol
): Promise<BungieNetResponse<BungieFriendRequestListResponse>> {
  const url = new URL(`https://www.bungie.net/Platform[object Object]`);

  return client.fetch({ method: 'GET', url });
}
