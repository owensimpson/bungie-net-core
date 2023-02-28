/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { DestinyComponentType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyProfileResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetProfile} */
export declare type GetProfileParams = {
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: DestinyComponentType[];
    /** Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Returns Destiny Profile information for the supplied membership.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetProfile}
*/
export declare function getProfile(this: InstancedImport | AccessTokenObject | void, params: GetProfileParams): Promise<BungieNetResponse<DestinyProfileResponse>>;
