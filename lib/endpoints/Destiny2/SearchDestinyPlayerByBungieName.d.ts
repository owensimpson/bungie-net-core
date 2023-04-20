/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieMembershipType } from '../../schemas';
import { ExactSearchRequest } from '../../schemas';
import { UserInfoCard } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName} */
export declare type SearchDestinyPlayerByBungieNameParams = {
    /**
     * A valid non-BungieNet membership type, or All. Indicates which memberships to
     * return. You probably want this set to All.
    */
    membershipType: BungieMembershipType;
};
/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This
 * method will hide overridden memberships due to cross save.
 * @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName}
*/
export declare function searchDestinyPlayerByBungieName(this: AccessTokenObject | void, params: SearchDestinyPlayerByBungieNameParams, body: ExactSearchRequest): Promise<BungieNetResponse<UserInfoCard[]>>;
