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
import { UserTheme } from '../../schemas'
/**
 * Returns a list of all available user themes.
 * @see {@link https://bungie-net.github.io/#User.GetAvailableThemes}
*/
export async function getAvailableThemes(this: InstancedImport | AccessTokenObject | void): Promise<BungieNetResponse<UserTheme[]>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<UserTheme[]>(token, {
      method: 'GET',
      url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/'    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
