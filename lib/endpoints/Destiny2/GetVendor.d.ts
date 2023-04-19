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
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { DestinyComponentType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { DestinyVendorResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetVendor} */
export declare type GetVendorParams<T extends DestinyComponentType[]> = {
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
export declare function getVendor<T extends DestinyComponentType[]>(this: InstancedImport | AccessTokenObject | void, params: GetVendorParams<T>): Promise<BungieNetResponse<DestinyVendorResponse<T>>>;
