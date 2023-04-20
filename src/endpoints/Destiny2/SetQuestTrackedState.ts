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

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { DestinyItemStateRequest } from '../../schemas';
/**
 * Set the Tracking State for an instanced item, if that item is a Quest or Bounty.
 * You must have a valid Destiny Account. Yeah, it's an item.
 *
 * Wait at least 1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.SetQuestTrackedState}
 */
export async function setQuestTrackedState(
  this: AccessTokenObject | void,
  body: DestinyItemStateRequest
): Promise<BungieNetResponse<number>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/SetTrackedState/',
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
