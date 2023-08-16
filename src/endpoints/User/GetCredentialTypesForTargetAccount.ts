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

/**
 * Returns a list of credential types attached to the requested account
 * @see {@link https://bungie-net.github.io/#User.GetCredentialTypesForTargetAccount}
 */
export async function getCredentialTypesForTargetAccount(
  params: {
    /** The user's membership id */
    membershipId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<unknown>> {
  const url = new URL(
    `https://www.bungie.net/Platform/User/GetCredentialTypesForTargetAccount/${params.membershipId}/`
  );

  return client.fetch({ method: 'GET', url });
}
