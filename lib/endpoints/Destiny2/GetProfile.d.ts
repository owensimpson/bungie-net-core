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
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { DestinyComponentType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { DestinyProfileResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetProfile} */
export declare type GetProfileParams<T extends DestinyComponentType[]> = {
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: [...T];
    /** Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Returns Destiny Profile information for the supplied membership.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetProfile}
*/
export declare function getProfile<T extends DestinyComponentType[]>(this: AccessTokenObject | void, params: GetProfileParams<T>): Promise<BungieNetResponse<DestinyProfileResponse<T>>>;
