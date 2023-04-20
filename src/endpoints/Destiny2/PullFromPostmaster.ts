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
import { DestinyPostmasterTransferRequest } from '../../schemas'
/**
 * Extract an item from the Postmaster, with whatever implications that may entail.
 * You must have a valid Destiny account. You must also pass BOTH a reference AND
 * an instance ID if it's an instanced item.
 *
 * Wait at least 0.1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.PullFromPostmaster}
*/
export async function pullFromPostmaster(this:  AccessTokenObject | void, body: DestinyPostmasterTransferRequest): Promise<BungieNetResponse<number>> {
const token = (this as AccessTokenObject)?.access_token ?? undefined
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/PullFromPostmaster/'    ,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
