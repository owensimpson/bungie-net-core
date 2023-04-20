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
import { AwaAuthorizationResult } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.AwaGetActionToken} */
export type AwaGetActionTokenParams = {
  /** The identifier for the advanced write action request. */
  correlationId: string;
};

/**
 * Returns the action token if user approves the request.
 * @see {@link https://bungie-net.github.io/#Destiny2.AwaGetActionToken}
 */
export async function awaGetActionToken(
  this: AccessTokenObject | void,
  params: AwaGetActionTokenParams
): Promise<BungieNetResponse<AwaAuthorizationResult>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<AwaAuthorizationResult>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/Awa/GetActionToken/${params.correlationId}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
