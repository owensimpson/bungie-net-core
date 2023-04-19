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
import { DestinyLoadoutUpdateActionRequest } from '../../schemas'
/**
 * Snapshot a loadout with the currently equipped items.
 *
 * Wait at least 1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.SnapshotLoadout}
*/
export async function snapshotLoadout(this: InstancedImport | AccessTokenObject | void, body: DestinyLoadoutUpdateActionRequest): Promise<BungieNetResponse<number>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: 'https://www.bungie.net/Platform/Destiny2/Actions/Loadouts/SnapshotLoadout/'    ,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
