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

import { DestinyItemTransferRequest } from '../../models/Destiny/Requests/DestinyItemTransferRequest';
import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';

/**
 * Transfer an item to/from your vault. You must have a valid Destiny account. You
 * must also pass BOTH a reference AND an instance ID if it's an instanced item.
 * itshappening.gif
 *
 * Wait at least 0.1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.TransferItem}
 */
export async function transferItem(
  body: DestinyItemTransferRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<unknown>> {
  const url = new URL(`https://www.bungie.net/Platform[object Object]`);

  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}
