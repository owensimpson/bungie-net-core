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
import { GroupResponse } from '../../models/GroupsV2/GroupResponse';

/**
 * Get information about a specific group of the given ID.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroup}
 */
export async function getGroup(
  params: {
    /** Requested group's id. */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/`
  );

  return client.fetch({ method: 'GET', url });
}
