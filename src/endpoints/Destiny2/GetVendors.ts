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
import { DestinyComponentType } from '../../schemas';
import { DestinyVendorFilter } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { DestinyVendorsResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetVendors} */
export type GetVendorsParams<T extends DestinyComponentType[]> = {
  /** The Destiny Character ID of the character for whom we're getting vendor info. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: [...T];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** The filter of what vendors and items to return, if any. */
  filter?: DestinyVendorFilter;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
};

/**
 * Get currently available vendors from the list of vendors that can possibly have
 * rotating inventory. Note that this does not include things like preview vendors
 * and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use
 * their definitions as-is for those.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetVendors}
 */
export async function getVendors<T extends DestinyComponentType[]>(
  this: AccessTokenObject | void,
  params: GetVendorsParams<T>
): Promise<BungieNetResponse<DestinyVendorsResponse<T>>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyVendorsResponse<T>>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
      params: {
        components: params.components ? params.components.join(',') : undefined,
        filter: params.filter
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
