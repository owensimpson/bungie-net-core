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
import { BungieMembershipType } from '../../schemas';
import { DestinyVendorResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetVendor} */
export type GetVendorParams<T extends DestinyComponentType[]> = {
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
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /** The Hash identifier of the Vendor to be returned. */
  vendorHash: number;
};

/**
 * Get the details of a specific Vendor.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetVendor}
 */
export async function getVendor<T extends DestinyComponentType[]>(
  this: AccessTokenObject | void,
  params: GetVendorParams<T>
): Promise<BungieNetResponse<DestinyVendorResponse<T>>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyVendorResponse<T>>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/${params.vendorHash}/`,
      params: {
        components: params.components ? params.components.join(',') : undefined
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
