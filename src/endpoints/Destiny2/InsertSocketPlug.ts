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
import { DestinyInsertPlugsActionRequest } from '../../schemas';
import { DestinyItemChangeResponse } from '../../schemas';
/**
 * Insert a plug into a socketed item. I know how it sounds, but I assure you it's
 * much more G-rated than you might be guessing. We haven't decided yet whether
 * this will be able to insert plugs that have side effects, but if we do it will
 * require special scope permission for an application attempting to do so. You
 * must have a valid Destiny Account, and either be in a social space, in orbit, or
 * offline. Request must include proof of permission for 'InsertPlugs' from the
 * account owner.
 *
 * Wait at least 0.5s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.InsertSocketPlug}
 */
export async function insertSocketPlug(
  this: AccessTokenObject | void,
  body: DestinyInsertPlugsActionRequest
): Promise<BungieNetResponse<DestinyItemChangeResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyItemChangeResponse>(token, {
      method: 'POST',
      url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/InsertSocketPlug/',
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
