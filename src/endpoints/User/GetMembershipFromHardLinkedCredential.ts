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
import { BungieCredentialType } from '../../schemas'
import { HardLinkedUserMembership } from '../../schemas'
/** @see {@link https://bungie-net.github.io/#User.GetMembershipFromHardLinkedCredential} */
export type GetMembershipFromHardLinkedCredentialParams = {
  /** The credential to look up. Must be a valid SteamID64. */
  credential: string;
  /** The credential type. 'SteamId' is the only valid value at present. */
  crType: BungieCredentialType;
}

/**
 * Gets any hard linked membership given a credential. Only works for credentials
 * that are public (just SteamID64 right now). Cross Save aware.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipFromHardLinkedCredential}
*/
export async function getMembershipFromHardLinkedCredential(this: InstancedImport | AccessTokenObject | void, params: GetMembershipFromHardLinkedCredentialParams): Promise<BungieNetResponse<HardLinkedUserMembership>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<HardLinkedUserMembership>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${params.crType}/${params.credential}/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
